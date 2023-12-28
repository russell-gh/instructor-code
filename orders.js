//given the below order data, complete the
//function so it returns an object which:
//for a given day of the week calculates the
//total number of orders, total order value
//and average order value

//expected output
const output = {
  count: 3,
  total: 30,
  avg: 10,
};

//sample data
const orders = [
  {
    orderId: 554,
    creationDate: "2017-03-25T10:35:20Z",
    orderLines: [
      {
        productId: 9872,
        name: "Pencil",
        quantity: 3,
        unitPrice: 3.0,
      },
    ],
  },
  {
    orderId: 555,
    creationDate: "2017-03-25T11:24:20Z",
    orderLines: [
      {
        productId: 9872,
        name: "Pencil",
        quantity: 1,
        unitPrice: 3.0,
      },
      {
        productId: 1746,
        name: "Eraser",
        quantity: 1,
        unitPrice: 1.0,
      },
    ],
  },
  {
    orderId: 453,
    creationDate: "2017-03-27T14:53:12Z",
    orderLines: [
      {
        productId: 5723,
        name: "Pen",
        quantity: 4,
        unitPrice: 4.22,
      },
      {
        productId: 9872,
        name: "Pencil",
        quantity: 3,
        unitPrice: 3.12,
      },
      {
        productId: 3433,
        name: "Erasers Set",
        quantity: 1,
        unitPrice: 6.15,
      },
    ],
  },
  {
    orderId: 431,
    creationDate: "2017-03-20T12:15:02Z",
    orderLines: [
      {
        productId: 5723,
        name: "Pen",
        quantity: 7,
        unitPrice: 4.22,
      },
      {
        productId: 3433,
        name: "Erasers Set",
        quantity: 2,
        unitPrice: 6.15,
      },
    ],
  },
  {
    orderId: 690,
    creationDate: "2017-03-26T11:14:00Z",
    orderLines: [
      {
        productId: 9872,
        name: "Pencil",
        quantity: 4,
        unitPrice: 3.12,
      },
      {
        productId: 4098,
        name: "Marker",
        quantity: 5,
        unitPrice: 4.5,
      },
    ],
  },
];

//call the calculate function with the orders
//and the day of the week
//0 = sunday
calculate(orders, 0);

function calculate(orders, weekday) {
  console.log(orders, weekday);
  //add the logic here to calculate the answer
}
