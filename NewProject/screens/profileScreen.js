import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({navigation}) => {

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: 'white',
          height: '100%',
          zIndex: 5,
        }}>
        <LinearGradient
          style={styles.profileCard}
          start={{x: 0, y: 0}}
          end={{x: 1.2, y: 0}}
          colors={['#fff', '#D1D1ED']}>
          <MaterialCommunityIcons
            name="account-edit-outline"
            onPress={() => {
              console.log('pressed');
            }}
            style={styles.editIcon}
          />

          <Text style={styles.userName}>Profile user text text text</Text>
          <Text style={styles.userEmail}>user@gmail.com</Text>
          <Text style={styles.userEmail}>0310 xxxxxx67</Text>
          {/* <Image
             style={styles.logo}
             source={{
                 uri: 'https://freepngimg.com/thumb/technology/32333-4-technology-transparent.png',width: 150, height: 100,
                }}
                
              /> */}
        </LinearGradient>

        

        <TouchableOpacity
          activeOpacity={0.9}
          style={{marginVertical: '2%', width: '90%'}}
          onPress=
            {() => {
              console.log('pressed');
            }}>
          <LinearGradient
            style={styles.profileButton}
            start={{x: 0, y: 0}}
            end={{x: 1.2, y: 0}}
            colors={['#fff', '#D1D1ED']}>
            
            <Text style={styles.cardText}>
              
              <MaterialCommunityIcons
                name="account-edit-outline"
                style={styles.buttonIcon}
              />{' '}
              Settings
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{marginVertical: '2%', width: '90%'}}
          onPress=
            {() => {
              console.log('pressed');
            }}>
          <LinearGradient
            style={styles.profileButton}
            start={{x: 0, y: 0}}
            end={{x: 1.2, y: 0}}
            colors={['#fff', '#D1D1ED']}>
            
            <Text style={styles.cardText}>
              
              <MaterialCommunityIcons
                name="account-edit-outline"
                style={styles.buttonIcon}
              />{' '}
              Settings
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{marginVertical: '2%', width: '90%'}}
          onPress=
            {() => {
              console.log('pressed');
            }}>
          <LinearGradient
            style={styles.profileButton}
            start={{x: 0, y: 0}}
            end={{x: 1.2, y: 0}}
            colors={['#fff', '#D1D1ED']}>
            
            <Text style={styles.cardText}>
              
              <MaterialCommunityIcons
                name="account-edit-outline"
                style={styles.buttonIcon}
              />{' '}
              My Addresses
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{marginVertical: '2%', width: '90%'}}
          onPress=
            {() => {
              console.log('pressed');
            }}>
          <LinearGradient
            style={styles.profileButton}
            start={{x: 0, y: 0}}
            end={{x: 1.2, y: 0}}
            colors={['#fff', '#D1D1ED']}>
            
            <Text style={styles.cardText}>
              
              <MaterialCommunityIcons
                name="account-edit-outline"
                style={styles.buttonIcon}
              />{' '}
              Settings
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    color: '#5A56E9',
    position: 'absolute',
    zIndex: 999,
    top: '2%',
    left: '5%',
    // backgroundColor:'pink'
  },
  editIcon: {
    fontSize: 35,
    color: '#5A56E9',
    position: 'absolute',
    zIndex: 999,
    top: '3%',
    right: '4%',
    // backgroundColor:'pink'
  },
  buttonIcon: {
    fontSize: 35,
    color: '#5A56E9',
    position: 'absolute',
    zIndex: 999,
    top: '3%',
    right: '4%',
    // backgroundColor:'pink'
  },
  profileCard: {
    width: '90%',
    height: '30%',
    elevation: 5,
    borderColor: '#8580AF',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    borderColor: '#5D59EE',
    borderWidth: 3,
  },
  profileButton: {
    width: '100%',
    height: 70,
    elevation: 5,
    borderColor: '#8580AF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 19,
    color: '#5D59EE',
    marginLeft: '5%',
    width: '100%',
    fontWeight: 'bold',
  },
  logo: {
    // width: 150,
    // height:100,
    resizeMode: 'cover',
  },
  userName: {
    fontSize: 22,
    color: '#5D59EE',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
    alignSelf: 'center',
    // fontWeight:'bold',
  },
});

export default ProfileScreen;
