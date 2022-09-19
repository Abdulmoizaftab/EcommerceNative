import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Summary = () => {
  return (
    <View style={Style.main}>
      <View style={Style.topHeader}>
        <View style={Style.topHeader_inside}>
          <>
            <Text style={Style.topHeader_inside_text1}>ITEMS (3)</Text>
            <Text style={Style.topHeader_inside_text2}>TOTAL: Rs. 1347.00</Text>
          </>
        </View>
      </View>
      {/* cart items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: '3%', marginBottom: '20%'}}>
          <View style={Style.items}>
            <View style={Style.items_head}>
              <Text style={Style.items_head_text}>3 Items</Text>
            </View>
            <View style={Style.items_list}>
              <View>
                <Image
                  source={{
                    uri: 'https://www.pngmart.com/files/13/Apple-Airpods-Transparent-PNG.png',
                  }}
                  style={Style.img}
                />
              </View>
              <View>
                <Text style={Style.items_list_text_desc}>
                  Polo republica shirt brand new...
                </Text>
                <Text style={Style.items_list_text_same}>Size: Medium</Text>
                <Text style={Style.items_list_text_same}>Color: Purple</Text>
                <Text style={Style.items_list_text_same}>Qty: 2</Text>
                <Text style={Style.items_list_text_price}>Rs. 200.00</Text>
              </View>
            </View>
            <View style={Style.items_list}>
              <View>
                <Image
                  source={{
                    uri: 'https://www.pngmart.com/files/13/Apple-Airpods-Transparent-PNG.png',
                  }}
                  style={Style.img}
                />
              </View>
              <View>
                <Text style={Style.items_list_text_desc}>
                  Polo republica shirt brand new...
                </Text>
                <Text style={Style.items_list_text_same}>Size: Medium</Text>
                <Text style={Style.items_list_text_same}>Color: Purple</Text>
                <Text style={Style.items_list_text_same}>Qty: 2</Text>
                <Text style={Style.items_list_text_price}>Rs. 200.00</Text>
              </View>
            </View>
            <View style={Style.items_list}>
              <View>
                <Image
                  source={{
                    uri: 'https://www.pngmart.com/files/13/Apple-Airpods-Transparent-PNG.png',
                  }}
                  style={Style.img}
                />
              </View>
              <View>
                <Text style={Style.items_list_text_desc}>
                  Polo republica shirt brand new...
                </Text>
                <Text style={Style.items_list_text_same}>Size: Medium</Text>
                <Text style={Style.items_list_text_same}>Color: Purple</Text>
                <Text style={Style.items_list_text_same}>Qty: 2</Text>
                <Text style={Style.items_list_text_price}>Rs. 200.00</Text>
              </View>
            </View>
          </View>

          {/* Address */}
          <View style={{marginVertical: '3%'}}></View>
          <View style={Style.items}>
            <View style={Style.items_head}>
              <Text style={Style.items_head_text}>Shipping Address</Text>
            </View>
            <View style={Style.address_list}>
              <Text style={Style.address_list_text_same}>
                House no: 55/6 Malir Extension colony.
              </Text>
              <Text style={Style.address_list_text_same}>Karachi</Text>
              <Text style={Style.address_list_text_same}>75080</Text>
              <Text style={Style.address_list_text_same}>Pakistan</Text>
              <Text style={Style.address_list_text_same}>02134428946</Text>
              <Text style={Style.address_list_text_same}>03162539564</Text>
            </View>
          </View>

          {/* contact */}
          <View style={{marginVertical: '3%'}}></View>
          <View style={Style.items}>
            <View style={Style.items_head}>
              <Text style={Style.items_head_text}>Contacts</Text>
            </View>
            <View style={Style.address_list}>
              <Text style={Style.address_list_text_same}>02134428946</Text>
              <Text style={Style.address_list_text_same}>03162539564</Text>
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
                <Text style={Style.order_list_text_same}>Rs. 1147.00</Text>
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
                <Text style={Style.order_list_text_same_end}>Rs. 1347.00</Text>
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
