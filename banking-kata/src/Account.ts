export default class Account {
  private balance: number = 0;

  public deposit(amount: number) {
    this.balance += amount;
  }

  public withdraw(amount: number) {
    if (this.balance < amount) return;
    this.balance -= amount;
  }
  
  public getBalance(): number {
    return this.balance;
  }
}