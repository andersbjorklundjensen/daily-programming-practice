import Transaction, { TransactionType } from './Transaction';

function getDateStringForToday() {
  const date = new Date();
  return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
}

describe('Transaction class tests', () => {
  it('should create a $100 deposit transaction correctly', () => {
    const transaction = new Transaction(100, TransactionType.DEPOSIT);

    expect(transaction.amount).toBe(100);
    expect(transaction.type).toBe(TransactionType.DEPOSIT);
    expect(transaction.date).toBe(getDateStringForToday());
  })

  it('should create a $100 withdrawl transaction correctly', () => {
    const transaction = new Transaction(100, TransactionType.WITHDRAWL);

    expect(transaction.amount).toBe(100);
    expect(transaction.type).toBe(TransactionType.WITHDRAWL);
    expect(transaction.date).toBe(getDateStringForToday());
  })
});