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
});