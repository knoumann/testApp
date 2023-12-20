import {StyleSheet} from 'react-native';
import {getDimensions, moderateScale} from '../../utils';
import {commonStyle} from '../../theme';

export const styles = StyleSheet.create({
  renderView: {
    height: moderateScale(110),
    flexDirection: 'row',
    paddingVertical: moderateScale(5),
    marginHorizontal: moderateScale(8),
  },
  imgStyle: {
    height: moderateScale(100),
    width: moderateScale(100),
    overflow: 'hidden',
    borderRadius: moderateScale(10),
  },
  boxStyle: {
    width: getDimensions().width * 0.72,
    justifyContent: 'space-between',
    paddingLeft: moderateScale(10),
  },
  txtTitle: {
    ...commonStyle.mText,
    width: getDimensions().width * 0.7,
    marginTop: moderateScale(2),
    textTransform: 'capitalize',
    // backgroundColor: 'red',
  },
  txtTag: {
    width: getDimensions().width * 0.7,
    ...commonStyle.xsText,
    textTransform: 'capitalize',
    paddingTop: moderateScale(2),
    opacity: 0.5,
  },
  secondView: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: moderateScale(40),
  },
  genrStyle: {
    ...commonStyle.xsText,
  },
  priceTextStyle: {
    ...commonStyle.sText,
  },
});
