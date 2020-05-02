import {Screen} from '@components';
import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {useCharacterDetail} from './hooks';

const CharacterDetailScreenComponent = () => {
  const {data} = useCharacterDetail();

  return (
    <Screen>
      <View>
        <Image
          source={{
            uri: data?.imageUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text>{data?.name}</Text>
        <Text>{data?.gender}</Text>
      </View>
    </Screen>
  );
};

const Image = styled(FastImage)`
  height: 400px;
`;

const CharacterDetailScreenOptions = {headerShown: true, title: ''};

export default class {
  static Component = CharacterDetailScreenComponent;
  static Options = CharacterDetailScreenOptions;
}
