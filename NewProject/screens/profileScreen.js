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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfileScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await fetch('http://192.168.1.17:5000/sql//allCategories');
    const res = await data.json();
    setCategories(res);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {false ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
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
            onPress={() => {
              console.log('pressed');
            }}>
            <LinearGradient
              style={styles.profileButton}
              start={{x: 0, y: 0}}
              end={{x: 1.2, y: 0}}
              colors={['#fff', '#dfdff7']}>
              <Text style={styles.cardText}>
                <MaterialCommunityIcons
                  name="shopping-outline"
                  style={styles.buttonIcon}
                />
                {'  '}
                My Orders
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: '2%', width: '90%'}}
            onPress={() => {
              console.log('pressed');
            }}>
            <LinearGradient
              style={styles.profileButton}
              start={{x: 0, y: 0}}
              end={{x: 1.2, y: 0}}
              colors={['#fff', '#dfdff7']}>
              <Text style={styles.cardText}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  style={styles.buttonIcon}
                />
                {'  '}
                Favourites
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: '2%', width: '90%'}}
            onPress={() => {
              console.log('pressed');
            }}>
            <LinearGradient
              style={styles.profileButton}
              start={{x: 0, y: 0}}
              end={{x: 1.2, y: 0}}
              colors={['#fff', '#dfdff7']}>
              <Text style={styles.cardText}>
                <Entypo name="location" style={styles.buttonIcon} />
                {'  '}
                My Addresses
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: '2%', width: '90%'}}
            onPress={() => {
              console.log('pressed');
            }}>
            <LinearGradient
              style={styles.profileButton}
              start={{x: 0, y: 0}}
              end={{x: 1.2, y: 0}}
              colors={['#fff', '#dfdff7']}>
              {/* colors={['#fff', '#c4c4cf']}> */}

              <Text style={styles.cardText}>
                <AntDesign name="setting" style={styles.buttonIcon} />
                {'  '}
                Settings
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
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
            <Text style={styles.userNameDisable}>Please Log in to access all features</Text>

            <TouchableOpacity
              activeOpacity={0.9}
              style={{marginVertical: '2%', width: '90%'}}
              onPress={() => {
                console.log('login');
              }}>
              <Text
                style={{
                  color: '#ffff',
                  backgroundColor: '#5A56E9',
                  borderRadius: 10,
                  alignSelf: 'center',
                  paddingTop: 15,
                  paddingBottom: 15,
                  paddingLeft: 40,
                  paddingRight: 40,
                  fontWeight:'bold'
                }}>
                {/* <AntDesign
            name="setting"
            style={styles.buttonIcon}
          />{'  '} */}
                Log in
              </Text>
            </TouchableOpacity>

            {/* <Text style={styles.userEmail}>0310 xxxxxx67</Text> */}
            {/* <Image
         style={styles.logo}
         source={{
             uri: 'https://freepngimg.com/thumb/technology/32333-4-technology-transparent.png',width: 150, height: 100,
            }}
            
          /> */}
          </LinearGradient>

          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: '2%', width: '90%'}}>
            <LinearGradient
              style={styles.profileButton}
              start={{x: 0, y: 0}}
              end={{x: 1.2, y: 0}}
              colors={['#fff', '#e1e1e6']}>
              <Text style={styles.cardTextDisable}>
                <MaterialCommunityIcons
                  name="shopping-outline"
                  style={styles.buttonIconDisable}
                />
                {'  '}
                My Orders
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: '2%', width: '90%'}}>
            <LinearGradient
              style={styles.profileButton}
              start={{x: 0, y: 0}}
              end={{x: 1.2, y: 0}}
              colors={['#fff', '#e1e1e6']}>
              <Text style={styles.cardTextDisable}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  style={styles.buttonIconDisable}
                />
                {'  '}
                Favourites
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: '2%', width: '90%'}}>
            <LinearGradient
              style={styles.profileButtonDisabale}
              start={{x: 0, y: 0}}
              end={{x: 1.2, y: 0}}
              colors={['#fff', '#e1e1e6']}>
              <Text style={styles.cardTextDisable}>
                <Entypo name="location" style={styles.buttonIconDisable} />
                {'  '}
                My Addresses
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: '2%', width: '90%'}}
            onPress={() => {
              console.log('pressed');
            }}>
            <LinearGradient
              style={styles.profileButton}
              start={{x: 0, y: 0}}
              end={{x: 1.2, y: 0}}
              colors={['#fff', '#dfdff7']}>
              {/* colors={['#fff', '#c4c4cf']}> */}

              <Text style={styles.cardText}>
                <AntDesign name="setting" style={styles.buttonIcon} />
                {'  '}
                Settings
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
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
  buttonIconDisable: {
    fontSize: 35,
    color: '#bdbcc4',
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
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    marginTop: '10%',
    borderColor: '#5D59EE',
    borderWidth: 2,
  },
  profileButton: {
    width: '100%',
    height: 70,
    elevation: 5,
    // borderColor: '#8580AF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileButtonDisabale: {
    width: '100%',
    height: 70,
    elevation: 5,
    // borderColor: '#8580AF',
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
  cardTextDisable: {
    fontSize: 23,
    color: '#bdbcc4',
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
  userNameDisable: {
    fontSize: 19,
    color: '#5D59EE',
    alignSelf: 'center',
    fontWeight: 'bold',
    // alignSelf:'center'
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
    alignSelf: 'center',
    // fontWeight:'bold',
  },
});

export default ProfileScreen;
