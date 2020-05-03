import React from 'react';
import {useWindowDimensions} from 'react-native';
import {List} from 'react-native-paper';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';
import styled from 'styled-components/native';

const PlaceholderDetail = ({testID}: {testID: string}) => {
  const imageWidth = Math.floor(useWindowDimensions().width);
  const imageHeight = Math.floor(useWindowDimensions().height * 0.5);

  return (
    <Placeholder testID={testID} Animation={Fade}>
      <PlaceholderImage height={imageHeight} width={imageWidth} />

      <PlaceholderName width={50} />

      <List.Item
        title="Gender"
        description={() => <PlaceholderValue width={30} />}
      />

      <List.Item
        title="Aliases"
        description={() => <PlaceholderValue width={80} />}
      />
    </Placeholder>
  );
};

export default PlaceholderDetail;

const PlaceholderImage = styled(PlaceholderMedia)<{
  height: string;
  width: string;
}>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

const PlaceholderName = styled(PlaceholderLine)`
  margin: 16px 16px 8px 16px;
  height: 24px;
`;

const PlaceholderValue = styled(PlaceholderLine)`
  margin-top: 4px;
  margin-bottom: 4px;
`;
