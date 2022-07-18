import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';

const Stack = createNativeStackNavigator()

const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home-main' component={Home}/> 
        <Stack.Screen name='login' component={Login}/> 
    </Stack.Navigator>
  )
}

export default HomeStackScreen