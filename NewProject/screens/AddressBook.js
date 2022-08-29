import { StyleSheet, Text, View,Button, TouchableOpacity,Image } from 'react-native'
import React,{useRef,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RBSheet from "react-native-raw-bottom-sheet";
import AddressBottomSheet from '../components/AddressBottomSheet';
import addressImg from '../image/address1.png'
import { useDispatch,useSelector } from 'react-redux';
import { deleteAddress } from '../redux/AddressRedux'


const AddressBook = () => {
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const address = useSelector(state => state.address)
    const refRBSheet = useRef();

  useEffect(() => {
    console.log(address)
  }, [address])
  
  

  return (
    <View style={styles.main}>
      {
        address.addresses.length !==0 ? (
          address.addresses.map((element,key)=>(
            <View key={key}>
              <Text>{element.title}</Text>
              <Text>{element.address}</Text>
              <Text>Recipent: {element.recipent}</Text>
              <Text>{element.phone}</Text>
              <Button title='Delete' onPress={()=>dispatch(deleteAddress(element.address))}/>
            </View>
          ))
        ):(
            <View style={styles.imgView}>
              <Image style={styles.imgStyle} source={addressImg}></Image>
              <Text style={{ color: 'gray', fontWeight: '400' }}>Click the icon to add an address</Text>
            </View>
        )
      }
      
      <TouchableOpacity style={styles.iconView} activeOpacity={0.7} onPress={() => refRBSheet.current.open()}>
          <MaterialIcons name='add-location-alt' color='#E9ECFF' size={40}/>
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={450}
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
            elevation:20,
            shadowColor:'#000',
            borderColor:'lightgray',
            borderWidth:1
          }

        }}
      >
        <AddressBottomSheet reference={refRBSheet}/>
      </RBSheet>

    </View>
  )
}

export default AddressBook

const styles = StyleSheet.create({
  main:{
    flex:1,
    zIndex:1,
    backgroundColor:'white'
  },
  iconView:{
    width:'15%',
    height:'10.3%',
    alignItems:'center',
    borderRadius:100,
    padding:8,
    backgroundColor:'#605CE2',
    position:'absolute',
    top:'86%',
    left:'80%',
    zIndex:999
  },
  imgStyle:{
    width:250,
    height:250,
  },
  imgView:{
    alignItems:'center',
    justifyContent:'center',
    flex:1
  }
})