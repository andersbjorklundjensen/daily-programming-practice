export default class Game {
  private totalScore: number = 0;

  public roll(pinsKnockedDown: number) {
    this.totalScore += pinsKnockedDown;
  }

  public score(): number {
    return this.totalScore;
  }
}