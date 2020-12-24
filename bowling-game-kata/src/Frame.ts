export default class Frame {
  private rolls: number[] = [];
  private complete: boolean = false;

  public addRoll(amountOfPinsKnocked: number) {
    if (this.isComplete()) return;
    if (this.getTotalPoints() + amountOfPinsKnocked > 10) return;
    this.rolls.push(amountOfPinsKnocked);
  }

  public isComplete() {
    if (this.rolls.length === 2) return true;
    if (this.getTotalPoints() === 10) return true;
    return false;
  }

  public getTotalPoints() {
    return this.rolls.reduce((total, current) => total + current, 0);
  }
}