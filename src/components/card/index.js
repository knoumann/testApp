import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {DateFn, convertINRtoUSD} from '../../utils/helper';
import {DETAIL_PAGE} from '../../utils/constants/constants';
import {styles} from './styles';

const Card = props => {
  const {item, navigation} = props || {};
  return (
    <TouchableOpacity
      key={item.toString()}
      onPress={() => {
        navigation.navigate(DETAIL_PAGE, {
          item: item,
        });
      }}
      style={styles.renderView}>
      <Image
        source={{uri: item?.category?.image}}
        resizeMode="contain"
        style={styles.imgStyle}
      />
      <View style={styles.boxStyle}>
        <View>
          <Text style={styles.txtTitle}>{item?.title?.trim()}</Text>
          <Text style={styles.txtTag}>{item?.category?.name}</Text>
          <View style={styles.secondView}>
            <Text style={styles.genrStyle}>
              {DateFn(item?.category?.creationAt)}
            </Text>
            <Text style={styles.priceTextStyle}>
              {convertINRtoUSD(item?.price)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
