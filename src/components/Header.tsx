import { Typography } from 'antd';

const { Text, Paragraph } = Typography;

export const Header = () => (
  <>
    <Typography>
      <h1 data-testid="header-title" className="title-2048">
        2048
      </h1>
      <Paragraph className="subtitle-2048">
        Press <Text code>Start!</Text> to start a new game.
      </Paragraph>
      <Paragraph className="subtitle-2048">
        Use the arrow keys (<Text keyboard>&larr;</Text>
        <Text keyboard>&uarr;</Text>
        <Text keyboard>&rarr;</Text>
        <Text keyboard>&darr;</Text>) to control the game.
      </Paragraph>
    </Typography>
  </>
);
