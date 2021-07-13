import { INVALID_MOVE } from 'boardgame.io/core';

export const Monopoly = {
  setup: () => ({ fields: initFields() }),
  
  turn: {
    moveLimit: 1,
  },

  moves: {
    rollDice: (G, ctx, id) => {

    },
  },
};

const initFields = () => {
  return Array(40).fill(null).map((field, index) => index);
}