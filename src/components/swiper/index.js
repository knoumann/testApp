import React, {useState} from 'react';
import {Image, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './styles';

const SwiperComponent = props => {
  const {item} = props || {};
  const [height, setHeight] = useState(null);

  return (
    <Swiper autoplay={true} showsPagination={false}>
      {item?.images?.map(it => {
        let image =
          it.endsWith('.jpg') || it.endsWith('.jpeg') || it.endsWith('.png')
            ? it
            : item?.category?.image;
        Image.getSize(image, height => {
          setHeight(height);
        });
        return (
          <View style={styles.container} key={[item?.images?.length + 1]}>
            <Image
              source={{uri: image}}
              resizeMode={height >= 240 ? 'stretch' : 'contain'}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
