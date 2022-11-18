import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';

import SearchDropdown from './SearchDropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { IP_ADDRESS } from "@env"




const ComponentSearchBox = () => {
    //const [isSearching , setIsSearching] = useState(false)
    const [searchText, setSearchText] = useState("");
    const [filterData, setFilterData] = useState([]);
    const navigate = useNavigation()

    useEffect(() => {
        // const fetchAndSet = async()=>{
        //  var result= await axios.get(`http://10.0.2.2:5000/sql/suggest/women`)
        // //  result=await result.json();
        //  //console.log("data..>",result.data);
        //     .then(response => console.log("hello...",response.json()))
        //.then(result => console.log("hello==>",result.data))
        // .then(dataSource && dataSource.map(item => {
        //   filterData.push(item.name)
        // }))
        // .then(console.log(filterData))
        // .then(setIsSearching(true)
        // )
        //     .catch(err => console.log(err))
        // }

        // fetchAndSet();
        //console.log("dta is==>",dataSource);
        var arr = []
        const check = async () => {
            try {
                if (searchText.length >= 1) {
                    const result = await axios.get(`http://192.168.1.23:5000/sql/suggest/${searchText}`);
                    if (result.data) {
                        result.data.map(item => {
                            return arr.push(item.name);
                        })
                        setFilterData(arr)
                    }
                    else {
                        console.log("No data");
                    }
                }
            }
            catch (error) {
                console.log("error");
            }

        }
        check()

    }, [searchText])

    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem('@searchItems')
        } catch (e) {
            // remove error
        }
        console.log('Done.')
    }


    const onChange = (text) => {
        if (text) {
            setSearchText(text)
        }
        else {
            setFilterData([])
        }
    }

    return (
        <>
            <View style={styles.container}>
                <MaterialCommunityIcons name='account-outline' style={styles.accountIcon} onPress={() => navigate.navigate('Login')} />
                <View style={styles.searchView}>
                    <Ionicons name='search-outline' style={styles.searchIcon} />
                    <TextInput
                        style={styles.search}
                        placeholder="Search Here"
                        placeholderTextColor="#EAE9FC"
                        onChangeText={(e) => onChange(e)} />
                </View>
                <Ionicons name="cart-outline" style={styles.cartIcon} onPress={() => navigate.navigate('AddToCart')} />
            </View>
            <SearchDropdown dataSource={filterData} searchTextInSearch={searchText} />

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        alignItems: "center",
        backgroundColor: '#5A56E9',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 65
    },
    searchView: {

        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: "#EAE9FC",
        borderRadius: 50,
        paddingHorizontal: 5,
        width: '60%',
        height: 50
    },
    search: {
        backgroundColor: "#5A56E9",
        color: "#EAE9FC",
        fontSize: 15,
        fontWeight: "400",
        borderRadius: 50,
        height: 40,
    },
    searchIcon: {

        color: "#EAE9FC",
        fontSize: 20,

    },
    accountIcon: {

        color: "#EAE9FC",
        fontSize: 25
    },
    cartIcon: {

        color: "#EAE9FC",
        fontSize: 25
    }
});



export default ComponentSearchBox;