import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

const AllItems_slider = () => {
  return (
    <View style={Style.main}>
      <View style={Style.middle2}>
        <View style={Style.middle2_1}>
          <Text style={Style.middle2_1_text1}>All Items</Text>
        </View>
        <TouchableOpacity style={Style.middle2_2}activeOpacity={0.6}>
          <Text style={Style.middle2_text1}>See All</Text>
          <Feather name="arrow-right" style={Style.middle2_2_icon} />
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', flexDirection: 'row', flexWrap:"wrap"}}>
          <TouchableOpacity>
            <View style={Style.ProdCard}>
              <View style={Style.imgContainer}>
                <Image
                  style={Style.cardImg}
                  source={{
                    uri: 'https://www.jiomart.com/images/product/600x600/491409951/hershey-s-cocoa-spread-with-almond-350-g-product-images-o491409951-p491409951-0-202203170316.jpg',
                  }}></Image>
              </View>
              <View style={Style.cardDesc}>
                <Text style={Style.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Style.cardPrice}>RS. 500</Text>
                <View style={Style.cardBotm}>
                  <Icon style={Style.favIcon} name="md-heart-outline" />
                  <Text style={Style.rating}>
                    4.5{' '}
                    <Icon style={Style.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.ProdCard}>
              <View style={Style.imgContainer}>
                <Image
                  style={Style.cardImg}
                  source={{
                    uri: 'https://ph-test-11.slatic.net/p/9bd9d06ec7e07444d15622ecbbbf82f3.png',
                  }}></Image>
              </View>
              <View style={Style.cardDesc}>
                <Text style={Style.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Style.cardPrice}>RS. 500</Text>
                <View style={Style.cardBotm}>
                  <Icon style={Style.favIcon} name="md-heart-outline" />
                  <Text style={Style.rating}>
                    4.5{' '}
                    <Icon style={Style.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.ProdCard}>
              <View style={Style.imgContainer}>
                <Image
                  style={Style.cardImg}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrtfgDtdOyW4fdL6l-rqe9ao9G-5dbG_-xg&usqp=CAU',
                  }}></Image>
              </View>
              <View style={Style.cardDesc}>
                <Text style={Style.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Style.cardPrice}>RS. 500</Text>
                <View style={Style.cardBotm}>
                  <Icon style={Style.favIcon} name="md-heart-outline" />
                  <Text style={Style.rating}>
                    4.5{' '}
                    <Icon style={Style.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.ProdCard}>
              <View style={Style.imgContainer}>
                <Image
                  style={Style.cardImg}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6CnWlzWFkafC5n0615oVTjrmNJZra6RO-A&usqp=CAU',
                  }}></Image>
              </View>
              <View style={Style.cardDesc}>
                <Text style={Style.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Style.cardPrice}>RS. 500</Text>
                <View style={Style.cardBotm}>
                  <Icon style={Style.favIcon} name="md-heart-outline" />
                  <Text style={Style.rating}>
                    4.5{' '}
                    <Icon style={Style.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const Style= StyleSheet.create({
    main:{
        width:"100%",
        backgroundColor:"#e8e7e6"
    }, middle2: {
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
        marginRight:10
      },cardDesc: {
        paddingHorizontal: 10,
      },
      ProdCard: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderRadius: 8,
        borderRadius: 10,
        elevation: 3.5,
        shadowColor: '#52006A',
        width: 160,
        height: 190,
        marginLeft: 10,
        marginVertical: 5,
      },
      imgContainer: {
        borderBottomWidth: 1,
        borderColor: '#ACACAC',
        width: '90%',
        alignItems: 'center',
      },
      cardImg: {
        width: 100,
        height: 100,
      },
      cardTitle: {
        fontWeight: '500',
        fontSize: 13,
        flexWrap: 'wrap',
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
        fontSize:12
      },
      cardBotm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      favIcon: {
        color: '#FB2F53',
        fontSize: 13,
        fontWeight: '800',
        marginTop: 1.5,
      },
});

export default AllItems_slider;