import './App.css';
import { Game } from './views/Game.tsx';
import { Game2048 } from './lib/Game2048.ts';
import { AUTOPLAY_NEW_TWO_COUNT, DEFAULT_SIZE } from './constants.ts';
import { useState } from 'react';

const App = () => {
  const [game, setGame] = useState<Game2048>(new Game2048(DEFAULT_SIZE[0], DEFAULT_SIZE[1], AUTOPLAY_NEW_TWO_COUNT));

  return <Game game={game} setGame={setGame} />;
};

export default App;
