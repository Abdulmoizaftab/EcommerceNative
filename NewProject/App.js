import React,{useEffect} from 'react';
import Login from './screens/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Sign_up from './screens/sign up';
import TabNav from './HomebottomNav';
import AddToCart from './screens/AddToCart';
import Product_detail from './screens/Product_detail';
import SplashScreen from 'react-native-splash-screen'
import Home from './screens/Home';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CategoryScreen from './screens/CategoryScreen';
import CheckOutScreen from './screens/CheckOutScreen';
import Allproducts from './screens/Allproducts';

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
        <Stack.Screen
        options={{headerShown:true,
          title:"All Products",
         headerStyle:{backgroundColor:"#5A56E9"},
         headerTintColor: '#fff',
         headerTitleStyle: {
          fontWeight: 'bold',
        },
         headerTitleAlign:"center"}}
         name="Allproducts" component={Allproducts} />

        <Stack.Screen
         options={{headerShown:true,
          title:"My Cart",
         headerStyle:{backgroundColor:"#5A56E9"},
         headerTintColor: '#fff',
         headerTitleStyle: {
          fontWeight: 'bold',
        },
         headerTitleAlign:"center"}}
         name="AddToCart" component={AddToCart} />

        <Stack.Screen name="Product_detail" component={Product_detail} />
        <Stack.Screen name="Categories" component={CategoryScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ()=>{
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App></App>
      </PersistGate>
    </Provider>
  )
};
