import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import React,{useRef} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import CheckoutBottomSheet from '../components/CheckoutBottomSheet';
import AddToCart_Comp from '../components/addToCart_Comp'

const AddToCart = () => {


  const refRBSheet = useRef();

  const navigate = useNavigation();

  return (
    <View style={Style.main}>
      <View style={Style.topHeader}>
        <View style={Style.topHeader_inside}>
          <Text style={Style.topHeader_inside_text1}>ITEMS (5)</Text>
          <Text style={Style.topHeader_inside_text2}>TOTAL: RS 200.00</Text>
        </View>
      </View>
      <AddToCart_Comp/>
      <TouchableOpacity activeOpacity={1} onPress={() => refRBSheet.current.open()} style={{ width: "100%", backgroundColor: "white", padding: 10, justifyContent: "center", alignItems: "center", position: "absolute", bottom: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
        <Text>
          <SimpleLineIcons name='arrow-up' style={{ fontWeight: "bold", color: "black", fontSize: 25 }} />
        </Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={300}
        openDuration={450}
        closeDuration={450}
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
        <CheckoutBottomSheet reference={refRBSheet}/>
      </RBSheet>
    </View>
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