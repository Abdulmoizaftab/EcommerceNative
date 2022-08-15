import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SkeletonJs from '../Skeleton'
import SearchBar from '../SearchBar';
import Carousel from '../carousel/carousel';
import { dummyData } from '../../data/Carousel_data'
import Popuplar_slider from './popuplar_slider';
import Categories from '../Categories';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home_inside = ({ navigate }) => {

  const [products, setProducts] = useState([]);
  const [limit, setlimit] = useState(6);
  const [isLoading, setIsloading] = useState(true);
  const [IsRefreshing, setIsRefreshing] = useState(false);


  const getdata = async () => {
    setIsloading(true)
    await fetch(`http://192.168.1.15:5000/sql/all/${limit}`)
      .then((response) => response.json())
      .then((json) => { setProducts(json) })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getdata()
  }, [limit]);

  const flatlistEnd = () => {
    return (
      isLoading ?
        <View>
          <SkeletonJs />
        </View> : null
    );
  }

<<<<<<< HEAD
  const renderItem=(element)=>{
    
      return  (<View style={Style.all_item_main2}>
                 <TouchableOpacity style={Style.all_item_main3} onPress={() => navigate.navigate('Product_detail',element.item)} >
                   <View style={Style.all_item_main4} >
                     <Image style={Style.all_item_main4_img}
                       resizeMode="cover"
                       source={{ uri: element.item.imgs }}
                    />
                  </View>
                  <View>
                    <Text style={Style.cardTitle}>
                      {element.item.name.split(/\s+/).slice(0, 4).join(" ")+"..."}
                    </Text>
                    <View style={Style.cardBotm}>
                    <Text
                      style={Style.cardPrice}>
                      RS. {element.item.price}
                    </Text>
                      <Text style={Style.rating}>
                        4.5{' '}
                        <Icon style={Style.ratingIcon} name="md-star-half-sharp" />
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>)
=======
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
>>>>>>> branch-umair
  }

  const removeSpecificProduct = async (productData) => {
    try {
      let asyncData = await AsyncStorage.getItem('@cartItems');
      asyncData = JSON.parse(asyncData);
      if (asyncData) {
        let cartItem = asyncData;
        const removedData = cartItem.filter(object => object.product_id != productData.product_id)
        console.log("🚀 ~ file: Home_inside.js ~ line 71 ~ removeSpecificProduct ~ removedData", removedData)
        await AsyncStorage.removeItem('@cartItems')
        await AsyncStorage.setItem('@cartItems', JSON.stringify(removedData));
      }
    } catch (error) {
      alert('Something went wrong');
    }
  }


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cartItems')
      console.log("🚀 ~ file: Home_inside.js ~ line 167 ~ getData ~ jsonValue", jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      alert('Something went wrong');
    }
  }




  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@cartItems')
    } catch (e) {
      // remove error
    }
    console.log('Done.')
  }


  const renderItem = (element) => {

    const USER_1 = {
      name: 'Tom',
      age: 20,
      traits: {
        hair: 'black',
        eyes: 'blue'
      }
    }

    const USER_2 = {
      name: 'Sarah',
      age: 21,
      hobby: 'cars',
      traits: {
        eyes: 'green',
      }
    }

    const productDetail = {
      product_id: element.item.product_id,
      name: element.item.name,
      price: element.item.price,
      image: element.item.imgs
    }

    return (
      <View style={Style.all_item_main2}>
        <View style={Style.all_item_main3}>
          <TouchableOpacity style={Style.all_item_main4} onPress={() => navigate.navigate('Product_detail')}>
            <Image style={Style.all_item_main4_img}
              resizeMode="cover"
              source={{ uri: element.item.imgs }}
            />
          </TouchableOpacity>
          <View>
            <Text style={Style.cardTitle}>
              {element.item.name.split(/\s+/).slice(0, 4).join(" ") + "..."}
            </Text>
            <View style={Style.cardBotm}>
              <Text
                style={Style.cardPrice}>
                RS. {element.item.price}
              </Text>
              <Text style={Style.rating}>
                4.5{' '}
                <Icon style={Style.ratingIcon} name="md-star-half-sharp" />
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => addToCart(productDetail)} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
            <FontAwesome name="heart-o" style={Style.middle2_2_icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={getData} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
            <FontAwesome name="get-pocket" style={Style.middle2_2_icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={removeValue} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
            <Feather name="delete" style={Style.middle2_2_icon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => removeSpecificProduct(productDetail)} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
            <Feather name="home" style={Style.middle2_2_icon} />
          </TouchableOpacity>

          {/*<TouchableOpacity onPress={() => storeMergeData(product)} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
          <Feather name="flower" style={Style.middle2_2_icon} />
        </TouchableOpacity> */}

        </View>
      </View>
    )
  }
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

  return (
    <View style={Style.all_item_main}>
      <FlatList
      ListHeaderComponent={
        <View style={{flex:1,width:"100%"}}>
          <SearchBar navigate={navigate} />
        <Carousel data={dummyData} />
        <Categories navigate={navigate}/>
        <Popuplar_slider navigate={navigate}/>
        <View style={Style.middle2}>
        <View style={Style.middle2_1}>
          <Text style={Style.middle2_1_text1}>All Items</Text>
        </View>
        <TouchableOpacity style={Style.middle2_2} activeOpacity={0.6}>
          <Text style={Style.middle2_text1}>See All</Text>
          <Feather name="arrow-right" style={Style.middle2_2_icon} />
        </TouchableOpacity>
        </View>
        </View>
      }
        data={products} renderItem={renderItem} keyExtractor={item => item.product_id} numColumns={2}  
      ListFooterComponent={flatlistEnd}
      onEndReached={onEndReached} onEndReachedThreshold={0.5} refreshing={IsRefreshing} onRefresh={onRefresh}/>
  </View>
  );
};

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
    justifyContent: "center"
  },
  all_item_main3: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3.5,
    shadowColor: '#52006A',
  },
  all_item_main4: {
    borderBottomWidth: 1,
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
    fontSize: 13
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
    alignItems: "center"
  }
});

export default Home_inside;
