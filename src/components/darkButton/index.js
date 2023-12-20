import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const DarkButton = ({
  rightArrow = true,
  customMainStyle,
  customButtonContent,
  customButtonText,
  title = `Get Started`,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.mainContainer, customMainStyle]}>
      <View style={[styles.buttonContent(rightArrow), customButtonContent]}>
        <Text style={[styles.buttonText, customButtonText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default DarkButton;
