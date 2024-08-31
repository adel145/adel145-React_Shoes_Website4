const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        console.log("Received order data:", req.body); // בדוק שהנתונים מגיעים לשרת כראוי

        const { customerName, email, phone, address, shippingOption, products, totalAmount } = req.body;

        console.log("Parsed order data:", {
            customerName,
            email,
            phone,
            address,
            shippingOption,
            products,
            totalAmount,
        });

        const newOrder = new Order({
            customerName,
            email,
            phone,
            address,
            shippingOption,
            products,
            totalAmount,
        });

        const savedOrder = await newOrder.save(); // נסה לשמור את ההזמנה ב-MongoDB
        console.log("Order saved successfully:", savedOrder); // בדוק ש-`savedOrder` לא ריק

        res.status(201).json(savedOrder); // החזרת ההזמנה ל-Frontend
    } catch (err) {
        console.error("Error creating order:", err); // הדפסת השגיאה בקונסול השרת
        res.status(500).json({ message: 'Error creating order', error: err.message });
    }
};
