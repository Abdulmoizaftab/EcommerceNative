import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import LinearGradient from 'react-native-linear-gradient';


const ProfileScreen = ({navigation}) => {
  
    const [categories,setCategories]=useState([])

    const getCategories=async()=>{
      const data=await fetch('http://192.168.1.17:5000/sql//allCategories')
      const res=await data.json()
      setCategories(res)
    }

    useEffect(() => {
      getCategories()
    }, [])

  return (
    <View style={{width:"100%",height:"100%",backgroundColor:"white"}}>
      {/* <SearchBar/> */}
    <ScrollView>
        <View style={{alignItems:'center', justifyContent:'center',width:"100%",backgroundColor:"white",height:"100%"}}>
        <LinearGradient style={styles.profileCard} start={{x: 0, y: 0}} end={{x: 1.2, y: 0}} colors={['#fff', '#D1D1ED']}>
             <Text style={styles.userName}>Profile user text</Text>
             <Text style={styles.userEmail}>user@gmail.com</Text>
             <Text style={styles.userEmail}>0310 xxxxxx67</Text>
             {/* <Image
             style={styles.logo}
             source={{
                 uri: 'https://freepngimg.com/thumb/technology/32333-4-technology-transparent.png',width: 150, height: 100,
               }}
               
           /> */}
           </LinearGradient>
            
      
          <TouchableOpacity activeOpacity={0.9} style={{marginVertical:"2%",width: "90%"}} onPress={()=>navigation.navigate('Subcategory',{cat_id:v.HierLevel,cat:v.name})}>
             <LinearGradient style={styles.profileButton} start={{x: 0, y: 0}} end={{x: 1.2, y: 0}} colors={['#fff', '#D1D1ED']}>
             <Text style={styles.cardText}>My Orders</Text>
            
           </LinearGradient>
           </TouchableOpacity>
       
           <TouchableOpacity activeOpacity={0.9} style={{marginVertical:"2%",width: "90%"}} onPress={()=>navigation.navigate('Subcategory',{cat_id:v.HierLevel,cat:v.name})}>
             <LinearGradient style={styles.profileButton} start={{x: 0, y: 0}} end={{x: 1.2, y: 0}} colors={['#fff', '#D1D1ED']}>
             <Text style={styles.cardText}>Favourites</Text>
            
           </LinearGradient>
           </TouchableOpacity>

           <TouchableOpacity activeOpacity={0.9} style={{marginVertical:"2%",width: "90%"}} onPress={()=>navigation.navigate('Subcategory',{cat_id:v.HierLevel,cat:v.name})}>
             <LinearGradient style={styles.profileButton} start={{x: 0, y: 0}} end={{x: 1.2, y: 0}} colors={['#fff', '#D1D1ED']}>
             <Text style={styles.cardText}>My Addresses</Text>
            
           </LinearGradient>
           </TouchableOpacity>

           <TouchableOpacity activeOpacity={0.9} style={{marginVertical:"2%",width: "90%"}} onPress={()=>navigation.navigate('Subcategory',{cat_id:v.HierLevel,cat:v.name})}>
             <LinearGradient style={styles.profileButton} start={{x: 0, y: 0}} end={{x: 1.2, y: 0}} colors={['#fff', '#D1D1ED']}>
             <Text style={styles.cardText}>Settings</Text>
            
           </LinearGradient>
           </TouchableOpacity>
       
        </View>
        </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
    profileCard:{
        width: "90%",
        height: 150,
        elevation:5,
        borderColor: "#8580AF",
        borderRadius: 15,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop:"6%",
        borderColor:"#5D59EE",
        borderWidth:3,


        
    },profileButton:{
      width: "100%",
      height: 70,
      elevation:5,
      borderColor: "#8580AF",
      borderRadius: 15,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',


      
  },
    cardText:{
        fontSize:19,
        color: "#5D59EE",
        marginLeft:"5%",
        width:"100%"
    },
    logo:{
        // width: 150,
        // height:100,
        resizeMode:'cover',
    },userName:{
      
      fontSize:22,
      color: "#5D59EE",
      alignSelf:'center',
      fontWeight:'bold',
      


    },userEmail:{
      
      fontSize:16,
      color: "gray",
      alignSelf:'center',
      // fontWeight:'bold',

    }

});

export default ProfileScreen