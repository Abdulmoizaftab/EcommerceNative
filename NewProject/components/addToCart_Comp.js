import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,FlatList } from 'react-native';
import React, { useState } from 'react'
import Swipeout from 'react-native-swipeout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const AddToCart_Comp = () => {
  const [arr,setArr]=useState(["umair","hello","Wow","Get","cow","man"])
  const re_icon=()=>{
    return(
      <MaterialCommunityIcons name='delete' style={{color:"#fff",fontSize:25}}/>
    )
  }
  const check=(i)=>{
    //console.log("data==>",swipeoutBtns[i].onPress());
    //swipeoutBtns[0].onPress(i)
    const dat=i
    return dat;
  }
  const [che,setChe]=useState()
    var swipeoutBtns = [

        {
          text: re_icon(),
          onPress:()=>{
            ;
            //alert("Delete Cancel...!!",i)
            console.log("hello==>",che);
          },
          backgroundColor:"red"
        },    
      ]
    
  return (
    <View style={Style.item}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {arr.map((v,i)=>{
           return <Swipeout right={swipeoutBtns} key={i} onOpen={()=>setChe(i)}  backgroundColor="#e8e6e6" style={Style.swipe_style}>
          <View style={Style.item_inside}>
            <View style={Style.img_view}>
              <Image source={{ uri: 'https://5.imimg.com/data5/SELLER/Default/2021/1/HK/LE/LL/1073409/oppo-mobile-a9-2020-500x500.jpg' }} style={Style.img} />
            </View>
            <View style={Style.details}>
              <Text style={Style.detail_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</Text>
              <Text style={Style.detail_text}>Rs 349.00</Text>
              <Text style={Style.detail_text}>Color: Purple</Text>
              <View style={Style.details_bottom}>
                <Text style={Style.detail_text}>Size: 5.5 inch</Text>
                <View style={Style.counter}>
                  <View style={Style.counter_btn}>
                    <TouchableOpacity>
                      <Text style={Style.counter_btn_text}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={Style.counter_variable}>1</Text>
                  <View style={Style.counter_btn}>
                    <TouchableOpacity>
                      <Text style={Style.counter_btn_text}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
            </Swipeout>
          })}
          </ScrollView>
        </View>
  )
};
const Style = StyleSheet.create({
    item: {
      width: "100%",
      alignItems: "center",
      padding:"1%",
      marginBottom:"20%"
    },swipe_style:{
      width:"98%",
      marginVertical:"1%"
    },
    item_inside: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 5,
    },
    img_view: {
      padding: 5,
      width: "35%",
      justifyContent: "center",
      alignItems: "center",
    }, img: {
      height: 100,
      width: 100,
    },
    details: {
      width: "65%",
      padding: 3,
    }, detail_text: {
      color: "black",
      marginVertical: "1%"
    },
    details_bottom: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    counter: {
      display: "flex",
      flexDirection: "row",
      marginRight: "5%",
      marginVertical: "1%"
    },
    counter_btn: {
      backgroundColor: "#5A56E9",
      width: 20,
      alignItems: "center",
      borderRadius: 3,
      justifyContent: "center",
    },
    counter_variable: {
      color: "black",
      marginHorizontal: 3
    },
    counter_btn_text: {
      color: "#fff",
      marginHorizontal: 3,
      fontWeight: "bold"
    },
  })

export default AddToCart_Comp;