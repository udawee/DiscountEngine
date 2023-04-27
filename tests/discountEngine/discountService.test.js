const discountService = require('../../discountEngine/discountService');

describe('discountService',() => {
    describe('applyDiscount', () => {
        it('should apply bigSpenderDiscount if the price is greater that or equal to 10000', async() => {

            const request = {
                "productDetails" : {
                    "price" : 11000,
                    "description" : "sample food product",
                    "productSKU" : "eiwhrioh"
                },
                "customerDetails" : {
                    "deliveryAddress": "Barangaroo, Melbourne",
                    "name": "udari",
                    "email": "khasf@gmail.com",
                    "phoneNumber": "0452477390"
                }
            };

            const finalPrice = await discountService.applyDiscount(request);
            //apply 5% discount on initial price
            expect(finalPrice).toBe(10450);
        })
    })
})