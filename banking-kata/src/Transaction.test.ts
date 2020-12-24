import Transaction, { TransactionType } from './Transaction';

describe('Transaction class tests', () => {
  it('should create a $100 deposit transaction correctly', () => {
    const transaction = new Transaction(100, TransactionType.DEPOSIT);

    expect(transaction.amount).toBe(100);
    expect(transaction.type).toBe(TransactionType.DEPOSIT);
  })

  it('should create a $100 withdrawl transaction correctly', () => {
    const transaction = new Transaction(100, TransactionType.WITHDRAWL);

    expect(transaction.amount).toBe(100);
    expect(transaction.type).toBe(TransactionType.WITHDRAWL);
  })
});