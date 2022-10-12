import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView,RefreshControl } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const arr = [1, 2, 3, 4, 5, 6, 7, 89,2,3,4,2]

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Notification = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <View>
      <View style={styles.NavTop}>
        <View style={styles.ParentNavTop1}>
          <View style={styles.NavTop1}>
            <MaterialCommunityIcons name='chevron-left' color={'#5d59ee'} style={{ fontSize: 50, marginLeft: '-8%' }} />
            <TouchableOpacity><Text style={{ color: '#5d59ee', fontSize: 15, width: 50, marginLeft: -12, fontWeight: '500' }}>Back</Text></TouchableOpacity>
          </View>
          <TouchableOpacity><Text style={styles.clearall}>Clear All</Text></TouchableOpacity>
        </View>
        <View style={styles.BottomNav}><Text style={styles.notify}>Notifications</Text></View>
      </View>

      <View style={styles.timeElaspe}>
        <Text style={styles.Recent}>RECENT</Text>
      </View>

      <ScrollView style={{marginBottom:'10%'}}  refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        {arr.map((item, index) => (

          <View style={styles.ParentNotification} key={index}>
            <View style={styles.Notification}>
              <View style={styles.innerLeft}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://p.kindpng.com/picc/s/134-1341734_contacts-icon-contacts-icon-png-transparent-png.png',
                  }}
                />
                <View style={styles.TextContainer}>
                  <Text style={styles.NotificationText}>Moiz Bhai Has invited you to join Scrum Meeting working</Text>
                  <Text style={{ alignSelf: 'flex-start', paddingTop: 4, marginLeft: '6%' }}>12 Hours Ago</Text>
                </View>
              </View>
              <View style={styles.NotificationIcons}>
                <AntDesign name='checkcircle' color={'#9CCC66'} size={30} />
                <AntDesign name='closecircle' color={'#E3797C'} size={30} />

              </View>
            </View>
          </View>
          // <View>
          //   <Text>
          //     hello
          //   </Text>
          // </View>
        ))}
      </ScrollView>



    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  NavTop: {
    borderBottomWidth: 2,
    borderColor: 'silver',
    height: 100,
  },
  NavTop1: {
    // borderWidth: 2,
    height: 50,
    // borderColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',


  },
  BottomNav: {
    // borderWidth:2,
    // borderColor:'magenta',
    height: 45,
    width: '70%'

  },
  ParentNavTop1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth:2,
    width: '98%'
  },
  clearall: {
    fontSize: 18,
    color: '#5d59ee',
    marginTop: 8,
  },
  notify: {
    fontSize: 35,
    marginLeft: '7%',
    color: 'black',
    fontWeight: '700',
    marginTop: '-2%'


  },

  timeElaspe: {
    borderBottomWidth: 2,
    borderColor: '#e5e8e7',
    fontSize: 20,
    width: '92%',
    marginLeft: '4%',
    marginVertical: '2%'
  },
  Recent: {
    fontSize: 15,
    fontWeight: 'bold',
    // paddingTop: "6%",
    // paddingBottom: '1.5%',
    paddingVertical: '1.5%'


  },
  Notification: {

    // borderBottomWidth: 3,
    // borderWidth:1,
    // backgroundColor:'white',
    borderRadius: 10,
    borderColor: 'silver',
    // height: '65%',
    flex: 1,
    // width: '92%',
    paddingTop: -10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,

  },
  ParentNotification: {
    // borderWidth: 2,
    // backgroundColor:"#ffff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: '3%',
    paddingHorizontal: '2%',
    backgroundColor: 'white',
    width: '95%',
    paddingHorizontal: '2%',
    alignSelf: 'center',
    marginVertical: '1.5%',
    elevation: 3,
    shadowColor: '#aaa',
    borderRadius: 10,
  //  marginBottom:10

  },
  innerLeft: {
    // borderWidth: 1,
    // borderColor: 'green',
    // height: '100%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    
  },
  TextContainer: {

    // borderWidth: 1,
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2%',
    paddingBottom: '2%'

  },
  NotificationText: {
    fontSize: 15,
    color: 'gray',
    fontWeight: 'bold'

  },
  NotificationIcons: {
    // borderWidth: 2,
    // height: '50%',
    flex: 1,
    width: '20%',
    // borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',

  }

})