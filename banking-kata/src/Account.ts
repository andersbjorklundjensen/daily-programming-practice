import Transaction, { TransactionType } from "./Transaction";

export default class Account {
  private transactions: Transaction[] = [];

  public deposit(amount: number) {
    const depositTransaction = new Transaction(amount, TransactionType.DEPOSIT);
    this.transactions.push(depositTransaction);
  }

  public withdraw(amount: number) {
    if (this.getBalance() < amount) return;
    const withdrawlTransaction = new Transaction(amount, TransactionType.WITHDRAWL);
    this.transactions.push(withdrawlTransaction);
  }

  public getBalance(): number {
    return this.transactions
      .reduce((total, current) => {
        if (current.type === TransactionType.DEPOSIT)
          total += current.amount;
        if (current.type == TransactionType.WITHDRAWL)
          total -= current.amount;

        return total;
      }, 0);
  }
}