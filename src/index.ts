class Counter {
  private static count: number;
  constructor(value: number = 0) {
    Counter.count = value;
  }

  increment(): number {
    return ++Counter.count;
  }

  decrement(): number {
    return --Counter.count;
  }
}
const instance1 = new Counter(10);
const instance2 = new Counter(20);
// console.log("counter", instance1);
console.log("new counter 1", instance1.increment());
console.log("new counter 2", instance2.increment());
