const { Engine } = require('json-rules-engine');
const ruleDefinitions = require('../utils/ruleDefinitions')
const discountService = {};

discountService.setRulesEngine = async() => {
    const engine = new Engine();
    const rules = ruleDefinitions;
    rules.forEach((rule) => engine.addRule(rule));
    return engine;
}

discountService.applyDiscount = async(request) => {
    try {
        const { price, productSKU } = request.productDetails;
        const { deliveryAddress } = request.customerDetails;

        let facts = {
            price,
            deliveryAddress,
            productSKU
        };
        const engine = await discountService.setRulesEngine();
        const results = await engine.run(facts);

        // Calculate the final price with discounts
        let finalPrice = price;
        let totalDiscount = 0;
      
        for (const event of results.events) {
            if (event.params.type === 'percentage') {
              totalDiscount += finalPrice * event.params.amount;
            } else if (event.params.type === 'fixed') {
              totalDiscount += event.params.amount;
            }
        }
      
        finalPrice -= totalDiscount;

    return finalPrice;

    } catch (error) {
        console.log("Error while running rules engine")
        throw error;
    }
}

module.exports = discountService;