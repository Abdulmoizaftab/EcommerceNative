import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState,useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios'

const VerificationScreen = ({ route,navigation }) => {
    const navigate = useNavigation();
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(false);
    const [time, setTime] = useState(20);
    const [trigger, setTrigger] = useState(false);
    const lastNameRef = useRef();
    const {email} = route.params;

    const countdownTimer = () =>{
        setTime(20)
       let interval = setInterval(() => {
            if (time===0) {
                clearInterval(id)
            }else{
                setTime(prevState=>prevState-1)
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(interval)
        }, 20500);
    }

    const expireOtp = (emailParam) =>{
        axios.post('http://192.168.1.9:5000/sql/OTPExpire',{email:emailParam})
        countdownTimer()
    }

    useEffect(() => {
    expireOtp(email)
    // countdownTimer()
    }, [trigger])

    const resendOTP = async() =>{
        await axios.post('http://192.168.1.9:5000/sql/sendOTP', { email: email })
        setError(false)
        setTrigger(!trigger)
    }
    
    const verifyOTP = async() =>{
        const res = await axios.post('http://192.168.1.9:5000/sql/matchOTP', { otp:otp , email: email })
        if (res.data) {
            setError(false)
            navigation.navigate('NewPassword',{email})
        } else {
            setError(true)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View>

                <View style={styles.mainHeader}>
                    <View style={styles.innerHeader}>
                        <View style={styles.innerHeader1}>
                            <Icon
                                style={styles.backBtn}
                                name="chevron-back"
                                onPress={() => navigate.goBack()}
                            />
                            <Text style={styles.text}>Verification</Text>

                        </View>
                    </View>
                </View>


                <View style={styles.section1} >
                    <View style={styles.emailBox}>
                        <Text style={styles.email}>Enter Verification Code</Text>
                    </View>

                    <View style={styles.codeInputParent}>
                        <TextInput style={styles.verificationCode} maxLength={1} fo caretHidden={true} keyboardType='numeric'  onChangeText={(text)=>setOtp(prevState=>prevState.concat(text))} />
                        <TextInput style={styles.verificationCode} maxLength={1} caretHidden={true} keyboardType='numeric'  onChangeText={(text)=>setOtp(prevState=>prevState.concat(text))}/>
                        <TextInput style={styles.verificationCode} maxLength={1} caretHidden={true} keyboardType='numeric'  onChangeText={(text)=>setOtp(prevState=>prevState.concat(text))}/>
                        <TextInput style={styles.verificationCode} maxLength={1} caretHidden={true} keyboardType='numeric'  onChangeText={(text)=>setOtp(prevState=>prevState.concat(text))}/>
                        <TextInput style={styles.verificationCode} maxLength={1} caretHidden={true} keyboardType='numeric'  onChangeText={(text)=>setOtp(prevState=>prevState.concat(text))}/>
                        <TextInput style={styles.verificationCode} maxLength={1} caretHidden={true} keyboardType='numeric'  onChangeText={(text)=>setOtp(prevState=>prevState.concat(text))}/>

                    </View>


                    <View style={{ alignItems: 'center', width: '47%',alignSelf:'center'}}>
                        <Text style={{ fontSize: 16, width: '100%' }} >If you didn't receive a code! </Text>
                        {
                            time === 0?(
                                <View style={{flexDirection:'row', alignItems:'center',marginVertical:'2%' }}>
                                    <Text style={{color:'grey',marginHorizontal:'3%'}}>00:00</Text>
                                    <TouchableOpacity onPress={resendOTP}><Text style={{ color: '#5A56E9', fontSize: 16 }}>Resend</Text></TouchableOpacity>
                                </View>
                            ):(
                                time < 10?(
                                        <View style={{flexDirection:'row', alignItems:'center',marginVertical:'2%' }}>
                                            <Text style={{color:'grey',marginHorizontal:'3%'}}>00:0{time}</Text>
                                            <Text style={{ color: 'darkgrey', fontSize: 16 }}>Resend</Text>
                                        </View>
                                ):(
                                            <View style={{flexDirection:'row', alignItems:'center',marginVertical:'2%' }}>
                                                <Text style={{color:'grey',marginHorizontal:'3%'}}>00:{time}</Text>
                                                <Text style={{ color: 'darkgrey', fontSize: 16 }}>Resend</Text>
                                            </View>
                                    )
                            )
                        }
                    </View>

                    <TouchableOpacity style={styles.sendEmail_btn} onPress={verifyOTP}>
                        <Text style={styles.sendEmail_btn_text}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default VerificationScreen

const styles = StyleSheet.create({
    mainHeader: {
        // borderWidth: 2,
        borderColor: 'black',
        height: '12%',
        marginTop: "2%",
        // marginVertical:'1%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    innerHeader: {
        // borderWidth: 2,
        marginVertical: '2%',
        height: '80%',
        width: '100%',
        borderColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'

    },
    innerHeader1: {
        width: '100%',
        height: '100%',
        // borderWidth: 2,
        borderColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: '#222222',
        fontSize: 23,
        fontWeight: '500'
    },
    backBtn: {
        fontSize: 25,
        color: '#888888',
        position: 'absolute',
        zIndex: 999,
        // top: 6,
        left: 15,
    },
    backBtn: {
        fontSize: 25,
        color: '#888888',
        position: 'absolute',
        zIndex: 999,
        // top: 6,
        left: 15,
    },
    section1: {
        marginTop: '35%',

    },
    inputEmail: {

        height: 60,
        margin: 12,
        borderRadius: 30,
        borderColor: 'silver',
        borderWidth: 2,
        padding: 10,
        marginVertical: 25,


    },
    email: {
        fontSize: 20,
        fontWeight: '600',
        color: '#222222',

    },
    emailBox: {
        // borderWidth:2,
        alignItems: 'center'

    },
    sendEmail_btn: {
        width: "90%", height: 60, backgroundColor: "#5A56E9", borderRadius: 30, justifyContent: "center", alignItems: "center", alignSelf: "center", marginVertical: "10%",
        flexDirection: "row"
    },
    sendEmail_btn_text: {
        color: "white", fontWeight: "bold", fontSize: 17
    },
    codeInputParent: {
        // borderWidth:1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    verificationCode: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 50,
        width: 40,
        height: 40,
        marginVertical: '8%',
        textAlign: 'center',
        padding:0,
       


    }
})