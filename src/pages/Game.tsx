import { FC, useEffect, useState } from 'react';
import { Game2048, GameBoard } from '../lib/Game2048.ts';
import { Board } from '../components/Board.tsx';

const KEY_LEFT = 'ArrowLeft';
const KEY_UP = 'ArrowUp';
const KEY_RIGHT = 'ArrowRight';
const KEY_DOWN = 'ArrowDown';

export const Game: FC = () => {
  const [game] = useState(new Game2048());
  const [board, setBoard] = useState<GameBoard>(game.board);
  const [size, setSize] = useState(6);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [easyMode, setEasyMode] = useState(false);

  const checkGame = () => {
    if (game.isWon()) {
      setWon(true);
      return;
    }

    if (easyMode) {
      if (game.isLostEasyMode()) setLost(true);
    } else {
      if (game.isLost()) setLost(true);
    }
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (lost || won) return;

      switch (event.key) {
        case KEY_LEFT:
          game.left();
          setBoard(game.board);
          checkGame();
          break;
        case KEY_UP:
          game.up();
          setBoard(game.board);
          checkGame();
          break;
        case KEY_RIGHT:
          game.right();
          setBoard(game.board);
          checkGame();
          break;
        case KEY_DOWN:
          game.down();
          setBoard(game.board);
          checkGame();
          break;
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  });

  return (
    <div className="game">
      {lost && <h1>lost</h1>}
      {won && <h1>won</h1>}
      <Board gameState={board} />
      <div>
        <button onClick={() => setEasyMode(!easyMode)}>{easyMode ? 'Easy' : 'Hard'}</button>
      </div>
    </div>
  );
};
