import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

const Popuplar_slider = () => {
  return (
    <View style={Styles.main}>
      <View style={Styles.middle2}>
        <View style={Styles.middle2_1}>
          <Text style={Styles.middle2_1_text1}>Popular Items</Text>
        </View>
        <TouchableOpacity style={Styles.middle2_2} activeOpacity={0.6}>
          <Text style={Styles.middle2_text1}>See All</Text>
          <Feather name="arrow-right" style={Styles.middle2_2_icon} />
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{width: '100%', flexDirection: 'row',}}>
          <TouchableOpacity>
            <View style={Styles.ProdCard}>
              <View style={Styles.imgContainer}>
                <Image
                  style={Styles.cardImg}
                  source={{
                    uri: 'https://kimerahome.b-cdn.net/wp-content/uploads/2022/01/CADBURY-SILK-HEART-BLUSH-150-GM.jpg',
                  }}></Image>
              </View>
              <View style={Styles.cardDesc}>
                <Text style={Styles.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Styles.cardPrice}>RS. 500</Text>
                <View style={Styles.cardBotm}>
                  <Icon style={Styles.favIcon} name="md-heart-outline" />
                  <Text style={Styles.rating}>
                    4.5{' '}
                    <Icon style={Styles.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.ProdCard}>
              <View style={Styles.imgContainer}>
                <Image
                  style={Styles.cardImg}
                  source={{
                    uri: 'https://images.officeworks.com.au/api/2/img///s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/TD1107346_.jpg/resize?size=600&auth=MjA5OTcwODkwMg__',
                  }}></Image>
              </View>
              <View style={Styles.cardDesc}>
                <Text style={Styles.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Styles.cardPrice}>RS. 500</Text>
                <View style={Styles.cardBotm}>
                  <Icon style={Styles.favIcon} name="md-heart-outline" />
                  <Text style={Styles.rating}>
                    4.5{' '}
                    <Icon style={Styles.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.ProdCard}>
              <View style={Styles.imgContainer}>
                <Image
                  style={Styles.cardImg}
                  source={{
                    uri: 'https://cdn0.woolworths.media/content/wowproductimages/large/194423.jpg',
                  }}></Image>
              </View>
              <View style={Styles.cardDesc}>
                <Text style={Styles.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Styles.cardPrice}>RS. 500</Text>
                <View style={Styles.cardBotm}>
                  <Icon style={Styles.favIcon} name="md-heart-outline" />
                  <Text style={Styles.rating}>
                    4.5{' '}
                    <Icon style={Styles.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.ProdCard}>
              <View style={Styles.imgContainer}>
                <Image
                  style={Styles.cardImg}
                  source={{
                    uri: 'https://www.thestockport.com/pub/media/catalog/product/cache/b35bf2d1a59577a83aeb3ac52e6f69c5/7/1/718lyyrmfil._sl1000_.jpg',
                  }}></Image>
              </View>
              <View style={Styles.cardDesc}>
                <Text style={Styles.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Styles.cardPrice}>RS. 500</Text>
                <View style={Styles.cardBotm}>
                  <Icon style={Styles.favIcon} name="md-heart-outline" />
                  <Text style={Styles.rating}>
                    4.5{' '}
                    <Icon style={Styles.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.ProdCard}>
              <View style={Styles.imgContainer}>
                <Image
                  style={Styles.cardImg}
                  source={{
                    uri: 'https://cdn.shopify.com/s/files/1/0474/6828/2012/products/FOPBarsPO6_2pcEach.jpg?v=1642502710',
                  }}></Image>
              </View>
              <View style={Styles.cardDesc}>
                <Text style={Styles.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Styles.cardPrice}>RS. 500</Text>
                <View style={Styles.cardBotm}>
                  <Icon style={Styles.favIcon} name="md-heart-outline" />
                  <Text style={Styles.rating}>
                    4.5{' '}
                    <Icon style={Styles.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.ProdCard}>
              <View style={Styles.imgContainer}>
                <Image
                  style={Styles.cardImg}
                  source={{
                    uri: 'https://cdnprod.mafretailproxy.com/sys-master-root/h41/he0/26563681288222/1850544_main.jpg_480Wx480H',
                  }}></Image>
              </View>
              <View style={Styles.cardDesc}>
                <Text style={Styles.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Styles.cardPrice}>RS. 500</Text>
                <View style={Styles.cardBotm}>
                  <Icon style={Styles.favIcon} name="md-heart-outline" />
                  <Text style={Styles.rating}>
                    4.5{' '}
                    <Icon style={Styles.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.ProdCard}>
              <View style={Styles.imgContainer}>
                <Image
                  style={Styles.cardImg}
                  source={{
                    uri: 'https://cdn.shopify.com/s/files/1/0074/0429/0111/products/Galaxy_Smooth_Milk_Chocolate_Bar_42g_1000x1000.jpg?v=1581378177',
                  }}></Image>
              </View>
              <View style={Styles.cardDesc}>
                <Text style={Styles.cardTitle}>
                  AirPods Pro Light Blue Exquisite Design
                </Text>
                <Text style={Styles.cardPrice}>RS. 500</Text>
                <View style={Styles.cardBotm}>
                  <Icon style={Styles.favIcon} name="md-heart-outline" />
                  <Text style={Styles.rating}>
                    4.5{' '}
                    <Icon style={Styles.ratingIcon} name="md-star-half-sharp" />
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor:"#e8e7e6"
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
    marginRight:10,
    color:"gray"
  },
  cardDesc: {
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
    color:"black"
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

export default Popuplar_slider;
