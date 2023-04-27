module.exports = [
    {
        conditions: {
          all: [
            {
              fact: "price",
              operator: "greaterThanInclusive",
              value: 10000
            }
          ]
        },
        priority: 2,
        event: {
          type: "bigSpenderDiscount",
          params: {
            amount: 0.05,
            type: "percentage"
          }
        },
      },
      {
        conditions: {
          any: [
            {
              fact: "deliveryAddress",
              operator: "equal",
              value: "Barangaroo, Sydney"
            }
          ]
        },
        priority: 1,
        event: {
          type: "sweetDigsDiscount",
          params: {
            amount: 0.01,
            type: "percentage"
          }
        },
      },
      {
        conditions: {
          any: [
            {
              fact: "productSKU",
              operator: "equal",
              value: "foo"
            },
            {
              fact: "productSKU",
              operator: "equal",
              value: "bar",
            },
          ]
        },
        priority: 3,
        event: {
          type: "productSkuDiscount",
          params: {
            amount: 100,
            type: "fixed"
          }
        },
      },
];