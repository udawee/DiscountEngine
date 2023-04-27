const DiscountService = require('./discountService');

const controller = {};

/**
 * applyDiscount - Applies discount to purchases
 * @returns Final price after discount
 * @param req
 * @param res
 */
 controller.applyDiscount = (req, res) => {
    return DiscountService.applyDiscount(req.body)
      .then(obj => res.status(200).json(obj))
      .catch(error => {
        console.log("Error while applying discount",error)
        res.sendStatus(500).send(error);
      });
  };

module.exports =  controller;