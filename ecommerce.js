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
    //remove the data which is not for the current day
    const filteredOrders = orders.filter((item) => {
      return item.weekday === weekday;
    });

    //create objec to be returned
    const result = {
      count: filteredOrders.length, //the count is just the number of result after we filtered the data
      total: 0,
      average: 0,
      weekdayNiceName: this.weekdays[weekday], //weekday happens to be array index of the data at the top!
    };

    //loop over the orders
    filteredOrders.map((item, index) => {
      //add each order to the running total
      result.total += item.value;

      //if this is the last order, we now have the data to calc the average
      if (index === filteredOrders.length - 1) {
        //index starts at 0 length starts at 1 so need to -1
        result.average = result.total / result.count; //basic average
      }
    });

    return result;
  }
}

//some sample order data
const orders = [
  { weekday: 0, value: 100 },
  { weekday: 0, value: 200 },
  { weekday: 2, value: 100 },
  { weekday: 2, value: 300 },
  { weekday: 2, value: 400 },
  { weekday: 2, value: 150 },
  { weekday: 3, value: 100 },
  { weekday: 4, value: 200 },
];

//instance of the class and call the new functionality
const _ordersAnalyzer = new OrdersAnalyzer();
//first params is an array of objects that contain the order day and value
//second param is the day (0 is sunday)
const result = _ordersAnalyzer.averageOrderValue(orders, 2);

console.log(result);
