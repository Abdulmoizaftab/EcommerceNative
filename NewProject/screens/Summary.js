import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

const Summary = ({route}) => {
  const [products,setProducts]=useState([]);
  const address = useSelector(state => state.address)
  const test = useSelector(state => state.test)
  useEffect(() => {
    setProducts(test.products)
  }, [])

  
  console.log("data==>",products);
  return (
    <View style={Style.main}>
      <View style={Style.topHeader}>
        <View style={Style.topHeader_inside}>
          <>
            <Text style={Style.topHeader_inside_text1}>ITEMS ({test.quantity})</Text>
            <Text style={Style.topHeader_inside_text2}>TOTAL: Rs. {test.total}.00</Text>
          </>
        </View>
      </View>
      {/* cart items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: '3%', marginBottom: '20%'}}>
          <View style={Style.items}>
            <View style={Style.items_head}>
              <Text style={Style.items_head_text}>{test.quantity} Items</Text>
            </View>
            {products.map((v,i)=>{
              return <View style={Style.items_list} key={i}>
              <View>
                <Image
                  source={{
                    uri: v.product.imgs,
                  }}
                  style={Style.img}
                />
              </View>
              <View>
                <Text style={Style.items_list_text_desc}>
                  {v.product.name.substring(0,27)}...
                </Text>
                <Text style={Style.items_list_text_same}>Size: NA</Text>
                <Text style={Style.items_list_text_same}>Color: NA</Text>
                <Text style={Style.items_list_text_same}>Qty: {v.qty}</Text>
                <Text style={Style.items_list_text_price}>Rs. {v.product.price}.00</Text>
              </View>
            </View>
            })}
          </View>

          {/* Address */}
          <View style={{marginVertical: '3%'}}></View>
          <View style={Style.items}>
            <View style={Style.items_head}>
              <Text style={Style.items_head_text}>Shipping Address</Text>
            </View>
            <View style={Style.address_list}>
              <Text style={Style.address_list_text_same}>
                {address.addresses[0].address}, Pakistan.
              </Text>
              <Text style={Style.address_list_text_same}>{address.addresses[0].title}.</Text>
              <Text style={Style.address_list_text_same}>Receiving by {address.addresses[0].recipent}.</Text>
            </View>
          </View>

          {/* contact */}
          <View style={{marginVertical: '3%'}}></View>
          <View style={Style.items}>
            <View style={Style.items_head}>
              <Text style={Style.items_head_text}>Contacts</Text>
            </View>
            <View style={Style.address_list}>
              <Text style={Style.address_list_text_same}>0{address.addresses[0].phone}.</Text>
            </View>
          </View>

          {/* payment */}
          <View style={{marginVertical: '3%'}}></View>
          <View style={Style.items}>
            <View style={Style.items_head}>
              <Text style={Style.items_head_text}>Payment Method</Text>
            </View>
            <View style={Style.address_list}>
              <Text style={Style.address_list_text_same}>Cash on delivery.</Text>
            </View>
          </View>

          {/* Order details */}
          <View style={{marginVertical: '3%'}}></View>
          <View style={Style.items}>
            <View style={Style.items_head}>
              <Text style={Style.items_head_text}>Order Details</Text>
            </View>
            <View style={Style.address_list}>
              <View style={Style.order_list_views}>
                <Text style={Style.order_list_text_same}>Order Total:</Text>
                <Text style={Style.order_list_text_same}>Rs. {test.total}.00</Text>
              </View>
              <View style={Style.order_list_views}>
                <Text style={Style.order_list_text_same}>
                  Shipping Charges:
                </Text>
                <Text style={Style.order_list_text_same}>Rs. 200.00</Text>
              </View>
              <View style={Style.order_list_views}>
                <Text style={Style.order_list_text_same}>
                  Discount:
                </Text>
                <Text style={Style.order_list_text_same}>Rs. 10.00</Text>
              </View>
              <View style={Style.order_list_views_end}>
                <Text style={Style.order_list_text_same_end}>
                  Total Payable:
                </Text>
                <Text style={Style.order_list_text_same_end}>Rs. {test.total+200-10}.00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
          <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#5A56E9",position:"absolute",bottom:"4.5%",width:"100%",height:"8%",alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"white",fontWeight:"bold",fontSize:17,letterSpacing:3}}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Summary;

const Style = StyleSheet.create({
  main: {
    width: '100%',
  },
  topHeader: {
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    zIndex: 99999,
  },
  topHeader_inside: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    padding: 5,
    backgroundColor: 'white',
  },
  topHeader_inside_text1: {
    color: 'black',
    fontWeight: 'bold',
  },
  topHeader_inside_text2: {
    color: 'black',
    fontWeight: 'bold',
  },
  items: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  items_head: {
    width: '100%',
    padding: '2%',
    backgroundColor: '#5A56E9',
    borderTopRightRadius:5,
    borderTopLeftRadius:5
  },
  items_head_text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  items_list: {
    borderTopWidth: 1,
    borderColor: '#cccccc',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '2%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  items_list_text_desc: {
    color: 'gray',
    fontSize: 15,
  },
  items_list_text_same: {
    color: 'gray',
    fontSize: 12,
  },
  items_list_text_price: {
    color: 'black',
    fontWeight: 'bold',
  },
  address_list: {
    borderTopWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: '2%',
  },
  address_list_text_same: {
    color: '#575757',
    fontSize: 14,
  },
  order_list_views: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '2%',
  },
  order_list_text_same: {
    color: 'black',
    fontSize: 14,
  },
  order_list_views_end: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '2%',
    borderTopWidth: 1,
    borderColor: '#cccccc',
  },
  order_list_text_same_end: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
