import React from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';
import styled from 'styled-components';

const PlaceholderList = ({testID}: {testID: string}) => {
  const items: null[] = new Array(10).fill(null);

  return (
    <View testID={testID}>
      <Placeholder Animation={Fade}>
        {items.map((_, index) => (
          <PlaceholderItem key={index} />
        ))}
      </Placeholder>
    </View>
  );
};

const PlaceholderItem = () => {
  return (
    <List.Item
      title=""
      description={() => {
        return <PlaceholderTitle width={50} />;
      }}
      left={() => <PlaceholderMedia size={48} isRound={true} />}
    />
  );
};

const PlaceholderTitle = styled(PlaceholderLine)`
  margin-top: -12px;
`;

export default PlaceholderList;
