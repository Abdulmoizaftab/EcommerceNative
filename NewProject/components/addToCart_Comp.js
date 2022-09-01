import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react'
import Swipeout from 'react-native-swipeout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { deleteProduct, modifyCart } from '../redux/CartRedux'
import { useDispatch, useSelector } from 'react-redux'
import empty_cart from '../image/empty_cart.png'

const AddToCart_Comp = () => {
  const dispatch = useDispatch()
  const reduxData = useSelector(state => state.cart.products)



  const re_icon = () => {
    return (
      <MaterialCommunityIcons name='delete' style={{ color: "#fff", fontSize: 25 }} />
    )
  }

  const [che, setChe] = useState()
  var swipeoutBtns = [
    {
      text: re_icon(),
      onPress: () => {

        //alert("Delete Cancel...!!",i)
        console.log("hello==>", che);
        dispatch(deleteProduct(reduxData[che].product.product_id))
      },
      backgroundColor: "red"
    },
  ]

  return (

    reduxData.length !== 0 ? (

      <View style={Style.item}>
        <ScrollView showsVerticalScrollIndicator={false}>


          {reduxData.map((element, index) => {
            return <Swipeout right={swipeoutBtns} key={index} onOpen={() => setChe(index)} backgroundColor="#e8e6e6" style={Style.swipe_style}>
              <View style={Style.item_inside}>
                <View style={Style.img_view}>
                  <Image source={{ uri: element.product.imgs }} style={Style.img} />
                </View>
                <View style={Style.details}>
                  <Text style={Style.detail_text}>{element.product.name.split(/\s+/).slice(0, 3).join(" ") + "..."}....</Text>
                  <Text style={Style.detail_text}>Rs {element.product.price}.00</Text>
                  <Text style={Style.detail_text}>Color: Purple</Text>
                  <View style={Style.details_bottom}>
                    <Text style={Style.detail_text}>Size: 5.5 inch</Text>
                    <View style={Style.counter}>
                      {element.qty === 1 ? (
                        <View style={Style.counter_btn_disabled}>
                          <View>
                            <Text style={Style.counter_btn_text}>-</Text>
                          </View>
                        </View>
                      ) : (
                        <View style={Style.counter_btn}>
                          <TouchableOpacity onPress={() => dispatch(modifyCart({ qty: element.qty - 1, product_id: element.product.product_id }))}>
                            <Text style={Style.counter_btn_text}>-</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                      <Text style={Style.counter_variable}>{element.qty}</Text>
                      <View style={Style.counter_btn}>
                        <TouchableOpacity onPress={() => dispatch(modifyCart({ qty: element.qty + 1, product_id: element.product.product_id }))}>
                          <Text style={Style.counter_btn_text}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Swipeout>
          })}</ScrollView></View>
    ) : (
      <View style={Style.main_img}>

        <View style={Style.imgView}>
          <Image style={Style.imgStyle} source={empty_cart}></Image>
          <Text style={{ color: 'gray', fontWeight: '400' }}>Products added to the cart will be shown here</Text>
        </View>
      </View>
    )


  )
};
const Style = StyleSheet.create({
  item: {
    width: "100%",
    alignItems: "center",
    padding: "1%",
    marginBottom: "20%"
  }, swipe_style: {
    width: "98.5%",
    alignSelf:'center',
    marginVertical: "1%",
    elevation:5,
    shadowColor:'#555'
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
  counter_btn_disabled: {
    backgroundColor: "#777",
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
  imgStyle: {
    width: 250,
    height: 250,
  },
  imgView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  main_img: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default AddToCart_Comp;