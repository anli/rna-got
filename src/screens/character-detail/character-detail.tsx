import {Screen} from '@components';
import React from 'react';
import {Headline, List} from 'react-native-paper';
import styled from 'styled-components/native';
import {DetailImage, PlaceholderDetail} from './components';
import {useCharacterDetail} from './hooks';

const CharacterDetailScreenComponent = () => {
  const {data, isLoading} = useCharacterDetail();

  return (
    <Screen>
      {isLoading && (
        <PlaceholderDetail testID="CharacterDetailScreen.PlaceholderDetail" />
      )}
      {!isLoading && data && (
        <>
          <DetailImage url={data.imageUrl} />
          <Name>{data.name}</Name>
          <List.Item title="Gender" description={data.gender} />
          <List.Item title="Aliases" description={data.aliases.join(', ')} />
        </>
      )}
    </Screen>
  );
};

const CharacterDetailScreenOptions = {headerShown: true, title: ''};

export default class {
  static Component = CharacterDetailScreenComponent;
  static Options = CharacterDetailScreenOptions;
}

const Name = styled(Headline)`
  margin: 16px 16px 0px 16px;
`;
