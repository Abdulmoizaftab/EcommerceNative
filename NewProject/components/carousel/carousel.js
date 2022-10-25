import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box';
import pic1 from '../../assets/fonts/images/pic1.png'
import pic2 from '../../assets/fonts/images/pic2.png'
import pic3 from '../../assets/fonts/images/pic3.png'
import {requestUserPermission , NotificationListener} from '../../src/utils/pushNotification_helper'
import { useSelector } from 'react-redux';


//const { width, heigth } = Dimensions.get('window')



const Carousel = () => {

  // const {currentUser} = useSelector(state=>state.user)


  // useEffect(() => {
  //   if (currentUser !== null) {
  //     requestUserPermission(currentUser);
  //     NotificationListener();
  //   }
  // }, [])
    // const scrollX = new Animated.Value(0)
    // let position = Animated.divide(scrollX, width)
    // const [dataList, setDataList] = useState(data)

    // useEffect(()=> {
    //     setDataList(data)
    //     infiniteScroll(dataList)
    // })


    // if (data && data.length) {
    //     return (
    //         <View style={{backgroundColor:"#f7f7f7"}}>
    //             <FlatList data={data}
    //             ref = {(flatList) => {this.flatList = flatList}}
    //                 keyExtractor={(item, index) => 'key' + index}
    //                 horizontal
    //                 pagingEnabled
    //                 scrollEnabled
    //                 snapToAlignment="center"
    //                 scrollEventThrottle={16}
    //                 decelerationRate={"fast"}
    //                 showsHorizontalScrollIndicator={false}
    //                 renderItem={({ item }) => {
    //                     return <CarouselItem item={item} />
    //                 }}
    //                 onScroll={Animated.event(
    //                     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    //                     {useNativeDriver:false}
    //                 )}
                    
    //             />

    //             <View style={styles.dotView}>
    //                 {data.map((_, i) => {
    //                     let opacity = position.interpolate({
    //                         inputRange: [i - 1, i, i + 1],
    //                         outputRange: [0.3, 1, 0.3],
    //                         extrapolate: 'clamp'
    //                     })
    //                     return (
    //                         <Animated.View
    //                             key={i}
    //                             style={{ opacity, height: 10, width: 10, backgroundColor: '#5A56E9', margin: 8, borderRadius: 5 }}
    //                         />
    //                     )
    //                 })}

    //             </View>
    //         </View>
    //     )
    // }

    // console.log('Please provide Images')
    // return null
    const [images, setImages] = React.useState([
        pic1,
        pic2,
        pic3,
    ]);
    return(
        

      <SliderBox 
      
                images={images}
                sliderBoxHeight={150}
                dotColor="#5A56E9"
                inactiveDotColor="#90A4AE"  
                circleLoop
                autoplay={true}
                paginationBoxVerticalPadding={-10}
                ImageComponentStyle={{
                  borderRadius:10,
                  width:"95%",
                  marginTop:"2%",
                  marginBottom:"5%",

                }}
                resizeMode='contain'
                dotStyle={{width: 10,height: 10}}
                />
             
    )
}



export default Carousel