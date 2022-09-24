import { StyleSheet, Text, View,Button, TouchableOpacity,Image, ScrollView , ActivityIndicator } from 'react-native'
import React,{useRef,useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from "react-native-raw-bottom-sheet";
import AddressBottomSheet from '../components/AddressBottomSheet';
import addressImg from '../image/address1.png'
import { useDispatch,useSelector } from 'react-redux';
import { deleteAddress } from '../redux/AddressRedux'
import { NativeBaseProvider, Radio } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddressUpdateBottomSheet from '../components/AddressUpdateBottomSheet';



const AddressBook = () => {
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const address = useSelector(state => state.address)
    const refRBSheet = useRef();
    const refUpdateRBSheet = useRef();
    const [modifyKey,setModifyKey] = useState();
    const [selectedValue,setSelectedValue] = useState(address.addresses[0]);


    const modifyAddress = (id) =>{
      setModifyKey(id)
      refUpdateRBSheet.current.open()
    }

    // const onSheetOpen = () =>{
    //   const toModify = useSelector(state => state.address)
    //   const modifyingAddress = address.addresses[modifyKey]
    //   console.log(modifyingAddress);
    // }

  // useEffect(() => {
  //   console.log(address)
  // }, [address])
  
  

  return (
    <>
    <View style={styles.main}>

      {
        address.addresses.length !== 0 ? (
          <NativeBaseProvider>
          <Radio.Group
            name="addressRadioGroup"
            value={selectedValue}
            onChange={(nextValue) => {
              setSelectedValue(nextValue);
              console.log(selectedValue);
            }}>
          <ScrollView>
            {address.addresses.map((element, index) => (
              <Radio style={{width:"93%" , alignSelf:'center'}} value={element} my="10">
                <View key={index} style={styles.elevate}>
                  <View style={styles.addressCard}>
                    <View style={styles.addressDetails}>
                      <Text style={{color:'#5A56E9', fontSize:22,fontWeight:'bold',marginVertical:'1%'}}>{element.title}</Text>
                      <Text style={{marginVertical:'0.5%', fontWeight:'500'}}>{element.address}</Text>
                      <Text style={{marginVertical:'0.5%', fontWeight:'500'}}>Recipent: {element.recipent}</Text>
                      <Text style={{marginVertical:'0.5%', fontWeight:'500'}}>{element.phone}</Text>
                      {/* <TouchableOpacity>
                        <Text style={{marginVertical:'1%', fontWeight:'500',color:'#5A56E9' , fontSize}}>Edit</Text>
                      </TouchableOpacity> */}
                  </View>

                  <View style={styles.addressDelete}>
                    <TouchableOpacity onPress={() => dispatch(deleteAddress(element.id))}>
                      <AntDesign name="delete" size={30} color='#5A56E9' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>modifyAddress(element.id)}>
                      <AntDesign name="edit" size={30} color='#5A56E9' />
                    </TouchableOpacity>
                  </View>
                </View>
                </View>
                </Radio>
            ))}
          </ScrollView>
          </Radio.Group>
          </NativeBaseProvider>
        ) : (
          <View style={styles.imgView}>
            <Image style={styles.imgStyle} source={addressImg}></Image>
            <Text style={{ color: 'gray', fontWeight: '400' }}>Click the icon to add an address</Text>
          </View>
        )
      }
      

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={450}
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
            elevation: 20,
            shadowColor: '#000',
            borderColor: 'lightgray',
            borderWidth: 1
          }
          
        }}
        >
        <AddressBottomSheet reference={refRBSheet} />
      </RBSheet>

      <RBSheet
        ref={refUpdateRBSheet}
        closeOnDragDown={true}
        height={450}
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
            elevation: 20,
            shadowColor: '#000',
            borderColor: 'lightgray',
            borderWidth: 1
          }

        }}
      >
        <AddressUpdateBottomSheet reference={refUpdateRBSheet} modifying_id={modifyKey}/>
      </RBSheet>
    </View>

    {
        address.addresses.length === 0 ? (
          <View style={styles.bottomFlexSingle}>
          <TouchableOpacity style={styles.iconView2} activeOpacity={0.7} onPress={() => refRBSheet.current.open()}>
            <MaterialIcons name='add-location-alt' color='#E9ECFF' size={40} />
          </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.checkBtn}>
              <TouchableOpacity style={styles.iconView2} activeOpacity={0.7} onPress={() => navigate.navigate('CheckoutScreen',selectedValue)}>
                <MaterialCommunityIcons name='check-bold' color='#E9ECFF' size={40} />
              </TouchableOpacity>
            </View>

            <View style={styles.addNewBtn}>
              <TouchableOpacity style={styles.iconView2} activeOpacity={0.7} onPress={() => refRBSheet.current.open()}>
                <MaterialIcons name='add-location-alt' color='#E9ECFF' size={40} />
              </TouchableOpacity>
            </View>
          </>
        )
      }
</>

  )
}

export default AddressBook

const styles = StyleSheet.create({
  main:{
    flex:1,
    zIndex:1,
    backgroundColor:'white',
    paddingVertical:'2%'
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
  },
  addressCard:{
    padding:'3%',
    flexDirection:'row',
    alignSelf:'center',
    borderRadius:5,
  },
  elevate:{
    borderRadius:0,
    shadowColor: "#888",
    width:'95%',
    alignSelf:'center',
    elevation: 4,
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    marginVertical:'2%'
  },
  addressDetails:{
    paddingHorizontal:'2%',
    flex:3
  },
  addressDelete:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    flex:1,
    marginHorizontal:'2%'
  },
  selectBtn:{
    width:'37%',
    backgroundColor:'#605CE2',
    borderRadius:10,
    paddingVertical:"1.5%",
    marginVertical:'9.5%',
    alignSelf:'center',
    zIndex:999,
    alignItems:'center',
    paddingHorizontal:'2%'
  },
  iconView2:{
    alignItems:'center',
    borderRadius:100,
    padding:8,
    backgroundColor:'#605CE2',
    zIndex:999,
    
  },
  bottomFlex:{
    // flexDirection:'row',
    // justifyContent:'space-between',
    // alignItems:'center',
    // paddingHorizontal:'5%',
    // paddingVertical:'3%',
    // // backgroundColor:'transparent'
    // backgroundColor: 'rgba(52, 52, 52, 0.0)'
    borderWidth:2,

    zIndex:999
  },
  bottomFlexSingle:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    paddingHorizontal:'5%',
    paddingVertical:'4%',
    backgroundColor:'white'
  },
  checkBtn:{
    position:'absolute',
    bottom:"5%",
    left:'5%',
    zIndex:999   
  },
  addNewBtn:{
    position:'absolute',
    bottom:"5%",
    right:'5%',
    zIndex:999
  }
})