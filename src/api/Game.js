export const Monopoly = {
  setup: (ctx) => ({
    fields: initFields(),
    dice: [1, 1],
    tokenPositions: Array(ctx.numPlayers).fill(0)
  }),

  moves: {
    rollDice: (G, ctx, id) => {
      G.dice = [ctx.random.D6(), ctx.random.D6()];

      G.tokenPositions[ctx.playOrderPos] = nextTokenPosition(
        currentTokenPosition(G, ctx), diceValue(G.dice));
    },
  },
};

const initFields = () => {
  return Array(40).fill(null).map((field, index) => index);
}

const diceValue = (diceArray) => {
  return diceArray.reduce((previous, current) => previous + current, 0);
}

const currentTokenPosition = (G, ctx) => {
  return G.tokenPositions[ctx.playOrderPos];
}

const nextTokenPosition = (current, diceValue) => {
  return (current + diceValue) % 40;
}

const movePlayerToken = (G, ctx) => {
  const diceValue = diceValue(G.dice);

  const currentPosition = G.tokenPositions[ctx.playOrderPos];

  G.tokenPositions[ctx.playOrderPos] += currentPosition;
}