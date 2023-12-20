import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {DarkButton, InputComponent} from '../../components';
import {styles} from './styles';
import {ImagePng} from '../../utils';
import {postProductsRequest} from '../../redux/reducers/postProducts';
import {useDispatch} from 'react-redux';
import {randomImage, randomNumbers} from '../../utils/helper';

const AddProducts = props => {
  const {navigation} = props || {};
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setprice] = useState('');

  //Submit button after finish editting fields
  const handleSubmit = async () => {
    if (title !== 0 && price !== 0 && description !== 0) {
      let headers = {
        'content-type': 'application/json',
      };
      let bodyData = {
        title: title?.toString(),
        price: Number(price),
        description: description?.toString(),
        categoryId: randomNumbers(),
        images: randomImage,
      };
      dispatch(
        postProductsRequest({
          headers: headers,
          body: bodyData,
        }),
      );
    }
    //Clearing the states after submitting
    setTitle('');
    setprice('');
    setDescription('');
  };

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
        <Text style={styles.headerTextStyle}>{'Add Products'}</Text>
        <View />
      </View>
      <ScrollView>
        <InputComponent
          name={title}
          setName={setTitle}
          label={'Title'}
          placeholder={'Add a Title'}
          isInputField={true}
          maxLength={30}
        />
        <InputComponent
          name={price}
          setName={setprice}
          label={'Price'}
          placeholder={'Add a Price'}
          keyboardType={'numeric'}
          isInputField={true}
          maxLength={5}
        />
        <InputComponent
          name={description}
          setName={setDescription}
          label={'Description'}
          placeholder={'Add a Description'}
          isInputField={true}
          maxLength={100}
        />
      </ScrollView>
      <DarkButton
        title="Submit"
        onPress={() => {
          handleSubmit();
        }}
        customMainStyle={styles.customMainStyle}
      />
    </View>
  );
};

export default AddProducts;
