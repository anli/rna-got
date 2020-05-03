import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Fade, Placeholder, PlaceholderMedia} from 'rn-placeholder';
import styled from 'styled-components/native';

const DetailImage = ({url}: {url: string}) => {
  const [isLoading, setIsLoading] = useState(true);
  const imageWidth = Math.floor(useWindowDimensions().width);
  const imageHeight = Math.floor(useWindowDimensions().height * 0.5);

  /* istanbul ignore next */
  const onLoading = () => setIsLoading(true);

  /* istanbul ignore next */
  const onLoaded = () => setIsLoading(false);

  return (
    <>
      <Image
        height={imageHeight}
        width={imageWidth}
        source={{
          uri: `${url}/${imageWidth}/${imageHeight}`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
        onLoadStart={onLoading}
        onLoadEnd={onLoaded}
      />
      {isLoading && (
        <Placeholder Animation={Fade}>
          <PlaceholderImage height={imageHeight} width={imageWidth} />
        </Placeholder>
      )}
    </>
  );
};

export default DetailImage;

const Image = styled(FastImage)<{height: string; width: string}>`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;

const PlaceholderImage = styled(PlaceholderMedia)<{
  height: string;
  width: string;
}>`
  top: -${props => props.height}px;
  position: absolute;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`;
