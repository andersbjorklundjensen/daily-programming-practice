import Account from './Account';

describe('Account class tests', () => {
  it('should have a balance of $100 when depositing $100', () => {
    const account = new Account();

    account.deposit(100);
    expect(account.getBalance()).toBe(100);
  })

  it('should have a balance of $200 when depositing $100 twice', () => {
    const account = new Account();

    account.deposit(100);
    account.deposit(100);

    expect(account.getBalance()).toBe(200);
  })

  it('should not change balance if more money is withdrawn than the account holds', () => {
    const account = new Account();

    account.deposit(100);
    account.withdraw(101);

    expect(account.getBalance()).toBe(100);
  })

  it('should contain $100 after adding $100 twice and withdrawing $100', () => {
    const account = new Account();

    account.deposit(100);
    account.deposit(100);
    account.withdraw(100);

    expect(account.getBalance()).toBe(100);
  })
})