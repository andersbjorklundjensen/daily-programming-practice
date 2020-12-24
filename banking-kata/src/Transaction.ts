export enum TransactionType {
  DEPOSIT,
  WITHDRAWL
}

export default class Transaction {
  public readonly amount: number;
  public readonly type: TransactionType;

  public constructor($amount: number, $type: TransactionType) {
    this.amount = $amount;
    this.type = $type;
  }
}