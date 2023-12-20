import {StyleSheet} from 'react-native';
import {Colors, commonStyle} from '../../theme';
import {moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  loader: {justifyContent: 'center', alignItems: 'center', flex: 1},
  textStyle: {
    ...commonStyle.mText,
    marginTop: moderateScale(10),
    color: Colors.PURPLE,
    textTransform: 'capitalize',
  },
});
