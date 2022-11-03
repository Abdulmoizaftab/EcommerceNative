import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {

  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchDropdown from './SearchDropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { Logout } from '../redux/LoginRedux';

const SearchBar = () => {
    //const [searchText , setSearchText] = useState("");
    //const [filterData,setFilterData]=useState([]);
    
    const navigate = useNavigation()
    
    // useEffect(() => {
    // var arr=[]
    // const check =async ()=>{
    //     try{
    //       if(searchText.length >= 1){
    //         const result= await axios.get(`http://192.168.1.17:5000/sql/suggest/${searchText}/5`);
    //       if (result.data) {
    //         result.data.map(item => {
    //           return arr.push(item);
    //         })
    //         setFilterData(arr)
    //       }
    //       else{
    //         console.log("No data");
    //       }
    //       }
    //     }
    //     catch(error){
    //       console.log("error");
    //     }
  
    //   }
    //   check()
      
    // }, [searchText])
    // const removeValue = async () => {
    //   try {
    //     await AsyncStorage.removeItem('@searchItems')
    //   } catch (e) {
    //     // remove error
    //   }
    //   console.log('Done.')
    // }

    const {isFetching,error,currentUser}=useSelector((state)=>state.user)
    const dispatch=useDispatch()

    const check_session=async()=>{
      console.log(currentUser)
      try {
      if(currentUser){
        const res= await axios.post('http://192.168.1.17:5000/sql/session',{user_id:currentUser.user[0].user_id},{
          headers: {
            'Authorization': `Bearer ${currentUser.token}` 
          }
        })
        
        if(res.data == "Status updated"){
          dispatch(Logout())
          console.log("Response is==>",res.data);
        }
        else{
          console.log("Response2 is==>",res.data);
        }
      }
      else{
        console.log("Session expired")
      }
    } catch (error) {
      if(error == "AxiosError: Network Error"){
        console.log("Something 2");
        Alert.alert(
            "Network Error",
            "Please check your network connection.",
            [
          {
            text: "Ok",
            onPress: () => console.log("Ok"),
          }
        ]
        );
        
    }
    }
  }

    useEffect(() => {
      check_session()
    }, [])
    

  
  // const onSearch = () => {
  //     navigate.navigate('SearchScreen',searchText)
  // }


    // const onChange = (text)=> {
    
    //   if(text){
    //     setSearchText(text)
    //   }
    //   else{
    //     setFilterData([])
    //   }
    // }
    
  
    return (
        <>
            <View style={styles.container}>
              {currentUser?
                <TouchableOpacity style={{borderRadius:200,alignItems:"center",width:"12%",justifyContent:"center",height:42,backgroundColor:"pink"}}onPress={() => navigate.navigate('Profile')}>
                  <Text style={{fontSize:25,color:"#fff"}}>{currentUser.user[0].first_name.substring(0,1).toUpperCase()}</Text>
                </TouchableOpacity>:
                <MaterialCommunityIcons name='account-outline' style={styles.accountIcon} onPress={() => navigate.navigate('Profile')}  />
                }
                <TouchableOpacity style={styles.searchView} onPress={() => navigate.navigate('Search')}>
          <View style={{flexDirection:'row'}}>
            <Ionicons name='search-outline' style={styles.searchIcon}  />
            {/* <TextInput
                        style={styles.search}
                        placeholder="Search Here"
                        placeholderTextColor="#EAE9FC"
                      onChangeText={(e) => onChange(e)} /> */}
            <Text style={{ marginLeft: 2, color: 'white' }}>Search Here</Text>
          </View>
        </TouchableOpacity>
                <Ionicons name="cart-outline" style={styles.cartIcon} onPress={() => navigate.navigate('AddToCart')}/>
            </View>
            {/* {searchText ?
              <SearchDropdown dataSource={filterData} navigate={navigate}/> :
              null
            } */}
        </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 12,
      alignItems: "center",
      backgroundColor:'#5A56E9',
      flexDirection:'row',
      justifyContent:'space-around',
      height:65,
      zIndex:9999,
    },
    searchView:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1.5,
        borderColor:"#EAE9FC",
        borderRadius:50,
        paddingHorizontal:5,
        width:'60%',
        height:50
    },
    search: {
      backgroundColor: "#5A56E9", 
      color: "#EAE9FC",
      fontSize: 15,
      fontWeight: "400",
      borderRadius:50,
      height:40,
    },
    searchIcon:{
        color:"#EAE9FC",
        fontSize:20,
        
    },
    accountIcon:{
        color:"#EAE9FC",
        fontSize:25
    },
    cartIcon:{
        color:"#EAE9FC",
        fontSize:25
    }
  });
  
  
  
  export default SearchBar;