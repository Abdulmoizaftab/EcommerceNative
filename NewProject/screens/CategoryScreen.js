import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import LinearGradient from 'react-native-linear-gradient';


const CategoryScreen = ({navigation}) => {
  
    const [categories,setCategories]=useState([])

    const getCategories=async()=>{
      const data=await fetch('http://192.168.1.14:5000/sql//allCategories')
      const res=await data.json()
      setCategories(res)
    }

    useEffect(() => {
      getCategories()
    }, [])

  return (
    <View style={{width:"100%",height:"100%",backgroundColor:"white"}}>
      <SearchBar/>
    <ScrollView>
        <View style={{alignItems:'center', justifyContent:'center',width:"100%",backgroundColor:"white",height:"100%"}}>
            
       {categories.map((v,i)=>(
        <TouchableOpacity activeOpacity={0.9} style={{marginVertical:"2%",width: "90%"}} onPress={()=>navigation.navigate('Subcategory',{cat_id:v.HierLevel,cat:v.name})}>
             <LinearGradient style={styles.categoryCard} start={{x: 0, y: 0}} end={{x: 1.2, y: 0}} colors={['#fff', '#D1D1ED']}>
             <Text style={styles.cardText}>{v.name}</Text>
             <Image
             style={styles.logo}
             source={{
                 uri: 'https://freepngimg.com/thumb/technology/32333-4-technology-transparent.png',width: 150, height: 100,
               }}
               
           />
           </LinearGradient>
           </TouchableOpacity>
       )

       )}
       
        </View>
        </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
    categoryCard:{
        width: "100%",
        height: 113,
        elevation:5,
        borderColor: "#8580AF",
        borderRadius: 15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',


        
    },
    cardText:{
        fontSize:25,
        color: "#5D59EE",
        marginLeft:"5%",
        width:"35%"
    },
    logo:{
        // width: 150,
        // height:100,
        resizeMode:'cover',
    }

});

export default CategoryScreen