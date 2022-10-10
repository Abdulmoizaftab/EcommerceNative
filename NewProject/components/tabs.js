import {View, Text, ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import React,{useState,useEffect} from 'react';

const Tabs = ({cat_id,setHeading,setId}) => {
  const [data, setData] = useState([{name:"All"}]);
  const [num,setNum]=useState(0);

  const getTab=async(value,index,hierId)=>{
    setNum(index)
    setHeading(value)
    setId(hierId)
  }

  const getsubCategories=async()=>{
    const datas=await fetch(`http://192.168.1.19:5000/sql/getSubCategories/${cat_id}`)
    const res=await datas.json()
    for (let i = 0; i < res.length; i++) {
      setData((data)=>[...data,res[i]])
    }
  }
  useEffect(() => {
    getsubCategories();
  }, [])
  
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: '100%',flexDirection: 'row', padding: 7
          }}>
          {data.map((v, i) => {
            return (
              <TouchableOpacity key={i} activeOpacity={0.9} style={num == i ? Style.tabs : Style.tabs2} onPress={()=>getTab(v.name,i,v.HierId)}>
                <Text style={num == i ? Style.text : Style.text2}>{v.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
  );
};

export default Tabs;


const Style=StyleSheet.create({
  tabs: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor:"#5A56E9",
  },
  tabs2: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor:"lightgray",
  },
  text:{
    color:"white"
  },
  text2:{
    color:"black"
  }
})
