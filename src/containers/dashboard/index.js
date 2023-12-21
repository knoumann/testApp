import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsRequest} from '../../redux/reducers/getProducts';
import {ADD_PRODUCTS} from '../../utils/constants/constants';
import {SMALL} from '../../utils/helper';
import {styles} from './styles';
import {Colors} from '../../theme';
import {ImagePng} from '../../utils';
import {Card, Loader} from '../../components';

const Dashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const {getProductsData, isLoading, loadMore} = useSelector(
    state => state.getProducts,
  );

  useEffect(() => {
    dispatch(
      getProductsRequest({
        headers: {
          'content-type': 'application/json',
        },
        page,
      }),
    );
  }, [page]);

  // For loading next page from API
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  //Pull to refresh function
  const handleRefresh = () => {
    setRefreshing(true);
    let headers = 'application/json';
    dispatch(getProductsRequest({headers: headers, page: 1, refresh: true}));
    setRefreshing(false);
  };

  //Render the List view
  const renderItem = useCallback(
    ({item}) => {
      return <Card item={item} navigation={navigation} />;
    },
    [getProductsData],
  );

  //Showin loader when next page loads
  const renderFooter = useCallback(() => {
    return !loadMore ? <Loader size={SMALL} isLoading={!loadMore} /> : null;
  }, [page]);
  return (
    <>
      {!isLoading ? (
        <View style={styles.container}>
          <View style={styles.headerView}>
            <View />
            <Text style={styles.headerTextStyle}>Shoppers Stop</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ADD_PRODUCTS)}>
              <Image source={ImagePng.plus} style={styles.imgStyle} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={getProductsData}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={renderItem}
            initialNumToRender={7}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={styles.separatorStyle} />
            )}
            style={styles.flatStyle}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
                tintColor={Colors.PRIMARY}
              />
            }
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
        </View>
      ) : (
        <Loader loaderText={'please wait...'} isLoading={isLoading} />
      )}
    </>
  );
};

export default Dashboard;
