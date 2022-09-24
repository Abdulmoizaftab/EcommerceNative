import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import CheckoutBottomSheet from '../components/CheckoutBottomSheet';
import AddToCart_Comp from '../components/addToCart_Comp'
import { useSelector } from 'react-redux';

const AddToCart = ({route,navigation}) => {
  const products = useSelector(state => state.test.products)
  const quantity = useSelector(state => state.test.quantity)
  const total = useSelector(state => state.test.total)

  
  const refRBSheet = useRef();

  const navigate = useNavigation();

  return (
    products.length !== 0 ? (
      <View style={Style.main}>
        <View style={Style.topHeader}>
          <View style={Style.topHeader_inside}>
            {
              quantity !== 0 && total !== 0 ? (
                <>
                  <Text style={Style.topHeader_inside_text1}>ITEMS ({quantity})</Text>
                  <Text style={Style.topHeader_inside_text2}>TOTAL: RS {total}.00</Text>
                </>
              ) : 
                null
              
            }

          </View> 
        </View>
        
        <AddToCart_Comp  Products = {products} />
        <TouchableOpacity activeOpacity={1} onPress={() => refRBSheet.current.open()} style={{ width: "100%", backgroundColor: "white", padding: 10, justifyContent: "center", alignItems: "center", position: "absolute", bottom: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
          <Text>
            <SimpleLineIcons name='arrow-up' style={{ fontWeight: "bold", color: "black", fontSize: 25 }} />
          </Text>
        </TouchableOpacity>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          height={310}
          openDuration={400}
          closeDuration={400}
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
              width: 75

            },
            container: {
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }

          }}
        >
          <CheckoutBottomSheet total={total} reference={refRBSheet} />
        </RBSheet>
      </View>
    ) : (
      <View style={Style.main}>

        <AddToCart_Comp  />

      </View>
    )

  )
}
const Style = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "#e8e6e6",
    height: "100%"
  },
  topHeader: {
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    zIndex: 99999
  },
  topHeader_inside: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    padding: 5,
    backgroundColor: "white"
  },
  topHeader_inside_text1: {
    color: "black",
    fontWeight: "bold"
  },
  topHeader_inside_text2: {
    color: "black",
    fontWeight: "bold"
  },
})

export default AddToCart;