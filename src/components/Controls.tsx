import { Button, Form, Radio, Select, Switch } from 'antd';
import { BOARD_SIZES, DEFAULT_OBSTACLES, DEFAULT_SIZE, NUM_OBSTACLES } from '../constants.ts';

import type { FC } from 'react';
import type { RadioChangeEvent } from 'antd/lib';

interface Props {
  onEasyMode: () => void;
  onSizeChange: (newSize: string) => void;
  onStart: () => void;
  onObstacleChange: (event: RadioChangeEvent) => void;
}

export const Controls: FC<Props> = ({ onSizeChange, onEasyMode, onStart, onObstacleChange }) => (
  <Form labelCol={{ span: 11 }} wrapperCol={{ span: 4 }} layout="horizontal">
    <Form.Item label="Easy Mode" valuePropName="checked">
      <Switch onClick={onEasyMode} data-testid="easy-mode-switch" />
    </Form.Item>

    <Form.Item label="Board Size" name="size" initialValue={DEFAULT_SIZE.join('x')}>
      <Select onChange={onSizeChange} data-testid="size-select">
        {BOARD_SIZES.map(([width, height]) => {
          const sizeString = `${width.toString()}x${height.toString()}`;
          return (
            <Select.Option value={sizeString} key={sizeString}>
              {sizeString}
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>

    <Form.Item label="Obstacles" name="obstacles" initialValue={DEFAULT_OBSTACLES}>
      <Radio.Group onChange={onObstacleChange}>
        {NUM_OBSTACLES.map((obstacleNumber) => (
          <Radio.Button key={obstacleNumber} value={obstacleNumber}>
            {obstacleNumber}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 11, span: 8 }}>
      <Button type="primary" onClick={onStart} data-testid="start-button">
        Start!
      </Button>
    </Form.Item>
  </Form>
);
