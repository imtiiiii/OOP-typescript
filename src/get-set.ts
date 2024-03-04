class Savings {
  constructor(private amount: number) {
    this.amount = amount;
  }
  get currentAmount(): number {
    return this.amount;
  }
  set currentAmount(newAmount: number) {
    this.amount = newAmount;
  }
}
const imtiazSavings = new Savings(1000);
console.log("getter", imtiazSavings.currentAmount);
imtiazSavings.currentAmount = 209;
console.log("getter after calling setter", imtiazSavings.currentAmount);
