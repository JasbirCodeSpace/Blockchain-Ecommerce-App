const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://test:random12345@blockchain-ecommerce.cjtny.mongodb.net/blockchain?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
    id: String, 
    itemId: String,
    paid:Boolean

});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
}