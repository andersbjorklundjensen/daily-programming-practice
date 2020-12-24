export default class Frame {
  private rolls: number[] = [];

  public addRoll(amountOfPinsKnocked: number) {
    if (this.rolls.length === 2) return;
    if (this.getTotalPoints() + amountOfPinsKnocked > 10) return;
    this.rolls.push(amountOfPinsKnocked);
  }

  public getTotalPoints() {
    return this.rolls.reduce((total, current) => total + current, 0);
  }
}