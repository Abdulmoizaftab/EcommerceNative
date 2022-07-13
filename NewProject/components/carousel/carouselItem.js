import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.url }} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        
        width: width-20,
        height: 160,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#52006a',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 7,
        
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        padding:4,
        borderRadius:10,
        width:"90%"
        
    },
    image: {
        flex:1,
        borderRadius: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5,
        fontWeight: "bold",
        
        
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        marginLeft:6,
        
    }
})

export default CarouselItem;