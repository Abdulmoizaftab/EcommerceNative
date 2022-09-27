import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SearchBarReal from '../components/ComponentSearchBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';



const Search = () => {

    const [asyncStorageData, setAsyncStorageData] = useState([])


    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@searchItems')
            const json_parse = JSON.parse(jsonValue)
            //console.log("daya==>",json_parse);
            setAsyncStorageData(json_parse)
            //return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            alert('Something went wrong');
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const removeSpecificData = async (data) => {
        try {
            let asyncData = await AsyncStorage.getItem('@searchItems');
            asyncData = JSON.parse(asyncData);
            if (asyncData) {
                let cartItem = asyncData;
                const removedData = cartItem.filter(object => object != data)
                const removeData = asyncStorageData.filter(object => object != data)
                setAsyncStorageData(removeData)
                await AsyncStorage.removeItem('@searchItems')
                await AsyncStorage.setItem('@searchItems', JSON.stringify(removedData));
            }
        } catch (error) {
            alert('Something went wrong');
        }
    }

    return (
        <View>

            <View>
                <SearchBarReal />
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                {
                    asyncStorageData.length > 0 ? asyncStorageData.map((obj, key) => {
                        return (
                            <View key={key} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 6, marginRight: 6, width: 110, borderColor: 'green', borderRadius: 10, borderWidth: 1, height: 32 }}>
                                <Text style={{ marginRight: 5 }}> {obj}</Text>
                                <TouchableOpacity onPress={() => { removeSpecificData(obj) }}>
                                    <Entypo name='cross' style={styles.searchIcon} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                        :
                        <Text>No Search Data</Text>
                }

            </View>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchIcon: {

        color: "red",
        fontSize: 20,

    }
});