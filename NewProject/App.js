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
import AddressBook from './screens/AddressBook';
import SeeAllPopular from './screens/SeeAllPopular';
import SearchScreen from './screens/SearchScreen';
import AllVendorProducts from './screens/AllVendorProducts';
import Subcategory from './screens/subcategory';
import CheckOutScreenNew from './screens/CheckOutScreenNew';

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
        <Stack.Screen name="AllVendorProducts" component={AllVendorProducts} />

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
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Checkout",
            headerStyle: { backgroundColor: "#5A56E9" },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: "center"
          }} name="CheckoutScreen" component={CheckOutScreenNew} />
        <Stack.Screen name="SeeAllPopular" component={SeeAllPopular} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen
          options={{headerShown:true,
            title:"Address Book",
           headerStyle:{backgroundColor:"#5A56E9"},
           headerTintColor: '#fff',
           headerTitleStyle: {
            fontWeight: 'bold',
          },
           headerTitleAlign:"center"}}
        name="AddressBook" component={AddressBook} />
        <Stack.Screen
        name="Subcategory" component={Subcategory} />
        <Stack.Screen name="Summary" component={Summary} 
        options={{headerShown:true,
          title:"Cart Summary",
         headerStyle:{backgroundColor:"#5A56E9"},
         headerTintColor: '#fff',
         headerTitleStyle: {
          fontWeight: 'bold',
        },
         headerTitleAlign:"center"}}
        />
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
