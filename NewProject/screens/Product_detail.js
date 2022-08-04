import { Dimensions,View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect, useMemo, useRef } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from '../components/BottomSheet';
import FlatButton from '../components/Button';



const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const Product_detail = () => {
  const [imgArr, setImgArr] = useState(["https://kimerahome.b-cdn.net/wp-content/uploads/2022/01/CADBURY-SILK-HEART-BLUSH-150-GM.jpg", "https://cdn.shopify.com/s/files/1/0474/6828/2012/products/FOPBarsPO6_2pcEach.jpg?v=1642502710", "https://cdn0.woolworths.media/content/wowproductimages/large/194423.jpg"])
  const [prdSize, setPrdSize] = useState(['Small', 'Medium', 'Large'])
  const [prdColor, setPrdColor] = useState(['Green', 'Blue', 'Red'])
  const [isFav, setIsFav] = useState(false)
  const refRBSheet = useRef();

    const renderSize = ({item}) =>(
      <View style={Style.sizeItem}>
        <Text style={Style.itemText}>{item}</Text>
      </View>
      )
      
    const renderColor = ({item}) =>(
      <View style={Style.sizeItem}>
        <Text style={Style.itemText}>{item}</Text>
      </View>
      )
    const navigate = useNavigation()
    
    const closeBtmSheet=()=>{
      refRBSheet.current.close()
    }

  return (
    <ScrollView scrollEnabled={true}>
    <View style={Style.container} >
      <View style={Style.sliderView} >
        
        <Icon style={Style.backBtn} name='arrow-back-circle' onPress={()=>navigate.goBack()}/>
        {isFav ? <Icon style={Style.heartBtn} name='heart' onPress={()=>setIsFav(!isFav)}/> : <Icon style={Style.heartBtn} name='heart-outline' onPress={()=>setIsFav(!isFav)}/>}
        
        

        <SliderBox
          images={imgArr}
          sliderBoxHeight={SCREEN_HEIGHT/2}
          ImageComponentStyle={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, width: "100%", borderWidth: 1, borderColor: "#d5d5d5" }}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
          paginationBoxVerticalPadding={20}
          resizeMethod={'resize'}
          resizeMode={'cover'}
        />
      </View>

        <View style={Style.detailsView}>
          <Text style={Style.detailsHeading}>KitKat Extra Chocolate Extra Wafers</Text>
          <Text style={Style.detailsPrice}>$25</Text>
          <Text style={Style.detailSizeHeading}>Sizes:</Text>
          <FlatList
                horizontal={true}
                data={prdSize}
                renderItem={renderSize}
                style={{marginTop:-50}}
                contentContainerStyle={{ flexDirection:'row',justifyContent: 'center', alignItems: 'center', width: '100%' }}
            />
          
          <Text style={Style.detailColorHeading}>Color:</Text>
          <FlatList
                horizontal={true}
                data={prdColor}
                style={{marginTop:-25,height:0}}
                renderItem={renderColor}
                contentContainerStyle={{ flexDirection:'row',justifyContent: 'center', alignItems: 'center', width: '100%' }}
            />
          
          <FlatButton text='Select Quantity' onPress={() => refRBSheet.current.open()}/>

        </View>
     

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={250}
        openDuration={600}
        closeDuration={600}
        closeOnPressMask={true}
        closeOnPressBack={false}
        dragFromTopOnly={true}
        animationType="slide"
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000",
            width:75

          },
          container:{
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
          }
         
        }}
      >
        <BottomSheet reference={refRBSheet}/>
      </RBSheet>
       
    </View>
    </ScrollView>
  );
}

const Style = StyleSheet.create({
  
  detailsView: {
    height: 400,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 5,
    shadowColor: "rgb(90,90,90)",
    marginTop: 5,
    width: "100%",
    alignSelf: "center",

  },
  detailsHeading: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 20,
    color: 'black',
    fontWeight: '900'
  },
  detailsPrice: {
    color: "#746BF3",
    fontSize: 27,
    paddingTop: 10,
    paddingLeft: 20,
    fontWeight: "900"
  },
  detailSizeHeading: {
    fontSize: 22,
    paddingTop: 8,
    paddingLeft: 20,
    color: 'black',
    fontWeight: '700',
    marginTop: 8
  },
  detailColorHeading: {
    fontSize: 22,
    paddingTop: 8,
    paddingLeft: 20,
    color: 'black',
    fontWeight: '700',
    marginTop: -50
  },
  detailSizeView: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  detailSizeOption: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 30,
    fontSize: 15,
    marginHorizontal: 10,
    color: "black",
    fontWeight: "600"
  },
  sizeItem: {
    borderWidth: 1,
    borderColor: "black",
    alignItems:'center',
    padding:8,
    borderRadius: 30,
    marginLeft: 20,
    width:100
  },
  itemText:{
    color:'black',
    fontSize:17,
  },
  backBtn:{
    fontSize:35,
    color:'black',
    position:'absolute',
    zIndex:999,
    top:6,
    left:15,
  },
  heartBtn:{
    fontSize:30,
    color:'red',
    position:'absolute',
    zIndex:999,
    top:6,
    right:15,
  },
  bottomSheetDrag:{
    height:50,
    width:"100%",
    backgroundColor:'white',
    position:'absolute',
    bottom:40,
    borderWidth:1,
    borderColor:'lightGrey',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
  },
  Line: {
    width: 75,
    height: 5,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 20,
  },
  

})


export default Product_detail;