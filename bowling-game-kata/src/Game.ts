export default class Game {
  private totalScore: number = 0;

  public roll(pinsKnockedDown: number) {
    if (pinsKnockedDown > 10) return;
    this.totalScore += pinsKnockedDown;
  }

  public score(): number {
    return this.totalScore;
  }
}