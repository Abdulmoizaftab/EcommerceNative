import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import LinearGradient from 'react-native-linear-gradient';
import {Skeleton,NativeBaseProvider} from 'native-base'
import img from '../image/img.png';


const CategoryScreen = ({navigation}) => {
  
    const [categories,setCategories]=useState([])
    const [skeleton,setSkeleton]=useState(false)

    const getCategories=async()=>{
      setSkeleton(true)
      const data=await fetch('http://192.168.1.7:5000/sql//allCategories')
      const res=await data.json()
      setCategories(res)
      setSkeleton(false)
    }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <NativeBaseProvider>

    <View style={{width:"100%",height:"100%",backgroundColor:"white"}}>
      <SearchBar/>
      {skeleton===false?

        <ScrollView>
        <View style={{alignItems:'center', justifyContent:'center',width:"100%",backgroundColor:"white",height:"100%"}}>
       {categories.map((v,i)=>(
         <TouchableOpacity key={i} activeOpacity={0.9} style={{marginVertical:"2%",width: "90%"}} onPress={()=>navigation.navigate('Subcategory',{cat_id:v.HierLevel,cat:v.name})}>
             <LinearGradient style={styles.categoryCard} start={{x: 0, y: 0}} end={{x: 1.2, y: 0}} colors={['#fff', '#D1D1ED']}>
             <Text style={styles.cardText}>{v.name}</Text>
             <Image
             style={styles.logo}
             source={img}
             
               
           />
           </LinearGradient>
           </TouchableOpacity>
       )
       
       )}
       
        </View>
        </ScrollView>:
        <View style={{ width: "100%", backgroundColor: "#F0F3F4", alignItems: 'center',height:"100%",paddingTop:"2%"}}>
        <View style={{ marginVertical: "2%", width: "90%", height: '18%', justifyContent: 'center', borderRadius: 10, backgroundColor: 'white' }} >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%', alignItems: 'center' }}>
              <Skeleton h="93" w='100' rounded='10' />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>
              <View style={{ flexDirection: 'column' }}>
                <Skeleton.Text lines={3} />
              </View>
              <View style={{ width: '90%' }}>
                <Skeleton h="3" rounded="full" startColor="amber.300" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: "2%", width: "90%", height: '19%', justifyContent: 'center', borderRadius: 10, backgroundColor: 'white' }} >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%', alignItems: 'center' }}>
              <Skeleton h="93" w='100' rounded='10' />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>
              <View style={{ flexDirection: 'column' }}>
                <Skeleton.Text lines={3} />
              </View>
              <View style={{ width: '90%' }}>
                <Skeleton h="3" rounded="full" startColor="amber.300" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: "2%", width: "90%", height: '18%', justifyContent: 'center', borderRadius: 10, backgroundColor: 'white' }} >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%', alignItems: 'center' }}>
              <Skeleton h="93" w='100' rounded='10' />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>
              <View style={{ flexDirection: 'column' }}>
                <Skeleton.Text lines={3} />
              </View>
              <View style={{ width: '90%' }}>
                <Skeleton h="3" rounded="full" startColor="amber.300" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: "2%", width: "90%", height: '18%', justifyContent: 'center', borderRadius: 10, backgroundColor: 'white' }} >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '40%', alignItems: 'center' }}>
              <Skeleton h="93" w='100' rounded='10' />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '50%' }}>
              <View style={{ flexDirection: 'column' }}>
                <Skeleton.Text lines={3} />
              </View>
              <View style={{ width: '90%' }}>
                <Skeleton h="3" rounded="full" startColor="amber.300" />
              </View>
            </View>
          </View>
        </View>
      </View>
      }
        
    </View>
  </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  categoryCard: {
    width: "100%",
    height: 113,
    elevation: 5,
    borderColor: "#8580AF",
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',


        
    },
    cardText:{
        fontSize:25,
        color: "#5D59EE",
        marginLeft:"5%",
        width:"35%"
    },
    logo:{
        width: 150,
        height:100,
        resizeMode:'cover',
    },filter: {
      // borderWidth: 1,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 5,
      flexDirection:'row',
      justifyContent:'flex-end',
      paddingRight:10
  
    },
    iconStyle: {
  
      color: "gray",
      fontSize: 25,
     
    },
    parentIcon:{
      flexDirection:'row',
      // borderWidth:1,
      width: 100,
      justifyContent:'space-between',
      
  
    }

});

export default CategoryScreen