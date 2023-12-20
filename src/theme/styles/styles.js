import {moderateScale} from '../../utils';
import {Colors} from '../colors';
import {FontFamily, FontSize} from '../fonts';

export const commonStyle = {
  mainContainer: {
    flex: 1,
    paddingBottom: moderateScale(15),
    backgroundColor: Colors.WHITE,
  },
  xxxlBoldText: {
    fontSize: FontSize.extraLarge,
    fontFamily: FontFamily.interExtraBold,
    color: Colors.DARK,
  },
  xxlText: {
    fontSize: FontSize.semiLarge,
    fontFamily: FontFamily.outfitMedium,
    color: Colors.DARK,
    fontWeight: '500',
  },
  xxlBoldText32: {
    fontSize: FontSize.extraLarge32,
    fontFamily: FontFamily.interExtraBold,
    color: Colors.DARK,
    fontWeight: '600',
  },
  xxlRegularText32: {
    fontSize: FontSize.extraLarge32,
    fontFamily: FontFamily.soraRegular,
    color: Colors.DARK,
  },
  xxlBoldText: {
    fontSize: FontSize.large,
    fontFamily: FontFamily.interExtraBold,
    color: Colors.DARK,
  },
  xlText: {
    fontSize: FontSize.semiLarge20,
    fontFamily: FontFamily.outfitMedium,
    color: Colors.DARK,
    fontWeight: '500',
  },
  xlText22: {
    fontSize: FontSize.semiLarge22,
    fontFamily: FontFamily.outfitMedium,
    color: Colors.DARK,
    fontWeight: '500',
  },
  mText: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.soraRegular,
    fontWeight: '500',
    color: Colors.DARK,
  },
  mTextRegular: {
    fontSize: FontSize.mediumMid,
    fontFamily: FontFamily.soraRegular,
    fontWeight: '500',
    color: Colors.DARK,
  },
  mBoldText: {
    fontSize: FontSize.medium,
    fontFamily: FontFamily.interExtraBold,
    color: Colors.DARK,
  },
  sText: {
    fontSize: FontSize.small,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: '300',
    color: Colors.DARK,
  },
  sBoldText: {
    fontSize: FontSize.small,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: '400',
    color: Colors.DARK,
  },
  xsText: {
    fontSize: FontSize.extraSmall,
    fontFamily: FontFamily.interRegular,
    fontWeight: '200',
    color: Colors.DARK,
  },
  xsBoldText: {
    fontSize: FontSize.extraSmall,
    fontFamily: FontFamily.interExtraBold,
    color: Colors.DARK,
  },
};
