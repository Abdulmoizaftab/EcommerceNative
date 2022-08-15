import { StyleSheet, Text, View, Image, Button, TouchableOpacity,ScrollView} from 'react-native'
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NativeBaseProvider, Radio } from 'native-base';
import { useNavigation } from '@react-navigation/native';


const CheckOutScreen = () => {
    const navigate = useNavigation()
  const [css, setCss] = useState(140)
  const Example = () => {
    return <Radio.Group defaultValue="1" name="exampleGroup" accessibilityLabel="favorite colorscheme">
      <View style={styles.radio}>
        <View>
          <Radio colorScheme="blue" value="1" my={1} >
            <Image
              style={styles.visaLogo}
              source={{
                uri: 'https://www.kindpng.com/picc/m/291-2918629_visa-logo-png-visa-logo-vector-transparent-png.png',
              }}
            />
            <Text style={{ marginLeft: 20, fontSize: 17 }}>*** *** **** 1234</Text>
          </Radio>
        </View>
        <View tyle={styles.radio2}>
          <Radio colorScheme="orange" value="2" my={1}>
            <Image
              style={styles.visaLogo}
              source={{
                uri: 'https://p7.hiclipart.com/preview/648/903/662/logo-payment-visa-mastercard-paypal-mastercard-icon-png.jpg',
              }}
            />
            <Text style={{ marginLeft: 20, fontSize: 17 }}>*** *** **** 1234</Text>
          </Radio>
        </View>
      </View>

    </Radio.Group>;
  };

  const [card, setCard] = useState(true)
  const [paymentcard, setPaymentcard] = useState(true)



  return (
    <ScrollView>
      <View style={styles.Container1}>
        <View style={styles.imageIcon}>
          <Image
            style={styles.arrow}
            source={require('../image/Arrow-LeftNew.png')}
          />
        </View>
        <Text style={styles.heading}>Checkout</Text>
      </View>

      <View style={{ height: css }}>
        <View style={styles.add}>
          <Text style={styles.ship}>Shipping information</Text>
          <TouchableOpacity onPress={()=>navigate.navigate('AddressBook')}>
            <Text style={styles.buttonAdd}>Add</Text>
          </TouchableOpacity>

        </View>

        {card && setCard ?
          <View style={styles.addressbtn1}>
            <TouchableOpacity style={styles.appButtonContainer} onPress={() => {
              setCard(false)
              setCss(240)
            }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require('../image/plus.png')
                } />
              <Text style={styles.appButtonText}>Add Address</Text>

            </TouchableOpacity>
          </View>
          :
          <View style={styles.parentDiv}>
            <View style={styles.div1}>
              <View style={styles.section2}>

                <View style={styles.p1}>
                  <AntDesign name="user" size={32} color='#000' />
                  <Text style={styles.text}>Rosisa Doe</Text>
                </View >

                <View style={styles.p1}>
                  <EvilIcons name="location" size={32} color='#000' />
                  <Text style={styles.text}>43 Oxford Road 14 London </Text>
                </View>

                <View style={styles.p1}>
                  <Ionicons name="call-outline" size={32} color='#000' />
                  <Text style={styles.text}>+92316262231</Text>
                </View>
              </View>
            </View>
          </View>}

      </View>

      <View>
        <View style={styles.add}>
          <Text style={styles.ship}>Payment Method</Text>
          <TouchableOpacity>
            <Text style={styles.buttonAdd1}>Add</Text>
          </TouchableOpacity>

        </View>

        {paymentcard && setPaymentcard ? <View style={styles.addressbtn1}>
          <TouchableOpacity style={styles.appButtonContainer} onPress={() => { setPaymentcard(false) }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../image/plus.png')
              } />
            <Text style={styles.appButtonText}>Add Payment </Text>

          </TouchableOpacity>
        </View>
          :
          <View style={styles.parentDiv}>
            <View style={styles.div1}>
              <View style={styles.section2}>
                <NativeBaseProvider>
                  {Example()}

                </NativeBaseProvider>
              </View>
            </View>
          </View>}


      </View>
      <View style={{ padding: 8, marginTop: 180, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 320, marginTop: 30 }}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total1}>$ 954</Text>

        </View>

      </View>
   
     <TouchableOpacity>
     <View style={styles.parentPayDiv}>
        <View style={styles.parentPay}>
          <Text style={styles.payButton}>Confirm and pay</Text>
        </View>
      </View>
     </TouchableOpacity>
    
    </ScrollView>

  )
}

export default CheckOutScreen

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    color: "#5D59EE",
    fontWeight: '700',
    marginTop: 18,
  },
  Container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  },
  arrow: {
    width: 30,
    height: 20,
  },
  imageIcon: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  add: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 22,

  },
  ship: {


    color: "#000",
    fontSize: 19,
    fontWeight: '400',
    // fontFamily: 'Mukta-Medium',
  },
  buttonAdd: {
    color: '#5D59EE',
    fontSize: 18,
    fontWeight: '500',
    // display: 'none',
    opacity: 1,
  },
  buttonAdd1: {
    color: '#5D59EE',
    fontSize: 18,
    fontWeight: '500',
    // display: 'none',
    opacity: 1,
    marginLeft: 9,
  },
  appButtonContainer: {
    flexDirection: 'row',
    elevation: 8,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '73%',

  },
  appButtonText: {
    fontSize: 18,
    color: "#737373",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    position: 'absolute',
    right: 74,
  },
  addressbtn1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  div1: {
    width: 310,
    height: 170,
    backgroundColor: "#fff",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    position: 'absolute',
    bottom: -190,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentDiv: {
    alignItems: 'center',


  
  },
  p1: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',

  },
  text: {
    fontSize: 17,
    marginLeft: 14,
    width: 150,
  },
  section2: {


    marginLeft: -120,
    width: 130,
    height: 140,
    justifyContent: 'space-between',
  },
  radio: {

    height: '100%',
    justifyContent: 'space-around',
  },
  visaLogo: {
    width: 60,
    height: 40,
    marginLeft: '2%'

  },
  amount: {

  },

  total: {
    fontSize: 20,
  },
  total1: {
    fontSize: 20,
    color: '#5D59EE',
    fontWeight: '600'
  },
  parentPay:{
   
    height: 50,
    width: '60%',
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5D59EE',

  },
  payButton:{
    fontSize:20,
    color:'#fff'
  },
  parentPayDiv:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  }



})