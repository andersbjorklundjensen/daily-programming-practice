import Game from "./Game";

describe('Game class tests', () => {
  it('should return a score of 1 if 1 pin is knocked down', () => {
    const game = new Game();

    game.roll(1);

    expect(game.score()).toBe(1);
  });

  it('should return a score of 2 if 2 pins is knocked down', () => {
    const game = new Game();

    game.roll(2);

    expect(game.score()).toBe(2);
  })

  it('should not be allowed to knock down more than 10 pins in one frame', () => {
    const game = new Game();

    game.roll(11);

    expect(game.score()).toBe(0);
  })

  it('should not be allowed to bowl more than 10 frames', () => {
    const game = new Game();

    for (let i = 0; i < 100; i++) {
      game.roll(1);
    }

    expect(game.score()).toBe(20);
  })

  // spare means to knock down 10 pins in two throws.
  it('should a bonus to previous frame after bowling a spare', () => {
    const game = new Game();

    game.roll(5);
    game.roll(5);
    game.roll(5);

    expect(game.score()).toBe(20);
  })
});