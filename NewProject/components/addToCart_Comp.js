import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import Swipeout from 'react-native-swipeout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { deleteProduct, modifyCart } from '../redux/CartRedux';
import { useDispatch, useSelector } from 'react-redux';
import empty_cart from '../image/empty_cart.png';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { deleteProductTest, addProductTest, resetCartTest, modifyCartTest } from '../redux/Test_Redux';
import { cartModificationDecrease, cartModificationIncrease,deleteFromCart } from '../redux/apiCalls';

const AddToCart_Comp = ({products,trigger,setTrigger}) => {
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const reduxData = useSelector(state => state.cart.products);
  const reduxDataTest = useSelector(state => state.test.products);
  const TestreduxDataTotal = useSelector(state => state.test.total);
  const TestreduxDataTotalTest = useSelector(state => state.cart.total);
  const testreduxDataquantity = useSelector(state => state.test.quantity);
  // console.log("🚀 ~ file: addToCart_Comp.js ~ line 20 ~ TestreduxDataquantity", TestreduxDataTotal,TestreduxDataTotalTest)

  // const getData = () => {
  //   console.log("🚀 ~ ", reduxDataTest)
  // }
  const selectItem = (item, checkboxValue) => {
    if (checkboxValue == true) {
      // console.log("🚀 false", checkboxValue)
      // console.log("🚀 check", item)
      dispatch(addProductTest(item))
    }
    else {
      // console.log("🚀 true", checkboxValue, item.product_id)
      dispatch(deleteProductTest(item.product_id))
    }
  }

  const clearData = () => {
    dispatch(resetCartTest())
  }

  const decreaseQuantity = (element) => {
    const payload = {
      product_id : element.product_id
    }
    // dispatch(modifyCart({ qty: element.qty - 1, product_id: element.product_id }))
    dispatch(modifyCartTest({ quantity: element.quantity - 1, product_id: element.product_id }))
    cartModificationDecrease(dispatch, payload);
    setTrigger(!trigger)
  }
  
  const increaseQuantity = (element) => {
    const payload = {
      product_id : element.product_id,
      quantity:1
    }
    // dispatch(modifyCart({ qty: element.qty - 1, product_id: element.product_id }))
    dispatch(modifyCartTest({ quantity: element.quantity + 1, product_id: element.product_id }))
    cartModificationIncrease(dispatch, payload);
    setTrigger(!trigger)
  }
  
  const isItemChecked = (id) =>{
    let isChecked=false;
    if (reduxDataTest.length === 0) {
      return false
    } 
    else {
      reduxDataTest.map((element)=>{
        if(element.product_id === id){
          isChecked=true
        }
      })

      return isChecked
    }
  }
  
  
  const errorFunction = () =>{
    setTimeout(() => {
      setError(false)
    }, 5000);

    return(
      <Text style={{alignSelf:"center" , color:'red' , marginVertical:'2%' }}>Please deselect the item and then delete it from the cart. </Text>
    )
  }

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
        //const isItemChecked = checkSelectDAta(che.product_id)
        const check = isItemChecked(che.product_id)
        if (check) {
          setError(true)
        } else {
          const payload={
            product_id: che.product_id,
          }
          //alert("Delete Cancel...!!",i)
          //console.log("hello==>", che.product_id);
          //dispatch(deleteProductTest(che.product_id))
          // if (isItemChecked) {
            //   //selectItem(che,isItemChecked)
            //   selectItem(che,!isItemChecked)
            // } 
            dispatch(deleteProductTest(che.product_id))
            deleteFromCart(dispatch, payload);
            setTrigger(!trigger)  
        }
      },
      backgroundColor: "red"
    },
  ]
  const checkSelectDAta = (id) => {
    // Boolean(cartItems.find((item)=> item.title === food.title ))
    Boolean(reduxDataTest.find((item) => item.product_id === id))
   }
  const test = useSelector(state => state.cart.products)

  // const SelectAll = () => {
  //   console.log("🚀 ~ press==>", test)
  //   dispatch(resetCartTest())
  //   test && test.map((obj) => {
  //     // console.log("🚀 ~ file: addToCart_Comp.js ~ line 95 ~ test&&test.map ~ obj", obj)
  //     dispatch(addProductTest(obj))
  //   })
  // }


  return (

    products && products.length !== 0 ? (

      <View style={Style.item}>
        {/* <Button style={{marginTop:2}} title='Select All' onPress={getData}></Button> */}
        
        {
          error ? (
            //<Text style={{alignSelf:"center" , color:'red' , marginVertical:'2%' }}>Please deselect the item and then delete it from the cart. </Text>
            errorFunction()
          ):(
            null
          )
        }


        <ScrollView showsVerticalScrollIndicator={false}>

          {/* for debuging */}
          {/* <Button title='hello je' onPress={clearData}></Button>
          <Button title='lao gee' onPress={getData}></Button> */}

          {/* select all feature */}
          {/* {reduxData
            ?
            <Button title='select all' onPress={SelectAll}></Button>
            :
            null
          } */}

        




          {products && products.map((element, index) => {
            return (
              <Swipeout right={swipeoutBtns} key={index} onOpen={() => setChe(element)} backgroundColor="#e8e6e6" style={Style.swipe_style}>
                <View style={Style.item_inside}>
                  <View style={Style.img_view}>
                    <View style={Style.check_btn1} >
                      <View style={{ marginLeft: 17, width: 30 }}>
                        <BouncyCheckbox
                          iconStyle={{ borderColor: 'lightgrey' }}
                          fillColor="#5A56E9"
                          isChecked={checkSelectDAta(element.product_id)}
                          onPress={(checkboxValue) => selectItem(element, checkboxValue)}
                        />
                      </View>
                    </View>
                    <Image source={{ uri: element.imgs }} style={Style.img} />
                  </View>
                  <View style={Style.details}>
                    <Text style={Style.detail_text}>{element.name.split(/\s+/).slice(0, 3).join(" ") + "..."}....</Text>
                    <Text style={Style.detail_text}>Rs {element.price}.00</Text>
                    <Text style={Style.detail_text}>Color: Purple</Text>
                    <View style={Style.details_bottom}>
                      <Text style={Style.detail_text}>Size: 5.5 inch</Text>
                      <View style={Style.counter}>
                        {element.quantity === 1 ? (
                          <View style={Style.counter_btn_disabled}>
                            <View>
                              <Text style={Style.counter_btn_text}>-</Text>
                            </View>
                          </View>
                        ) : (
                          <View style={Style.counter_btn}>
                            <TouchableOpacity
                              onPress={()=>decreaseQuantity(element)}
                            >
                              <Text style={Style.counter_btn_text}>-</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                        <Text style={Style.counter_variable}>{element.quantity}</Text>
                        <View style={Style.counter_btn}>
                          <TouchableOpacity
                            onPress={() => increaseQuantity(element)}
                          >
                            <Text style={Style.counter_btn_text}>+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Swipeout>)
          })}</ScrollView>

      </View>
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
    alignSelf: 'center',
    marginVertical: "1%",
    elevation: 5,
    shadowColor: '#555'
  },
  item_inside: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  img_view: {
    // borderWidth:1,
    width: "35%",
    flexDirection: 'row',
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
  check_btn1: {
    // backgroundColor: "#5A56E9",
    //backgroundColor:newColor,
    // borderWidth: 2,

    borderColor: 'silver',
    width: 45,
    height: 45,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    //borderWidth: 2,
    position: 'relative',
    left: 7,
    alignItems: 'center',

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
  },
  CheckOutRadio: {

    // borderWidth:1,
    color: "#fff",
    marginHorizontal: 3,
    fontWeight: "bold"





  }
})

export default AddToCart_Comp;