import './Game.css';
import { FC, useEffect, useState } from 'react';
import { Game2048, GameBoard } from '../lib/Game2048.ts';
import { Board } from '../components/Board.tsx';
import { Button, Form, Select, Switch } from 'antd';

const KEY_LEFT = 'ArrowLeft';
const KEY_UP = 'ArrowUp';
const KEY_RIGHT = 'ArrowRight';
const KEY_DOWN = 'ArrowDown';
const AUTOPLAY_INPUT_DELAY = 200;
const DEFAULT_SIZE = 6;

export const Game: FC = () => {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [game, setGame] = useState<Game2048>(new Game2048(size, size));
  const [board, setBoard] = useState<GameBoard>(game.board);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [easyMode, setEasyMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [autoPlayTimer, setAutoPlayTimer] = useState<number>(0);

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

  const handleSizeSelect = (newSize: number) => {
    setSize(newSize);
  };

  const handleStart = () => {
    setLost(false);
    setWon(false);
    setAutoPlay(false);
    clearTimeout(autoPlayTimer);
    setGame(new Game2048(size, size));
  };

  useEffect(() => {
    if (autoPlay) {
      const timeoutId = setTimeout(() => {
        if (autoPlay) {
          game.down();
          setBoard(game.board);
        }
      }, AUTOPLAY_INPUT_DELAY);
      setAutoPlayTimer(timeoutId);
    }
  }, [autoPlay, board]);

  useEffect(() => {
    setBoard(game.board);
  }, [game]);

  useEffect(() => {
    if (autoPlay) return;

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
  }, [game, board]);

  return (
    <>
      <h1 className="title-2048">2048</h1>
      <div className="game">
        <Board gameBoard={board} won={won} lost={lost} />
      </div>
      <div className="controls">
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 6 }} layout="horizontal">
          <Form.Item label="Easy Mode" valuePropName="checked">
            <Switch onClick={() => setEasyMode(!easyMode)} />
          </Form.Item>
          <Form.Item label="Form Size" name="size" initialValue={DEFAULT_SIZE}>
            <Select onChange={handleSizeSelect}>
              <Select.Option value={4}>4x4</Select.Option>
              <Select.Option value={6}>6x6</Select.Option>
              <Select.Option value={8}>8x8</Select.Option>
              <Select.Option value={10}>10x10</Select.Option>
              <Select.Option value={12}>12x12</Select.Option>
              <Select.Option value={14}>14x14</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" onClick={() => handleStart()}>
              Start Game!
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
