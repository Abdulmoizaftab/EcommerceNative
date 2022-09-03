import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import HomebottomNav from "../HomebottomNav";
import LinearGradient from 'react-native-linear-gradient';


const CategoryScreen = () => {
    const arr = [1,2,3,4,5,6];
    const arr1=["Electronics", "Computers", "Smart Home", "Arts & Home", "Automotive"];
  return (
    <View style={{width:"100%"}}>
      <SearchBar/>
    <ScrollView>
        <View style={{ alignItems:'center', justifyContent:'center',width:"100%",backgroundColor:"white",paddingBottom:"15%"}}>
            
       {arr.map(item=>(
        <View style={{marginVertical:"2%",width: "90%"}}>
             <LinearGradient style={styles.categoryCard} start={{x: 0, y: 0}} end={{x: 1.2, y: 0}} colors={['#fff', '#D1D1ED']}>
             <Text style={styles.cardText}>Electronic</Text>
             <Image
             style={styles.logo}
             source={{
                 uri: 'https://freepngimg.com/thumb/technology/32333-4-technology-transparent.png',width: 150, height: 100,
               }}
               
           />
           </LinearGradient>
           </View>
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
        justifyContent:'space-around',


        
    },
    cardText:{
        fontSize:35,
        color: "#5D59EE",
        
    },
    logo:{
        // width: 150,
        // height:100,
        resizeMode:'cover',
    }

});

export default CategoryScreen