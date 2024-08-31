// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     customerName: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true },
//     shippingOption: { type: String, required: true },
//     products: [
//         {
//             productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//             name: { type: String, required: true },
//             price: { type: Number, required: true },
//             quantity: { type: Number, required: true },
//         }
//     ],
//     totalAmount: { type: Number, required: true },
//     createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Order', orderSchema);

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    shippingOption: { type: String, required: true },
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
    }],
    totalAmount: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
