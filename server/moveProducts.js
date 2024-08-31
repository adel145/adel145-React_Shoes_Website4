const mongoose = require('mongoose');
const Product = require('./models/Product');
const { products } = require('../src/products'); // ייבוא המוצרים

// התחברות ל-MongoDB
mongoose.connect('mongodb+srv://Student:webdev2024student@cluster0.uqyflra.mongodb.net/webdev2024')
.then(() => {
    console.log('MongoDB connected ;)');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});


// הוספת מוצרים ל-DB אם הם לא קיימים
const seedProducts = async () => {
    try {
        for (let product of products) {
            const existingProduct = await Product.findOne({ slug: product.slug });
            if (!existingProduct) {
                await Product.create(product);
                console.log(`Product '${product.name}' added successfully`);
            } else {
                console.log(`Product '${product.name}' already exists`);
            }
        }
        mongoose.connection.close(); // סגירת החיבור ל-MongoDB
    } catch (err) {
        console.error('Error inserting products:', err);
        mongoose.connection.close();
    }
};

seedProducts();
