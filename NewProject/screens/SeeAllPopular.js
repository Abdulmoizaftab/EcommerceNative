import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState,useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SkeletonJs from '../components/Skeleton'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeBaseProvider } from 'native-base';
import SearchBar from '../components/SearchBar';
import RBSheet from "react-native-raw-bottom-sheet";
import SortBottomSheet from '../components/SortBottomSheet';




const SeeAllPopular = () => {
  const navigate = useNavigation()

  const [products, setProducts] = useState([]);
  const [limit, setlimit] = useState(20);
  const [isLoading, setIsloading] = useState(true);
  const [IsRefreshing, setIsRefreshing] = useState(false);
  const [filterPriceAsc, setFilterPriceAsc] = useState(false);
  const [filterPriceDesc, setFilterPriceDesc] = useState(false);
  const [filterRatingAsc, setFilterRatingAsc] = useState(false);
  const [filterRatingDesc, setFilterRatingDesc] = useState(false);
  const refRBSheet = useRef();




  const getdata = async () => {
    setIsloading(true)
    await fetch(`http://192.168.1.14:5000/sql/popular/${limit}`)
      .then((response) => response.json())
      .then((json) => { setProducts(json) })
      .catch((error) => console.error(error))

  }

  const handleFilterPrice = async (asc_desc)=>{
    setIsloading(true)
    setIsRefreshing(true)
    await fetch(`http://192.168.1.14:5000/sql/filterPopularByPrice/${asc_desc}/${limit}`)
    .then((response) => response.json())
    .then((json) => { setProducts(json) })
    .catch((error) => console.error(error))
    
    if (asc_desc==='asc') {
      setFilterPriceAsc(true) 
      setFilterPriceDesc(false)
      setFilterRatingAsc(false)
      setFilterRatingDesc(false)
    } else {
      setFilterPriceDesc(true)
      setFilterPriceAsc(false)
      setFilterRatingAsc(false)
      setFilterRatingDesc(false)
    }    
    setIsRefreshing(false)
  }
  
  const handleFilterRating = async (asc_desc)=>{
    setIsloading(true)
    setIsRefreshing(true)
    await fetch(`http://192.168.1.14:5000/sql/filterPopularByRating/${asc_desc}/${limit}`)
    .then((response) => response.json())
    .then((json) => { setProducts(json) })
    .catch((error) => console.error(error))
    
    if (asc_desc==='asc') {
      setFilterRatingAsc(true)  
      setFilterRatingDesc(false)
      setFilterPriceAsc(false)
      setFilterPriceDesc(false)
    } else {
      setFilterRatingDesc(true)
      setFilterRatingAsc(false)
      setFilterPriceAsc(false)
      setFilterPriceDesc(false)
    }    
    setIsRefreshing(false)
  }

  useEffect(() => {
    if (filterPriceAsc) {
      handleFilterPrice('asc');
    }else if(filterPriceDesc){
      handleFilterPrice('desc');
    }else if(filterRatingAsc){
      handleFilterRating('asc');
    }else if(filterRatingDesc){
      handleFilterRating('desc');
    }else {
      getdata()
    }
  }, [limit]);

  const onEndReached = () => {
    setlimit(limit + 4);
    setIsloading(false)
  }

  const onRefresh = () => {
    setIsRefreshing(true);
    setProducts([]);
    setlimit(6);
    setIsRefreshing(false)
  }

  const flatlistEnd = () => {
    return (
      isLoading ?
        <NativeBaseProvider>
          <View>
            <SkeletonJs />
          </View>
        </NativeBaseProvider> : null
    );
  }

  const addToCart = async (productData) => {
    try {
      let asyncData = await AsyncStorage.getItem('@cartItems');
      asyncData = JSON.parse(asyncData);
      if (asyncData) {
        let cartItem = asyncData;
        cartItem.push(productData);
        await AsyncStorage.setItem('@cartItems', JSON.stringify(cartItem));
      }
      else {
        let cartItem = [];
        cartItem.push(productData);
        await AsyncStorage.setItem('@cartItems', JSON.stringify(cartItem));
      }
    } catch (error) {
      alert('Something went wrong');
    }
  }

  const renderItem = (element) => {

    return (
      <View style={Style.all_item_main2}>
        <View style={Style.all_item_main3}>
          <TouchableOpacity style={Style.all_item_main4} onPress={() => navigate.navigate('Product_detail', element.item)}>
            <Image style={Style.all_item_main4_img}
              resizeMode="cover"
              source={{ uri: element.item.imgs }}
            />
            <View style={{alignSelf:'flex-start'}}>
              <Text style={Style.cardTitle}>
                {element.item.name.split(/\s+/).slice(0, 4).join(" ") + "..."}
              </Text>
            </View>
              {
                element.item.rating === null ? (
                  <View style={Style.cardBotm}>
                    <Text
                      style={Style.cardPrice}>
                      RS. {element.item.price}
                    </Text>
                    <Text style={[Style.rating, { color: 'gray' }]}>
                      N/A{' '}
                      <Icon style={[Style.ratingIcon, { color: 'gray' }]} name="md-star-half-sharp" />
                    </Text>
                  </View>

                ) : (
                    <View style={Style.cardBotm}>
                      <Text
                        style={Style.cardPrice}>
                        RS. {element.item.price}
                      </Text>
                      <Text style={Style.rating}>
                        {element.item.rating + ' '}
                        <Icon style={Style.ratingIcon} name="md-star-half-sharp" />
                      </Text>
                    </View>
                )
              }
            {/* </View> */}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => addToCart(productDetail)} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
            <FontAwesome name="heart-o" style={Style.middle2_2_icon} />
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={getData} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
            <FontAwesome name="get-pocket" style={Style.middle2_2_icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={removeValue} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
            <Feather name="delete" style={Style.middle2_2_icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => removeSpecificProduct(productDetail)} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
            <Feather name="home" style={Style.middle2_2_icon} />
          </TouchableOpacity> */}

          {/*<TouchableOpacity onPress={() => storeMergeData(product)} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
          <Feather name="flower" style={Style.middle2_2_icon} />
        </TouchableOpacity> */}

        </View>
      </View>
    )
  }

  return (
    <View style={Style.all_item_main}>
      <FlatList
        ListHeaderComponent={
          <View>
            <SearchBar navigate={navigate} />
            <View style={Style.headView}>
              <Text style={Style.mainHead}>Popular Items</Text>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <AntDesign name='filter' color="#484848" size={26} />
              </TouchableOpacity>
            </View>


            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              height={220}
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
                  borderWidth:1,
                  borderColor:'#bbb',
                  elevation:20,
                  padding:5,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.27,
                  shadowRadius: 4.65,                  
                }

              }}
            >
              <SortBottomSheet
                reference={refRBSheet}
                props={
                  {
                    handleFilterPrice,
                    handleFilterRating,
                    filterPriceAsc,
                    filterPriceDesc,
                    filterRatingAsc,
                    filterRatingDesc,
                    setFilterPriceAsc,
                    setFilterPriceDesc,
                    setFilterRatingAsc,
                    setFilterRatingDesc,
                    getdata,
                    setIsloading
                  }
                } />
            </RBSheet>
          </View>
        }
        data={products} renderItem={renderItem} keyExtractor={item => item.product_id} numColumns={2}
        ListFooterComponent={flatlistEnd}
        onEndReached={onEndReached} onEndReachedThreshold={0.5} refreshing={IsRefreshing} onRefresh={onRefresh} />
    </View>
  )
}

export default SeeAllPopular

const Style = StyleSheet.create({
  middle2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,

  },
  middle2_1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middle2_1_text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B1621',
  },
  middle2_1_text2: {
    fontSize: 14,
    fontWeight: '200',
    color: 'black',
    opacity: 0.3,
    marginLeft: 10,
  },
  middle2_text1: {
    color: 'gray',
    marginRight: 1,
    letterSpacing: 1,
  },
  middle2_2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
  },
  middle2_2_icon: {
    fontSize: 15,
    marginRight: 10,
    color: "#C92252"
  },
  all_item_main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#e8e7e6",
  },
  all_item_main2: {
    width: '50%',
    padding: 4,
    justifyContent: "center",
  },
  all_item_main3: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3.5,
    shadowColor: '#52006A',
  },
  all_item_main4: {
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: "#ACACAC",
    paddingBottom: 8,
  },
  all_item_main4_img: {
    width: '80%',
    height: 120
  },
  cardTitle: {
    margin: 2,
    color: 'black',
    fontSize: 13,
    marginLeft:'2%'
  },
  cardPrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#8480C3',
  },
  ratingIcon: {
    color: '#FFCC4C',
    fontSize: 13,
  },
  rating: {
    color: '#E3A500',
    fontSize: 12,
  },
  cardBotm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: "5%",
    paddingLeft: "2%",
    alignItems: "center",
    alignSelf:'center',
    width:'90%',
  },
  mainHead: {
    fontSize: 25,
    fontWeight: '900',
    color: '#484848'
  },
  headView:{
    flexDirection:'row',
    marginVertical: '3%',
    paddingHorizontal: '5%',
    justifyContent:'space-between',
    alignItems:'center'
  }
});