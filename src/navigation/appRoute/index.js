import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from '../../containers/dashboard';
import {DetailPage} from '../../containers';
import {
  ADD_PRODUCTS,
  DASHBOARD,
  DETAIL_PAGE,
} from '../../utils/constants/constants';
import AddProducts from '../../containers/addProducts';

const Stack = createNativeStackNavigator();
const AppRoute = () => {
  //Main Stack Navigator to control navigation between screens
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          options={{headerShown: false}}
          name={DASHBOARD}
          component={Dashboard}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={DETAIL_PAGE}
          component={DetailPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={ADD_PRODUCTS}
          component={AddProducts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
