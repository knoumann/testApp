import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {Colors, commonStyle} from '../../theme';
import {moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  container: {paddingHorizontal: 5, flex: 1},
  input: {
    paddingVertical: moderateScale(15),
    ...commonStyle.xlText,
    color: Colors.BLACK,
    textTransform: 'capitalize',
    borderWidth: 0.2,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
  textInputView: {marginVertical: moderateScale(15)},
  label: {
    ...commonStyle.xlText22,
    color: Colors.GREY_DARK,
    paddingHorizontal: moderateScale(5),
    paddingBottom: 5,
  },
});
