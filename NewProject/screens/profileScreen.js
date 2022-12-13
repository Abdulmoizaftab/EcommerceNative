import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  ActivityIndicator
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { Logout,loginStart } from '../redux/LoginRedux';
import axios from 'axios';



const ProfileScreen = ({navigation}) => {
  const [login, setLogin] = useState(false);
  const [user,setUser]=useState([]);
  const [disable,setDisable]=useState(false)
  const {isFetching, error, currentUser, loadings} = useSelector(
    state => state.user,
  );
  const dispatch=useDispatch();

  const getData = () => {
    if(currentUser){
      setUser(currentUser.user)
      setLogin(true)
    }
    else{
      setLogin(false)
    }
  };
  
  

  useEffect(() => {
    getData();
  }, []);

  const back=()=>{
    //console.log("Pressss");
    navigation.navigate('Favourites')
    //BackHandler.exitApp()
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", back);
    return () => BackHandler.removeEventListener("hardwareBackPress", back);

  }, []);
  

  

  return (
    
    <>
    <View style={styles.head_main}>
        <View>
          <AntDesign
            name="arrowleft"
            style={styles.head_icon}
            onPress={() => {
              navigation.navigate('Home');
             //BackHandler.addEventListener('hardwareBackPress',()=>back())
             
            }
            }
          />
        </View>
        <View style={styles.head_text_view}>
          <Text style={styles.head_text}>My Account</Text>
        </View>
      </View>
      {login ? (
        
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

            <Text style={styles.userName}>{user[0].first_name} {user[0].last_name}</Text>
            <Text style={styles.userEmail}>{user[0].email}</Text>
            <Text style={styles.userEmail}>{user[0].phone}</Text>
            <TouchableOpacity
            disabled={disable}
              activeOpacity={0.9}
              style={{marginVertical: '2%', width: '30%',backgroundColor: '#5A56E9',borderRadius: 10,alignSelf: 'center',
              padding:"2%",alignItems:"center"}}
              onPress={async() => {
                console.log('logout');
                dispatch(loginStart())
                try {
                  setDisable(true)
                  const res= await axios.post('http://192.168.1.10:5000/sql/logout',{user_id:currentUser.user[0].user_id},{
                    headers: {
                      'Authorization': `Bearer ${currentUser.token}` 
                    }
                  })
                  console.log("log res==>",res.data)
                  dispatch(Logout())
                  navigation.navigate('TabNav')
                  setDisable(false)
                } catch (error) {
                  Alert.alert(
                    "Logout failed",
                    "Something went wrong",
                    [
                  {
                    text: "Ok",
                    onPress: () => console.log("Ok"),
                  }
                ]
                );
                }
              }}>
                {loadings === true?<ActivityIndicator size='small' color='white'/>:
              <Text
                style={{
                  color: '#ffff',
                  fontWeight:'bold',
                }}>Logout
              </Text>}
              
            </TouchableOpacity>
          </LinearGradient>
                 <ScrollView showsVerticalScrollIndicator={false}>
<View style={{alignItems:"center"}}>

          <TouchableOpacity
            activeOpacity={0.9}
            style={{marginVertical: '2%', width: '90%'}}
            onPress={() => {
              navigation.navigate('Orders')
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
              navigation.navigate('Favourites')
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
                <Ionicons name="cart-outline" style={styles.buttonIcon} />
                {'  '}
                My Cart
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
          </ScrollView>
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
            <Text style={styles.userNameDisable}>Please log in to access all features</Text>

            <TouchableOpacity
              activeOpacity={0.9}
              style={{marginVertical: '2%', width: '90%'}}
              onPress={() => {
                //console.log('login');
                navigation.navigate('Login')
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

          </LinearGradient>
            <ScrollView showsVerticalScrollIndicator={false}>
<View style={{alignItems:"center"}}>

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
                <Ionicons name="cart-outline" style={styles.buttonIconDisable} />
                {'  '}
                My Cart
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
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  head_main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '3%',
    backgroundColor: '#5A56E9',
  },
  head_icon: {
    fontSize: 20,
    color: 'white',
  },
  head_text_view: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  head_text: {
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold',
  },
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
    marginTop: '5%',
    borderColor: '#5D59EE',
    borderWidth: 2,
  },
  profileButton: {
    width: '100%',
    height: 70,
    elevation: 3,
    // borderColor: '#8580AF',
    borderRadius: 10,
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
