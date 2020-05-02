import React from 'react';
import {useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

const DetailImage = ({url}: {url: string}) => {
  const imageWidth = Math.floor(useWindowDimensions().width);
  const imageHeight = Math.floor(useWindowDimensions().height * 0.5);

  return (
    <Image
      height={imageHeight}
      width={imageWidth}
      source={{
        uri: `${url}/${imageWidth}/${imageHeight}`,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default DetailImage;

const Image = styled(FastImage)<{height: string; width: string}>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;
