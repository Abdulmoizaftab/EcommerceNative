import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

const GetFCMToken = async () => {

    let fcmtoken = await AsyncStorage.getItem('fcmtoken')
    console.log(fcmtoken, 'oldToken')


    if (!fcmtoken) {

        try {
            const fcmtoken = await messaging().getToken()
            if (fcmtoken) {
                console.log(fcmtoken, 'newtoken')
                await AsyncStorage.setItem('fcmtoken', fcmtoken);


            }
        } catch (error) {
            console.log(error, 'error in fcm token')
        }
    }


}