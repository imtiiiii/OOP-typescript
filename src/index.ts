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
//

class BankAccount2 {
  accNumber: number;
  routingNumber: number;
  ssn: number;
  name: string;
  private balance: number;
  constructor(
    accNumber: number,
    routingNumber: number,
    ssn: number,
    name: string,
    balance: number,
  ) {
    this.accNumber = accNumber;
    this.routingNumber = routingNumber;
    this.ssn = ssn;
    this.name = name;
    this.balance = balance;
  }
}
const newBankAcc2 = new BankAccount2(1112, 2111, 1234, "Tanvir", 50);
// console.log("bank2", newBankAcc2);
// newBankAcc2.balance = 2000;
// ERROR: Property 'balance' is private and only accessible within class 'BankAccount2'.
