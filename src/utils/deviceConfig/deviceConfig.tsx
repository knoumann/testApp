import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 850;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.25): number =>
  size + (scale(size) - size) * factor;

export const getDimensions = () => {
  return {height, width};
};

export const isIOS = () => Platform.OS === 'ios';
export const isAndroid = () => Platform.OS === 'android';
