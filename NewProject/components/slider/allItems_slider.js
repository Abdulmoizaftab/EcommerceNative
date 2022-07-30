import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import SkeletonJs from '../Skeleton'

const AllItems_slider = ({ navigate }) => {

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    await fetch('http://192.168.1.22:5000/sql/all')
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error))
    //.finally(() => setLoading(false));
  }, []);

  return (
    <View style={Style.main}>
      <View style={Style.middle2}>
        <View style={Style.middle2_1}>
          <Text style={Style.middle2_1_text1}>All Items</Text>
        </View>
        <TouchableOpacity style={Style.middle2_2} activeOpacity={0.6}>
          <Text style={Style.middle2_text1}>See All</Text>
          <Feather name="arrow-right" style={Style.middle2_2_icon} />
        </TouchableOpacity>
      </View>
      <View style={Style.all_item_main}>
      {products.length>0?
      <FlatList data={products} renderItem={(element)=>{
        return  <View style={Style.all_item_main2}>
                   <View style={Style.all_item_main3}>
                     <TouchableOpacity style={Style.all_item_main4} onPress={() => navigate.navigate('Product_detail')}>
                       <Image style={Style.all_item_main4_img}
                         resizeMode="cover"
                         source={{ uri: element.item.imgs }}
                      />
                    </TouchableOpacity>
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
                  </View>
                </View>
          
        
      }} keyExtractor={item => item.product_id} numColumns={2}/>
      :<SkeletonJs/>}
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: '#e8e7e6',
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
    fontSize: 15,
    marginRight: 10,
    color: "gray"
  },
  all_item_main: {
    width: '100%',
    height: '85%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    marginTop: -5
  },
  all_item_main2: {
    width: '50%',
    padding: 5
  },
  all_item_main3: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3.5,
    shadowColor: '#52006A',
  },
  all_item_main4: {
    // borderBottomWidth: 1,
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

export default AllItems_slider;
