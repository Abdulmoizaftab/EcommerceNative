import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect,useState } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import CheckoutBottomSheet from '../components/CheckoutBottomSheet';
import AddToCart_Comp from '../components/addToCart_Comp'
import { useSelector } from 'react-redux';
import axios from 'axios';

const AddToCart = ({ route, navigation }) => {
  const products = useSelector(state => state.test.products)
  const quantity = useSelector(state => state.test.quantity)
  const total = useSelector(state => state.test.total)
  //console.log('quantity',quantity);
  //console.log('total',total);
  const [dbProds, setDbProds] = useState([])
  const [trigger, setTrigger] = useState(true)
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    axios.get(`http://192.168.1.24:5000/sql/getCartItem`)
    .then(function (res) {
        setDbProds([])
        setDbProds(res.data)
        setLoading(false)
      })
      .catch(function (err) {
        console.log(err);
      })
  }, [trigger])



  const refRBSheet = useRef();

  const navigate = useNavigation();

  return (
    dbProds.length !== 0 ? (
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

        <AddToCart_Comp products={dbProds} trigger={trigger} setTrigger={setTrigger} loading={loading} />
        {
          quantity !== 0 && total !== 0 ? (
            <>
        <TouchableOpacity activeOpacity={1} onPress={() => refRBSheet.current.open()} style={{ width: "100%", backgroundColor: "white", padding: 10, justifyContent: "center", alignItems: "center", position: "absolute", bottom: 0, elevation:20, shadowColor:"black", borderWidth:1, borderColor:'#eee', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
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
                </>
          ) : (
            null
          )
        }

        
      </View>
    ) : (
      <View style={Style.main}>

        <AddToCart_Comp products={dbProds} trigger={trigger} setTrigger={setTrigger} loading={loading} />
        {/* <Text>hello</Text> */}
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