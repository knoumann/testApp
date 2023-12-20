import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {ImagePng} from '../../utils';
import {convertINRtoUSD} from '../../utils/helper';
import {SwiperComponent} from '../../components';

const DetailPage = props => {
  const {route} = props || {};
  const {item = ''} = route?.params || {};
  const navigation = useNavigation();
  const [like, setLike] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.imageView}>
          <Image
            source={ImagePng.back}
            resizeMode="contain"
            style={styles.headerImgStyle}
          />
        </TouchableOpacity>
        <Text style={styles.headerTextStyle}>{'Attire'}</Text>
        <View />
      </View>
      <View style={styles.imgView}>
        <SwiperComponent item={item} />
      </View>
      <ScrollView>
        <View style={styles.titleView}>
          <View style={styles.nameView}>
            <Text style={styles.nameTextStyle}>{'Additional Info'}</Text>
            <TouchableOpacity onPress={() => setLike(!like)}>
              <Image
                source={like ? ImagePng.heart_filled : ImagePng.heart}
                resizeMode="contain"
                style={styles.heartStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal: 5, paddingTop: 18}}>
          <Text style={styles.subNameTextStyle}>{'Product'}</Text>
          <View style={styles.separatorStyle} />
          <Text style={styles.subCatTextStyle}>{item.title?.trim()}</Text>
        </View>
        <View style={{paddingHorizontal: 5, paddingTop: 18}}>
          <Text style={styles.subNameTextStyle}>{'Description'}</Text>
          <View style={styles.separatorStyle} />
          <Text style={styles.subCatTextStyle}>{item.description}</Text>
        </View>
        <View style={{paddingHorizontal: 5, paddingTop: 18}}>
          <Text style={styles.subNameTextStyle}>{'Category'}</Text>
          <View style={styles.separatorStyle} />
          <Text style={styles.subCatTextStyle}>{item.category.name}</Text>
        </View>
        <View style={{paddingHorizontal: 5, paddingTop: 18}}>
          <Text style={styles.subNameTextStyle}>{'Amount'}</Text>
          <View style={styles.separatorStyle} />
          <Text style={styles.subCatTextStyle}>
            {`${convertINRtoUSD(item?.price)} USD`}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailPage;
