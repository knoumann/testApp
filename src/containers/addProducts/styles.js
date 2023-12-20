import {StyleSheet} from 'react-native';
import {Colors, commonStyle} from '../../theme';
import {getDimensions, isIOS, moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    ...commonStyle.mainContainer,
  },
  headerView: {
    backgroundColor: Colors.PURPLE_75_OPACITY,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: isIOS()
      ? getDimensions().height * 0.1
      : getDimensions().height * 0.07,
    flexDirection: 'row',
    paddingHorizontal: moderateScale(5),
    paddingTop: isIOS() ? moderateScale(30) : 0,
  },
  headerTextStyle: {
    ...commonStyle.xlText,
    color: Colors.WHITE,
    textTransform: 'uppercase',
    letterSpacing: moderateScale(5),
    paddingRight: moderateScale(40),
  },
  headerImgStyle: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  imageView: {
    height: moderateScale(40),
    width: moderateScale(40),
    justifyContent: 'center',
    marginTop: moderateScale(5),
    alignItems: 'center',
  },
  customMainStyle: {
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(20),
  },
});
