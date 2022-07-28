import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/carousel/carousel';
import { dummyData } from '../data/Carousel_data'
import Popuplar_slider from '../components/slider/popuplar_slider';
import AllItems_slider from '../components/slider/allItems_slider';
import Categories from '../components/Categories';



const Home = ({navigation}) => {
  return (
      <ScrollView>
    <View>
        <SearchBar navigate={navigation}/>
        <Carousel data = {dummyData}/>
        <Categories/>
        <Popuplar_slider navigate={navigation}/>
        <AllItems_slider navigate={navigation}/>
    </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({

});

export default Home;