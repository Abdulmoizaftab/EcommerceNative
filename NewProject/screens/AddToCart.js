import { View, Text, StyleSheet,ScrollView,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Actionsheet,NativeBaseProvider,useDisclose } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';
const AddToCart = () => {

  const navigate = useNavigation();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  return (
    <NativeBaseProvider>
    <View style={Style.main}>
      <View style={Style.topHeader}>
        <View style={Style.topHeader_inside}>
          <Text style={Style.topHeader_inside_text1}>ITEMS (5)</Text>
          <Text style={Style.topHeader_inside_text2}>TOTAL: RS 200.00</Text>
        </View>
      </View>
      
      <ScrollView>
        <View style={Style.item}>
          <View style={Style.item_inside}>
            <View style={Style.img_view}>
              <Image source={{uri:'https://5.imimg.com/data5/SELLER/Default/2021/1/HK/LE/LL/1073409/oppo-mobile-a9-2020-500x500.jpg'}} style={Style.img}/>
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
          <View style={Style.item_inside}>
            <View style={Style.img_view}>
              <Image source={{uri:'https://5.imimg.com/data5/SELLER/Default/2021/1/HK/LE/LL/1073409/oppo-mobile-a9-2020-500x500.jpg'}} style={Style.img}/>
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
          <View style={Style.item_inside}>
            <View style={Style.img_view}>
              <Image source={{uri:'https://5.imimg.com/data5/SELLER/Default/2021/1/HK/LE/LL/1073409/oppo-mobile-a9-2020-500x500.jpg'}} style={Style.img}/>
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
          <View style={Style.item_inside}>
            <View style={Style.img_view}>
              <Image source={{uri:'https://5.imimg.com/data5/SELLER/Default/2021/1/HK/LE/LL/1073409/oppo-mobile-a9-2020-500x500.jpg'}} style={Style.img}/>
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
          <View style={Style.item_inside}>
            <View style={Style.img_view}>
              <Image source={{uri:'https://5.imimg.com/data5/SELLER/Default/2021/1/HK/LE/LL/1073409/oppo-mobile-a9-2020-500x500.jpg'}} style={Style.img}/>
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
          <View style={Style.item_inside}>
            <View style={Style.img_view}>
              <Image source={{uri:'https://5.imimg.com/data5/SELLER/Default/2021/1/HK/LE/LL/1073409/oppo-mobile-a9-2020-500x500.jpg'}} style={Style.img}/>
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
    
        </View>
        </ScrollView>
      
        
        <TouchableOpacity activeOpacity={1} onPress={onOpen} style={{width:"100%",backgroundColor:"white",padding:10,justifyContent:"center",alignItems:"center",position:"absolute",bottom:0,borderTopLeftRadius:15,borderTopRightRadius:15}}>
              <Text>
                <SimpleLineIcons name='arrow-up' style={{fontWeight:"bold",color:"black",fontSize:25}}/>
              </Text>
        </TouchableOpacity> 

          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content style={{backgroundColor:"#edebeb"}}>
            <View style={Style.order_detail}>
            <Text style={Style.head}>Order details</Text>
            <View style={{width:"100%",backgroundColor:"#fff"}}>
              <View style={Style.cartTotal}>
                <Text style={Style.cartTotal_text}>Cart Total:</Text>
                <Text style={Style.cartTotal_text}>Rs 200.00</Text>
              </View>
              <View style={Style.cartTotal}>
                <Text style={Style.cartTotal_text}>Discount:</Text>
                <Text style={Style.cartTotal_text}>Rs 10.00</Text>
              </View>
            </View>
            <View style={Style.total}>
              <Text style={Style.Total_text}>Total Payable:</Text>
              <Text style={Style.Total_text}>Rs 190.00</Text>
            </View>
            <View style={Style.checkout_view}>
              <TouchableOpacity style={Style.checkout_view_btn} activeOpacity={0.8}  onPress={() => navigate.navigate('CheckoutScreen')} >
                <Text style={Style.checkout_view_text}>check Out</Text>
              </TouchableOpacity>
            </View>
          </View>
            </Actionsheet.Content>
          </Actionsheet>
    </View>
          </NativeBaseProvider>
  )
}
const Style=StyleSheet.create({
    main:{
      width:"100%",
      backgroundColor:"#e8e6e6",
      height:"100%"
    },
    topHeader:{
      width:"100%",
      alignItems:"center",
      shadowColor: "#000",
      shadowOpacity: 0.55,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor:"white",
      zIndex:99999
    },
    topHeader_inside:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:"95%",
      padding:5,
      backgroundColor:"white"
    },
    topHeader_inside_text1:{
      color:"black",
      fontWeight:"bold"
    },
    topHeader_inside_text2:{
      color:"black",
      fontWeight:"bold"
    },
    item:{
      width:"100%",
      alignItems:"center",
      paddingBottom:"14%"
    },
    item_inside:{
      width:"95%",
      display:"flex",
      flexDirection:"row",
      backgroundColor:"#fff",
      borderRadius:5,
      marginTop:"3%"
    },
    img_view:{
      padding:5,
      width:"35%",
      justifyContent:"center",
      alignItems:"center"
    },img:{
      height:100,
      width:100
    },
    details:{
      width:"65%",
      padding:3,
    },detail_text:{
      color:"black",
      marginVertical:"1%"
    },
    details_bottom:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    },
    counter:{
      display:"flex",
      flexDirection:"row",
      marginRight:"5%",
      marginVertical:"1%"
    },
    counter_btn:{
      backgroundColor:"#5A56E9",
      width:20,
      alignItems:"center",
      borderRadius:3,
      justifyContent:"center",
    },
    counter_variable:{
      color:"black",
      marginHorizontal:3
    },
    counter_btn_text:{
      color:"#fff",
      marginHorizontal:3,
      fontWeight:"bold"
    },
    order_detail:{
      marginTop:"3%",
      width:"100%",
      backgroundColor:"lightgray",
     
      borderRadius:15,
      borderColor:"#fff"
    },
    head:{
      color:"black",
      fontWeight:"bold",
      fontSize:17,
      margin:"3%"
    },
    cartTotal:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      margin:"3%",
      backgroundColor:"#fff"
    },cartTotal_text:{
      color:"black"
    },
    total:{
      borderTopWidth:1,
      borderTopColor:"lightgray",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      padding:"3%",
      width:"100%",
      backgroundColor:"#fff",
    },
    Total_text:{
      color:"black",
      fontWeight:"bold"
    },
    checkout_view:{
      borderTopWidth:1,
      borderTopColor:"lightgray",
      width:"100%",
      alignItems:"center",
      justifyContent:"center",
      padding:"3%",
      backgroundColor:"#fff",
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15
      
    },
    checkout_view_btn:{
      width:"80%",
      alignItems:"center",
      justifyContent:"center",
      padding:"4%",
      backgroundColor:"#5A56E9",
      borderRadius:10
    },
    checkout_view_text:{
      color:"#fff",
      fontWeight:"bold"
    }
    
})

export default AddToCart;