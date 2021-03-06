import React, {PureComponent} from 'react';
import {Avatar, List} from 'react-native-paper';

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
  onPress: (id: string) => void;
}

class Item extends PureComponent<ItemProps> {
  constructor(props: ItemProps) {
    super(props);
  }

  render() {
    const onPress = () => {
      this.props.onPress(this.props.id);
    };

    return (
      <List.Item
        onPress={onPress}
        title={this.props.name}
        left={() => (
          <Avatar.Image size={48} source={{uri: `${this.props.imageUrl}/48`}} />
        )}
      />
    );
  }
}

export default Item;
