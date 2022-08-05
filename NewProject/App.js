import React,{useEffect} from 'react';
import Login from './screens/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Sign_up from './screens/sign up';
import TabNav from './HomebottomNav';
import AddToCart from './screens/AddToCart';
import Product_detail from './screens/Product_detail';
import SplashScreen from 'react-native-splash-screen'
import CategoryScreen from './screens/CategoryScreen';

const Stack=createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign_up" component={Sign_up} />
        <Stack.Screen name="AddToCart" component={AddToCart} />
        <Stack.Screen name="Product_detail" component={Product_detail} />
        <Stack.Screen name="Categories" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
