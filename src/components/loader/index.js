import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../theme';
import {LARGE} from '../../utils/helper';

const Loader = props => {
  const {size, color, isLoading, loaderText} = props;
  return (
    <View style={styles.loader}>
      <ActivityIndicator
        color={color || Colors.PURPLE}
        size={size || LARGE}
        animating={isLoading}
      />
      {loaderText ? <Text style={styles.textStyle}>{loaderText}</Text> : null}
    </View>
  );
};

export default Loader;
