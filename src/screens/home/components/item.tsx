import React, {PureComponent} from 'react';
import {Avatar, List} from 'react-native-paper';

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

class Item extends PureComponent<ItemProps> {
  constructor(props: ItemProps) {
    super(props);
  }

  render() {
    return (
      <List.Item
        title={this.props.name}
        left={() => (
          <Avatar.Image size={48} source={{uri: this.props.imageUrl}} />
        )}
      />
    );
  }
}

export default Item;
