import Frame from "./Frame";

export default class Game {
  private frames: Frame[] = [];

  public roll(pinsKnockedDown: number) {
    const needToAddNewFrame = this.frames.length === 0 ||
      this.frames[this.frames.length - 1].isComplete();

    if (this.isComplete()) return;
    if (needToAddNewFrame) this.frames.push(new Frame());

    this.frames[this.frames.length - 1].addRoll(pinsKnockedDown);
  }

  public isComplete() {
    return this.frames[9] && this.frames[9].isComplete();
  }

  public score(): number {
    return this.frames
      .reduce((total, current) => total + current.getTotalPoints(), 0);
  }
}