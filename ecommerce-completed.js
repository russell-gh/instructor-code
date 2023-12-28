//export default
class OrdersAnalyzer {
  constructor() {
    //used so we can return the name of the day not just the day number
    this.weekdays = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
  }

  averageOrderValue(orders, weekday) {
    const chosenDay = this.weekdays.indexOf(weekday);
    console.log(chosenDay, this.weekdays, weekday);
    //remove the data which is not for the current day
    const filteredOrders = orders.filter((item) => {
      const dayOfTheWeek = new Date(item.creationDate);

      return dayOfTheWeek.getDay() === chosenDay;
    });
    // console.log(filteredOrders);

    //create object to be returned
    const result = {
      count: filteredOrders.length, //the count is just the number of result after we filtered the data
      total: 0,
      avg: 0,
      weekdayNiceName: this.weekdays[weekday], //weekday happens to be array index of the data at the top!
    };
    // console.log(result);

    //loop over the orders
    filteredOrders.map((item, index) => {
      let innerTotal = 0;
      item.orderLines.map((innerItem) => {
        innerTotal += innerItem.unitPrice * innerItem.quantity;
        // console.log("34.98",innerItem, innerItem.unitPrice, innerItem.quantity, innerItem.unitPrice * innerItem.quantity)
      });

      // console.log("innerTotal", innerTotal)

      //add each order to the running total
      result.total += innerTotal;
      // console.log("resultTotal", result.total)

      //if this is the last order, we now have the data to calc the average
      if (index === filteredOrders.length - 1) {
        //index starts at 0 length starts at 1 so need to -1
        result.avg = result.total / result.count; //basic average
        result.total = result.total;
        result.avg = result.avg;
      }
    });
    // console.log(result)
    // result.avg = Number(result.avg);
    // result.total = Number(result.total);
    return result;
  }
}

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

//instance of the class and call the new functionality
const _ordersAnalyzer = new OrdersAnalyzer();
//first params is an array of objects that contain the order day and value
// second param is the day (0 is sunday)
const result = _ordersAnalyzer.averageOrderValue(orders, "SUNDAY");

console.log(result);
