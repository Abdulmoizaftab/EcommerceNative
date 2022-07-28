import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SliderBox } from "react-native-image-slider-box";


const Product_detail = () => {
  const [imgArr, setImgArr] = useState(["https://kimerahome.b-cdn.net/wp-content/uploads/2022/01/CADBURY-SILK-HEART-BLUSH-150-GM.jpg", "https://cdn.shopify.com/s/files/1/0474/6828/2012/products/FOPBarsPO6_2pcEach.jpg?v=1642502710", "https://cdn0.woolworths.media/content/wowproductimages/large/194423.jpg"])

  return (
    <>
      <View>
        <SliderBox
          images={imgArr}
          sliderBoxHeight={250}
          ImageComponentStyle={{borderBottomLeftRadius:25,borderBottomRightRadius:25, width: "98%",  backgroundColor:"#F6F6F8"}}
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
        <Text style={Style.detailsHeading}>KitKat Extra Chocolate Extra Wafers)</Text>
        <Text style={Style.detailsPrice}>$25</Text>
        <Text style={Style.detailSizeHeading}>Sizes:</Text>
        <View style={Style.detailSizeView}>
          <Text style={Style.detailSizeOption}>Small</Text>
          <Text style={Style.detailSizeOption}>Medium</Text>
          <Text style={Style.detailSizeOption}>Large</Text>
        </View>
      </View>
    </>
  )
}


const Style = StyleSheet.create({
  detailsView:{
    height:500,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    backgroundColor:"white",
    elevation:5,
    shadowColor: "rgb(90,90,90)",
    marginTop:5,
    width:"98%",
    alignSelf:"center"

  },
  detailsHeading:{
    fontSize:25,
    paddingTop:5,
    paddingLeft:10,
    color:'black',
    fontWeight:'900'
  },
  detailsPrice:{
    color:"#746BF3",
    fontSize:25,
    paddingTop:5,
    paddingLeft:10,
    fontWeight:"900"
  },
  detailSizeHeading:{
    fontSize:22,
    paddingTop:10,
    paddingLeft:10,
    color:'black',
    fontWeight:'700',
    marginTop:8
  },
  detailSizeView:{
    marginTop:8,
    flexDirection:'row',
    justifyContent:'center'
  },
  detailSizeOption:{
    borderWidth:1,
    borderColor:'black',
    padding:10,
    borderRadius:30,
    fontSize:15,
    marginHorizontal:10,
    color:'black',
    fontWeight:"600"
  }
})
export default Product_detail;