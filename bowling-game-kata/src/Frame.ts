export default class Frame {
  private rolls: number[] = [];
  private complete: boolean = false;
  private bonus: number = 0;

  public addRoll(amountOfPinsKnocked: number) {
    if (this.isComplete()) return;
    if (this.getTotalPoints() + amountOfPinsKnocked > 10) return;
    this.rolls.push(amountOfPinsKnocked);
  }

  public addBonus(bonus: number) {
    this.bonus = bonus;
  }

  public getBonus() {
    return this.bonus;
  }

  public isComplete() {
    if (this.rolls.length === 2) return true;
    if (this.getTotalPoints() === 10) return true;
    return false;
  }

  public isSpare() {
    if (this.isComplete() && this.getTotalPoints() === 10 && this.rolls.length === 2)
      return true;

    return false;
  }

  public isStrike() {
    if (this.isComplete() && this.getTotalPoints() === 10 && this.rolls.length === 1)
      return true;

    return false;
  }

  public getRolls() {
    return this.rolls;
  }

  public getTotalPoints() {
    return this.rolls.reduce((total, current) => total + current, 0);
  }
}