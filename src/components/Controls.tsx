import { Button, Form, Select, Switch } from 'antd';
import { BOARD_SIZES, DEFAULT_SIZE } from '../constants.ts';

interface Props {
  onEasyMode: () => void;
  onSizeChange: (newSize: string) => void;
  onStart: () => void;
}

export const Controls = ({ onSizeChange, onEasyMode, onStart }: Props) => (
  <Form labelCol={{ span: 8 }} wrapperCol={{ span: 6 }} layout="horizontal">
    <Form.Item label="Easy Mode" valuePropName="checked">
      <Switch onClick={onEasyMode} data-testid="easy-mode-switch" />
    </Form.Item>

    <Form.Item label="Board Size" name="size" initialValue={DEFAULT_SIZE.join('x')}>
      <Select onChange={onSizeChange} data-testid="size-select">
        {BOARD_SIZES.map(([width, height]) => {
          const sizeString = `${width.toString()}x${height.toString()}`;
          return (
            <Select.Option
              value={`${width.toString()}x${height.toString()}`}
              key={`${width.toString()}x${height.toString()}`}
            >
              {sizeString}
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
      <Button type="primary" onClick={onStart} data-testid="start-button">
        Start!
      </Button>
    </Form.Item>
  </Form>
);
