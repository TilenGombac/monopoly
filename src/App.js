import { Client } from 'boardgame.io/react';
import { Monopoly } from './api/Game';
import Board from './components/Board';

const App = Client({
  game: Monopoly,
  board: Board,
});

export default App;