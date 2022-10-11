import { Dimensions, View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Modal, TextInput, Alert, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from '../components/BottomSheet';
import FlatButton from '../components/Button';
import StarRating from 'react-native-star-rating-widget';



const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const Product_detail = ({ route }) => {
  const paramData = route.params
  const [imgArr, setImgArr] = useState(["https://kimerahome.b-cdn.net/wp-content/uploads/2022/01/CADBURY-SILK-HEART-BLUSH-150-GM.jpg", "https://cdn.shopify.com/s/files/1/0474/6828/2012/products/FOPBarsPO6_2pcEach.jpg?v=1642502710", "https://cdn0.woolworths.media/content/wowproductimages/large/194423.jpg"])
  const [prdSize, setPrdSize] = useState(['Small', 'Medium', 'Large'])
  const [prdColor, setPrdColor] = useState(['Green', 'Blue', 'Red'])
  const [isFav, setIsFav] = useState(false)
  const [price, setPrice] = useState(0)
  const [prdName, setPrdName] = useState("")
  const refRBSheet = useRef();

  const renderSize = ({ item }) => (
    <View style={Style.sizeItem}>
      <Text style={Style.itemText}>{item}</Text>
    </View>
  )

  const renderColor = ({ item }) => (
    <View style={Style.sizeItem}>
      <Text style={Style.itemText}>{item}</Text>
    </View>
  )
  const navigate = useNavigation()

  useEffect(() => {

    setImgArr([paramData.imgs, paramData.imgs])
    setPrice(paramData.price)
    setPrdName(paramData.name)
  }, [paramData])


  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  return (

    <ScrollView scrollEnabled={true}>
      <View style={Style.container} >
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }} >

            <Icon style={Style.backBtn} name='arrow-back-circle' onPress={() => navigate.goBack()} />
            {isFav ? <Icon style={Style.heartBtn} name='heart' onPress={() => setIsFav(!isFav)} /> : <Icon style={Style.heartBtn} name='heart-outline' onPress={() => setIsFav(!isFav)} />}



            <SliderBox
              images={imgArr}
              sliderBoxHeight={SCREEN_HEIGHT / 2}
              ImageComponentStyle={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, width: "100%", borderColor: "#d5d5d5" }}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxStyle={{
                position: "absolute",
                bottom: 0,
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 10,
              }}
              paginationBoxVerticalPadding={20}
              resizeMethod={'resize'}
              resizeMode={'cover'}
            />
          </View>

          <View style={Style.detailsView}>
            <Text style={Style.detailsHeading}>{prdName}</Text>

            {/* ******************************************************************************* */}



            <Modal
              animationType='fade'
              transparent={true}
              visible={modalVisible}

              onRequestClose={() => {
                Alert.alert("Thank you.");
                setModalVisible(!modalVisible);
              }}
              statusBarTranslucent={true}


            >


              <TouchableOpacity onPress={() => setModalVisible(false)} style={Style.modalContainer} activeOpacity={0.9} >
                <View style={Style.centeredView}>
                  <View style={Style.modalView}>
                    <View style={Style.writeAReviewHeading}><Text style={{ fontSize: 25, fontWeight: '500' }} >WRITE A REVIEW</Text></View>
                    <View style={{ marginTop: '5%' }}>

                      <StarRating
                        rating={rating}
                        onChange={setRating}
                        enableHalfStar={false}
                        starSize={46}
                      />

                    </View>


                    <TextInput
                      style={Style.input}
                      placeholder={'Write a review'}
                      // underlineColorAndroid='transparent'
                      // underlineColorAndroid='bla'
                      numberOfLines={2}


                    />

                    <TouchableOpacity style={{ width: '60%', alignItems: 'center' }} onPress={() => setModalVisible(!modalVisible)}>
                      <View style={{ width: '100%', alignItems: 'center', backgroundColor: 'black', marginTop: '30%' }}>
                        <Text style={{ fontSize: 20, textAlign: 'center', color: "#fff", fontWeight: '300', padding: 8 }}>Post</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>


            </Modal>


            {/* ******************************************************************************* */}


            <View style={Style.priceAndRating}>

              <Text style={Style.detailsPrice}>${price}</Text>



              <View >
                <StarRating
                  rating={rating}
                  onChange={setRating}
                  enableHalfStar={false}
                  starSize={29}

                />
              </View>

              <View><TouchableOpacity style={Style.button}
                onPress={() => setModalVisible(true)}><Text style={{ fontSize: 12 }}>WRITE A REVIEW</Text></TouchableOpacity></View>
            </View>

            <Text style={Style.detailSizeHeading}>Sizes:</Text>
            <FlatList
              horizontal={true}
              data={prdSize}
              renderItem={renderSize}
              style={{ marginTop: -50 }}
              contentContainerStyle={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}
            />

            <Text style={Style.detailColorHeading}>Color:</Text>
            <FlatList
              horizontal={true}
              data={prdColor}
              style={{ marginTop: -25, height: 0 }}
              renderItem={renderColor}
              contentContainerStyle={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}
            />

            <FlatButton text='Select Quantity' onPress={() => refRBSheet.current.open()} />

          </View>


          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            height={250}
            openDuration={600}
            closeDuration={600}
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
            <BottomSheet reference={refRBSheet} prodData={paramData} />
          </RBSheet>
        </View>

      </View>
    </ScrollView>
  );
}

const Style = StyleSheet.create({

  detailsView: {

    height: 400,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 5,
    shadowColor: "rgb(90,90,90)",
    marginTop: 5,
    width: "100%",
    alignSelf: "center",

  },
  priceAndRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: '3%',
    marginVertical: '-3%',
    // paddingBottom: '-9%',
    // borderWidth: 1,
    // borderColor: 'green',
  },
  detailsHeading: {
    fontSize: 25,
    paddingTop: 20,
    paddingHorizontal: 20,
    color: 'black',
    fontWeight: '900'
  },
  detailsPrice: {
    // borderWidth: 1,
    color: "#746BF3",
    fontSize: 27,
    // paddingTop: 10,
    paddingLeft: 10,
    fontWeight: "900"
  },
  detailSizeHeading: {
    fontSize: 22,
    paddingTop: 8,
    paddingLeft: 20,
    color: 'black',
    fontWeight: '700',
    marginTop: 8
  },
  detailColorHeading: {
    fontSize: 22,
    paddingTop: 8,
    paddingLeft: 20,
    color: 'black',
    fontWeight: '700',
    marginTop: -50
  },


  sizeItem: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: 'center',
    padding: 8,
    borderRadius: 30,
    marginLeft: 20,
    width: 100
  },
  itemText: {
    color: 'black',
    fontSize: 17,
  },
  backBtn: {
    fontSize: 35,
    color: 'black',
    position: 'absolute',
    zIndex: 999,
    top: 6,
    left: 15,
  },
  heartBtn: {
    fontSize: 30,
    color: 'red',
    position: 'absolute',
    zIndex: 999,
    top: 6,
    right: 15,
  },

  Line: {
    width: 75,
    height: 5,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 20,
  },

  centeredView: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {

    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '75%',
    height: '50%'
  },
  button: {
    borderRadius: 5,
    padding: 10,
    // elevation: 2,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'transparent',

  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

  },

  writeAReviewHeading: {
    // borderWidth:2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  input: {
    height: '20%',
    width: '100%',
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    marginTop: '15%',
    fontSize: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: "rgba(0,0,0,0.7)",

  },


})


export default Product_detail;
