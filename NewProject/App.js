
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import SearchDropdown from './components/SearchDropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from './components/SearchBar';






const App= () => {
  

  return (
    <View>
      <SearchBar></SearchBar>
    </View>
  );
};




export default App;




