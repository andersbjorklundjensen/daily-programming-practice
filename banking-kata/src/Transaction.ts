export enum TransactionType {
  DEPOSIT,
  WITHDRAWL
}

export default class Transaction {
  public readonly date: string;
  public readonly amount: number;
  public readonly type: TransactionType;

  public constructor($amount: number, $type: TransactionType) {
    const date = new Date();
    this.date = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
    this.amount = $amount;
    this.type = $type;
  }
}