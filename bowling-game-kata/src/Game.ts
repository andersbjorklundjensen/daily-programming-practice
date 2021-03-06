import Frame from "./Frame";

export default class Game {
  private frames: Frame[] = [];

  public roll(pinsKnockedDown: number) {
    if (this.isComplete()) return;
    const needToAddNewFrame = this.frames.length === 0 ||
      this.frames[this.frames.length - 1].isComplete();

    if (needToAddNewFrame) this.frames.push(new Frame(this.frames.length));

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

  public calculateStrikeBonus(indexForFrameThatIsStrike: number) {
    const nextFrameIndex = indexForFrameThatIsStrike + 1;
    const nextFrameRolls = this.frames[nextFrameIndex] ? this.frames[nextFrameIndex].getRolls() : [];

    if (nextFrameRolls.length === 2)
      return nextFrameRolls.reduce((total, current) => total + current, 0);
    
    if (nextFrameRolls.length === 1) {
      const nextRoll = nextFrameRolls[0];
      const nextNextRoll = this.frames[nextFrameIndex + 1] ? this.frames[nextFrameIndex + 1].getRolls()[0] : 0;
      return nextRoll + nextNextRoll;
    }

    if (nextFrameRolls.length === 3) {
      return nextFrameRolls[0] + nextFrameRolls[1];
    }

    return 0;
  }

  public score(): number {
    this.frames.map((frame, index) => {
      if (frame.isSpare()) frame.addBonus(this.calculateSpareBonus(index));
      if (frame.isStrike()) frame.addBonus(this.calculateStrikeBonus(index));
    })

    return this.frames
      .reduce((total, current) => total + current.getTotalPoints() + current.getBonus(), 0);
  }
}