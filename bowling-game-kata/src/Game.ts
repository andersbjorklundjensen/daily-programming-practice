import Frame from "./Frame";

export default class Game {
  private frames: Frame[] = [];

  public roll(pinsKnockedDown: number) {
    if (this.isComplete()) return;
    const needToAddNewFrame = this.frames.length === 0 ||
      this.frames[this.frames.length - 1].isComplete();

    if (needToAddNewFrame) this.frames.push(new Frame());

    this.frames[this.frames.length - 1].addRoll(pinsKnockedDown);
  }

  public isComplete() {
    return this.frames[9] && this.frames[9].isComplete();
  }

  private calculateSpareBonus(indexForFrameThatIsSpare: number) {
    const nextFrameIndex = indexForFrameThatIsSpare + 1;
    if (this.frames[nextFrameIndex]) {
      return this.frames[nextFrameIndex].getRolls()[0];
    }

    return 0;
  }

  public score(): number {
    this.frames.map((frame, index) => {
      if (frame.isSpare()) frame.addBonus(this.calculateSpareBonus(index));
    })

    return this.frames
      .reduce((total, current) => {
        const totall = total + current.getTotalPoints() + current.getBonus() 
        return totall;
      }, 0);
  }
}