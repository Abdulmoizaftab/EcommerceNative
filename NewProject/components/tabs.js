import {View, Text, ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import React,{useState,useEffect} from 'react';
import { Skeleton,NativeBaseProvider } from 'native-base';


const Tabs = ({cat_id,setHeading,setId}) => {
  const [data, setData] = useState([{name:"All"}]);
  const [num,setNum]=useState(0);
  const [skeleton,setSkeleton]=useState(false)

  const getTab=async(value,index,hierId)=>{
    setNum(index)
    setHeading(value)
    setId(hierId)
  }

  const getsubCategories=async()=>{
    setSkeleton(true)
    const datas=await fetch(`http://192.168.1.26:5000/sql/getSubCategories/${cat_id}`)
    const res=await datas.json()
    for (let i = 0; i < res.length; i++) {
      setData((data)=>[...data,res[i]])
    }
    setSkeleton(false)
  }
  useEffect(() => {
    getsubCategories();
  }, [])
  
  
  return (
    <NativeBaseProvider>

      {skeleton===false?
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
        :<View
    style={{
      width: '100%', flexDirection: 'row', padding: 7, justifyContent:"space-between"
    }}>


    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="63" h="9" rounded="10" startColor="amber.300" />
    </View>


    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="63" h="9" rounded="10" startColor="coolGray.300" />
    </View>

    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="63" h="9" rounded="10" startColor="coolGray.300" />
    </View>


    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="63" h="9" rounded="10" startColor="coolGray.300" />
    </View>


    <View activeOpacity={0.9} >
      <Skeleton  borderColor="coolGray.200" mb="3" w="63" h="9" rounded="10" startColor="coolGray.300" />
    </View>


  </View>
      }
      </NativeBaseProvider>
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
