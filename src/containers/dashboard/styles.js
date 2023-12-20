import {StyleSheet} from 'react-native';
import {Colors, commonStyle} from '../../theme';
import {getDimensions, isIOS, moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    ...commonStyle.mainContainer,
  },
  headerView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.PURPLE_LIGHT,
    flexDirection: 'row',
    height: isIOS()
      ? getDimensions().height * 0.1
      : getDimensions().height * 0.07,
    paddingTop: isIOS() ? moderateScale(30) : 0,
    paddingHorizontal: moderateScale(16),
  },
  headerTextStyle: {
    ...commonStyle.xlText,
    color: Colors.WHITE,
    textTransform: 'uppercase',
    letterSpacing: moderateScale(5),
  },
  separatorStyle: {
    borderWidth: 0.5,
    width: getDimensions().width * 0.71,
    marginHorizontal: moderateScale(10),
    borderColor: Colors.GRAY,
    alignSelf: 'flex-end',
  },
  imgStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    tintColor: Colors.WHITE,
  },
  flatStyle: {flex: 1},
});
