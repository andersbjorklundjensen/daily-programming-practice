export default class Frame {
  private nr: number;
  private rolls: number[] = [];
  private complete: boolean = false;
  private bonus: number = 0;

  public constructor($nr: number) {
    this.nr = $nr;
  }

  public addRoll(amountOfPinsKnocked: number) {
    if (this.isComplete()) return;
    if (this.isInvalidRoll(amountOfPinsKnocked)) return;
    this.rolls.push(amountOfPinsKnocked);
  }

  private isInvalidRoll(amountOfPinsKnocked: number) {
    if (this.nr != 9) {
      if (this.getTotalPoints() + amountOfPinsKnocked > 10) return true;
    }
    return false;
  }

  public addBonus(bonus: number) {
    this.bonus = bonus;
  }

  public getBonus() {
    return this.bonus;
  }

  public isComplete() {
    if (this.nr !== 9) {
      if (this.rolls.length === 2) return true;
      if (this.getTotalPoints() === 10) return true;
    }

    if (this.nr === 9) {
      if (this.rolls.length === 3) return true;
      if (this.rolls.length === 2 && this.getTotalPoints() < 10)  return true;
    }
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