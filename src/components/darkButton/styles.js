import {StyleSheet} from 'react-native';
import {moderateScale} from '../../utils';
import {Colors} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.BLACK,
    alignItems: 'center',
    borderRadius: moderateScale(8),
  },
  buttonContent: rightArrow => ({
    justifyContent: rightArrow ? 'space-between' : 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '4%',
  }),
  buttonText: {
    color: Colors.WHITE,
    fontSize: moderateScale(14),
  },
});
