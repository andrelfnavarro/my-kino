import { View, Text } from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

import loaderJson from '../../assets/49799-the-panda-eats-popcorn.json';

export const Loader = () => {
  return <AnimatedLottieView autoPlay source={loaderJson} />;
};
