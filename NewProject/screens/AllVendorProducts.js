import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SkeletonJs from '../components/Skeleton'
import { NativeBaseProvider } from 'native-base';
import SearchBar from '../components/SearchBar';

const AllVendorProducts = ({ route }) => {
    const navigate = useNavigation();
    const [VendorId, setVendorId] = useState([]);
    const [limit, setlimit] = useState(20);
    const [IsRefreshing, setIsRefreshing] = useState(false);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        fetch(`http://192.168.1.19:5000/sql/venderProduct/${route.params}`)
            .then((response) => response.json())

            .then((json) => setVendorId(json))
            .catch((error) => console.error(error))

    }, []);
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
    const renderItem = (element) => {

        return (
            <View style={Style.all_item_main2}>
                <View style={Style.all_item_main3}>
                    <TouchableOpacity style={Style.all_item_main4} onPress={() => navigate.navigate('Product_detail', element.item)}>
                        <Image style={Style.all_item_main4_img}
                            resizeMode="cover"
                            source={{ uri: "https://www.pngmart.com/files/13/Apple-Airpods-Transparent-PNG.png" }}
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
                                {element.item.rating}{' '}
                                <Icon style={Style.ratingIcon} name="md-star-half-sharp" />
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => addToCart(productDetail)} style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderWidth: 1, elevation: 2, height: 35, borderRadius: 22, marginBottom: 4 }}>
                        <FontAwesome name="heart-o" style={Style.middle2_2_icon} />
                    </TouchableOpacity>



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
                        <Text style={Style.mainHead}>Vendor Items</Text>
                    </View>
                }
                data={VendorId} renderItem={renderItem} keyExtractor={item => item.product_id} numColumns={2}
                ListFooterComponent={flatlistEnd}
                onEndReached={onEndReached} onEndReachedThreshold={0.5} refreshing={IsRefreshing} onRefresh={onRefresh} />
        </View>
    )
}

export default AllVendorProducts

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
    },
    mainHead: {
        fontSize: 25,
        fontWeight: '900',
        marginVertical: '3%',
        marginHorizontal: '2%',
        color: '#484848'
    }
});

