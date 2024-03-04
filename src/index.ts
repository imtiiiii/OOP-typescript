class BankAccount {
  accNumber: number;
  routingNumber: number;
  ssn: number;
  name: string;
  balance: number = 0;
  constructor(
    accNumber: number,
    routingNumber: number,
    ssn: number,
    name: string,
    balance: number = 0,
  ) {
    this.accNumber = accNumber;
    this.routingNumber = routingNumber;
    this.ssn = ssn;
    this.name = name;
    this.balance = balance;
  }
}
const newBankAcc = new BankAccount(1112, 2111, 1234, "Tanvir", 1000);
newBankAcc.balance = 2000;
// console.log("newBankAcc", newBankAcc);
// ! WHEN MODIFIER IS PUBLIC WE CAN ACCESS THE PROPERTY FROM OUTSIDE THE CLASS
