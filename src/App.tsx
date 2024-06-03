import './App.css';
import { Game } from './views/Game.tsx';
import { Game2048 } from './lib/Game2048.ts';
import { useState } from 'react';
import { AUTOPLAY_NEW_TWO_COUNT, DEFAULT_OBSTACLES, DEFAULT_SIZE, DEFAULT_STARTING_TWOS } from './constants.ts';

import type { IGame2048 } from './types/Game2048.ts';

const App = () => {
  const [game, setGame] = useState<IGame2048>(new Game2048(DEFAULT_SIZE[0], DEFAULT_SIZE[1], AUTOPLAY_NEW_TWO_COUNT));

  const startNewGame = (
    width = DEFAULT_SIZE[0],
    height = DEFAULT_SIZE[1],
    startingTwos = DEFAULT_STARTING_TWOS,
    obstacles = DEFAULT_OBSTACLES,
  ) => new Game2048(width, height, startingTwos, obstacles);

  return <Game game={game} setGame={setGame} startNewGame={startNewGame} />;
};

export default App;
