import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SkeletonJs from '../components/Skeleton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeBaseProvider} from 'native-base';
import SearchBar from '../components/SearchBar';

const AllDiscountedProducts = () => {
  const navigate = useNavigation();
  const [isAdded, setIsAdded] = useState(false);

  const [asynData, setAsynData] = useState([]);
  console.log("🚀 ~ file: AllDiscountedProducts.js ~ line 24 ~ AllDiscountedProducts ~ asynData", asynData)
  const [FavProducts, setFavProducts] = useState([]);

  const [products, setProducts] = useState([]);
  // console.log("🚀 ~ file: AllDiscountedProducts.js ~ line 16 ~ AllDiscountedProducts ~ products", products)
  const [limit, setlimit] = useState(20);
  const [isLoading, setIsloading] = useState(true);
  const [IsRefreshing, setIsRefreshing] = useState(false);

  const getDisdata = async () => {

    setIsloading(true);
    await fetch(`http://192.168.1.17:5000/sql/allDiscountProducts/${limit}`)
      .then(response => response.json())
      .then(json => {
        setProducts(json);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getDisdata();
  }, [limit]);



  const onEndReached = () => {
    setlimit(limit + 4);
    setIsloading(false);
  };


  const onRefresh = () => {
    setIsRefreshing(true);
    setProducts([]);
    setlimit(6);
    setIsRefreshing(false);
  };


  const flatlistEnd = () => {
    return isLoading ? (
      <NativeBaseProvider>
        <View>
          <SkeletonJs />
        </View>
      </NativeBaseProvider>
    ) : null;
  };




  

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cartItems');
      const result = JSON.parse(jsonValue);
      setAsynData(result);

      // return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      alert('Something went wrong[[[[[[[[[[[[[[[');
    }
  };

  useEffect(() => {
    getData();
  }, []);




  const addToCart = async productData => {
    try {
      let asyncData = await AsyncStorage.getItem('@cartItems');
      asyncData = JSON.parse(asyncData);
      if (asyncData) {
        let cartItem = asyncData;
        cartItem.push(productData);
        await AsyncStorage.setItem('@cartItems', JSON.stringify(cartItem));
      } else {
        let cartItem = [];
        cartItem.push(productData);
        await AsyncStorage.setItem('@cartItems', JSON.stringify(cartItem));
      }
    } catch (error) {
      alert('Something went wrongXXXXXXXXXXXX');
    }
  };

  const removeSpecificProduct = async productData => {
    try {
      let asyncData = await AsyncStorage.getItem('@cartItems');
      asyncData = JSON.parse(asyncData);
      if (asyncData) {
        let cartItem = asyncData;
        const removedData = cartItem.filter(
          object => object.product_id != productData.product_id,
        );
        const removeData = FavProducts.filter(
          object => object.product_id != productData.product_id,
        );
        setFavProducts(removeData);
        await AsyncStorage.removeItem('@cartItems');
        await AsyncStorage.setItem('@cartItems', JSON.stringify(removedData));
      }
    } catch (error) {
      alert('Something went wrong=========>');
    }
  };

  const addToFav = async productDetail => {
    try {
      addToCart(productDetail);
      // setIsAdded(!isAdded);
      alert('added to fav');//======================
      // getData();
      // getDisdata();
    } catch (error) {
      alert(error);
      // alert('add to fav failed');
    }
  };

  const removeFav = async productDetail => {
    try {
      removeSpecificProduct(productDetail);
      // setIsAdded(!isAdded);
      alert('remove from Fav');//======================
      // getData();
      // getDisdata();
    } catch (error) {
      alert(error);
      // alert('add to fav failed');
    }
  };

  const renderItem = element => {

    


    const productDetail = {
      product_id: element.item.product_id,
      name: element.item.name,
      price: element.item.price,
      image: element.item.imgs,
    };

    const isFavourate = id =>
      Boolean(asynData.find(item => item.product_id === id));

    return (
      <View style={Style.all_item_main2}>
        <View style={Style.all_item_main3}>
          <TouchableOpacity
            style={Style.all_item_main4}
            onPress={() => navigate.navigate('Product_detail', element.item)}>
            <View>
              <Text style={Style.discount}>
                {element.item.discount_percent}%
              </Text>
            </View>

            {/* {isFavourate(element.item.product_id) ? (
              <MaterialCommunityIcons
                name="cards-heart"
                onPress={() => {removeFav(productDetail);}}
                style={Style.middle2_2_icon}
              />
            ) : (
              <MaterialCommunityIcons
                name="cards-heart-outline"
                onPress={() => {addToFav(productDetail);}}
                style={Style.middle2_2_icon}
              />
            )} */}

            {isFavourate(element.item.product_id) ? (
              <MaterialCommunityIcons
                name="cards-heart"
                onPress={() => {removeFav(productDetail);}}
                style={Style.middle2_2_icon}
              />
            ) : (
              <MaterialCommunityIcons
                name="cards-heart-outline"
                onPress={() => {addToFav(productDetail);}}
                style={Style.middle2_2_icon}
              />
            )}

            <Image
              style={Style.all_item_main4_img}
              resizeMode="cover"
              source={{uri: element.item.imgs}}
            />
            <View>
              <Text style={Style.cardTitle}>
                {element.item.name.split(/\s+/).slice(0, 4).join(' ') + '...'}
              </Text>
              <View style={Style.cardBotm}>
                <Text style={Style.cardPrice}>RS. {element.item.price}</Text>

                {/* add product to fav          */}
                {/* {
                  isAdded?
                  <MaterialCommunityIcons name="cards-heart"   onPress={() => removeFav(productDetail)} style={Style.middle2_2_icon} />
                  :
                  <MaterialCommunityIcons name="cards-heart-outline" onPress={() => addToFav(productDetail)} style={Style.middle2_2_icon} />
                } */}
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => addToCart(productDetail)}
            style={Style.fav_icon_box}>
            <Text style={Style.rating}>
              4.5 <Icon style={Style.ratingIcon} name="md-star-half-sharp" />
            </Text>
            {/* <MaterialCommunityIcons name="cards-heart-outline" style={Style.middle2_2_icon} /> */}
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
    );
  };

  return (
    <View style={Style.all_item_main}>
      <FlatList
        ListHeaderComponent={
          <View>
            <SearchBar navigate={navigate} />
            <Text style={Style.mainHead}>All Discounts</Text>
          </View>
        }
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.product_id}
        numColumns={2}
        ListFooterComponent={flatlistEnd}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        refreshing={IsRefreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default AllDiscountedProducts;

const Style = StyleSheet.create({
  fav_icon_box: {
    // backgroundColor:'pink',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  discount: {
    padding: 2,
    marginLeft: -5,
    marginTop: -5,
    textAlign: 'center',
    backgroundColor: 'red',
    color: '#fff',
    position: 'relative',
    left: 5,
    top: 5,
    zIndex: 5,
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 15,
    width: 50,
  },
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
    // backgroundColor:'pink',
    position: 'relative',
    left: '81%',
    top: '-10%',
    zIndex: 6,
    margin: 2,
    fontSize: 28,
    marginRight: 10,
    color: '#5A56E9',
    fontWeight: 'bold',
  },
  all_item_main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e8e7e6',
  },
  all_item_main2: {
    width: '50%',
    padding: 4,
    justifyContent: 'center',
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
    // justifyContent: 'center',
    // alignItems: 'center',
    borderBottomColor: '#ACACAC',
    paddingBottom: 8,
    //backgroundColor:'green'
  },
  all_item_main4_img: {
    width: '90%',
    height: 120,
    marginLeft: 10,
  },
  cardTitle: {
    margin: 1,
    color: 'black',
    fontSize: 15,
  },
  cardPrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5A56E9',
  },
  ratingIcon: {
    color: '#FFCC4C',
    fontSize: 15,
  },
  rating: {
    color: '#E3A500',
    fontSize: 15,
  },
  cardBotm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '2%',
    paddingLeft: '1%',
    alignItems: 'center',
  },
  mainHead: {
    fontSize: 25,
    fontWeight: '900',
    marginVertical: '3%',
    marginHorizontal: '2%',
    color: '#484848',
  },
});
