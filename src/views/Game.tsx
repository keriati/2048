import './Game.css';
import { FC, useCallback, useEffect, useState } from 'react';
import { Game2048, GameBoard } from '../lib/Game2048.ts';
import { Board } from '../components/Board.tsx';
import {
  AUTOPLAY_INPUT_DELAY,
  DEFAULT_OBSTACLES,
  DEFAULT_SIZE,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
} from '../constants.ts';
import { parseSize } from './GameServices.ts';
import { useAutoPlay } from '../hooks/useAutoPlay.ts';
import { Header } from '../components/Header.tsx';
import { Controls } from '../components/Controls.tsx';
import type { RadioChangeEvent } from 'antd/lib';

type GameControls = 'up' | 'down' | 'left' | 'right';

type Props = { game: Game2048; setGame: (game: Game2048) => void };

export const Game: FC<Props> = ({ game, setGame }) => {
  const [boardSize, setBoardSize] = useState(DEFAULT_SIZE);
  const [obstacles, setObstacles] = useState(DEFAULT_OBSTACLES);
  const [board, setBoard] = useState<GameBoard>(game.board);

  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [easyMode, setEasyMode] = useState(false);

  const { stopAutoPlay, autoPlayActive } = useAutoPlay(
    useCallback(
      (stopAutoPlay) => {
        game.down();
        setBoard(game.board);

        if (game.isLost()) {
          stopAutoPlay();
        }
      },
      [game],
    ),
    AUTOPLAY_INPUT_DELAY,
  );

  const checkGame = useCallback(() => {
    if (game.isWon()) {
      setWon(true);
      return;
    }

    if (easyMode) {
      if (game.isLostEasyMode()) setLost(true);
    } else {
      if (game.isLost()) setLost(true);
    }
  }, [easyMode, game]);

  const handleEasyMode = () => {
    setEasyMode(!easyMode);
  };

  const handleSizeSelect = (newSize: string) => {
    setBoardSize(parseSize(newSize));
  };

  const handleObstacleChange = (event: RadioChangeEvent) => {
    setObstacles(Number(event.target.value));
  };

  const handleStart = () => {
    stopAutoPlay();

    setLost(false);
    setWon(false);

    const newGame = new Game2048(boardSize[0], boardSize[1], 1, obstacles);
    setGame(newGame);
    setBoard(newGame.board);
  };

  const updateBoard = useCallback(
    (direction: GameControls) => {
      game[direction]();

      setBoard(game.board);

      checkGame();
    },
    [checkGame, game],
  );

  useEffect(() => {
    if (autoPlayActive || lost || won) return;

    const keyDownHandler = (event: KeyboardEvent) => {
      switch (event.key) {
        case KEY_LEFT:
          updateBoard('left');
          break;
        case KEY_UP:
          updateBoard('up');
          break;
        case KEY_RIGHT:
          updateBoard('right');
          break;
        case KEY_DOWN:
          updateBoard('down');
          break;
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [game, board, autoPlayActive, lost, won, checkGame, updateBoard]);

  return (
    <div data-testid="game-2048">
      <Header />

      <div className="game">
        <Board gameBoard={board} won={won} lost={lost} />
      </div>

      <div className="controls">
        <Controls
          onEasyMode={handleEasyMode}
          onSizeChange={handleSizeSelect}
          onStart={handleStart}
          onObstacleChange={handleObstacleChange}
        />
      </div>
    </div>
  );
};
