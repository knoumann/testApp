import {StyleSheet} from 'react-native';
import {Colors, commonStyle} from '../../theme';
import {getDimensions, isIOS, moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  container: {...commonStyle.mainContainer},
  imgView: {
    width: getDimensions().width * 1,
    height: moderateScale(400),
  },
  imgStyle: {
    height: moderateScale(250),
    width: moderateScale(250),
    overflow: 'hidden',
  },
  headerView: {
    backgroundColor: Colors.PURPLE_100_OPACITY,
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
  heartStyle: {
    height: moderateScale(25),
    width: moderateScale(25),
    tintColor: Colors.GREY_DARK,
    marginTop: 2,
  },
  titleView: {paddingHorizontal: 5},
  nameView: {
    paddingTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nameTextStyle: {
    width: getDimensions().width * 0.8,
    ...commonStyle.xxlText,
  },
  subNameTextStyle: {
    ...commonStyle.sText,
    paddingHorizontal: moderateScale(10),
  },
  subCatTextStyle: {
    ...commonStyle.mTextRegular,
    paddingHorizontal: moderateScale(10),
  },
  separatorStyle: {
    borderWidth: 0.5,
    width: getDimensions().width * 0.92,
    marginHorizontal: moderateScale(11),
    borderColor: Colors.GRAY,
    alignSelf: 'flex-end',
    marginVertical: moderateScale(2),
  },
});
