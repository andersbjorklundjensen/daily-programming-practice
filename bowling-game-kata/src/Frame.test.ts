import Frame from "./Frame";

describe('Frame class tests', () => {
  it('should not be able to roll more than twice for a frame', () => {
    const frame = new Frame();

    frame.addRoll(1)
    frame.addRoll(1)
    frame.addRoll(1)

    expect(frame.getTotalPoints()).toBe(2);
  })

  it('should not be able to knock down more than 10 pins in a frame', () => {
    const frame = new Frame();

    frame.addRoll(5)
    frame.addRoll(6)

    expect(frame.getTotalPoints()).toBe(5);
  })

  it('should mark a frame as complete if 10 pins has been knocked', () => {
    const frame = new Frame();

    frame.addRoll(10);

    expect(frame.isComplete()).toBeTruthy();
  })

  it('should mark a frame as complete if 2 rolls has been rolled', () => {
    const frame = new Frame();

    frame.addRoll(1);
    frame.addRoll(1);

    expect(frame.isComplete()).toBeTruthy();
  })
});