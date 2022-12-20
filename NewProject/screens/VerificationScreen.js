import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';

const VerificationScreen = ({ route, navigation }) => {
    const navigate = useNavigation();
    const [otp, setOtp] = useState('');
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const [otp5, setOtp5] = useState('');
    const [otp6, setOtp6] = useState('');
    const [error, setError] = useState(false);
    const [time, setTime] = useState(20);
    const [trigger, setTrigger] = useState(false);
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();
    const input6 = useRef();
    const { email } = route.params;
    const [disable, setDisable] = useState(false);
    const [overlay,setOverlay]=useState(false)

    const countdownTimer = () => {
        if(time==20){
            const interval = setInterval(() => {
                setTime(prevState => prevState - 1)
                //setTime(time)
            }, 1000);
            setTimeout(() => {
                clearInterval(interval)
            }, 21000);
        }
    }


    const expireOtp = (emailParam) => {
        axios.post('http://192.168.1.14:5000/sql/OTPExpire', { email: emailParam })
    }

    useEffect(() => {
        expireOtp(email)
        countdownTimer()
    }, [trigger])

    const resendOTP = async () => {
        setTime(20)
        setTrigger(!trigger)
        await axios.post('http://192.168.1.14:5000/sql/sendOTP', { email: email })
        setError(false)
    }

    const verifyOTP = async () => {
        try {
        setDisable(true)
        setOverlay(true)
        const res = await axios.post('http://192.168.1.14:5000/sql/matchOTP', { otp: otp1 + otp2 + otp3 + otp4 + otp5 + otp6, email: email })
        if (res.data) {
            setError(false)
            setDisable(false)
            navigation.navigate('NewPassword', { email })
            setOverlay(false)
        } else {
            setError(true)
            setDisable(false)
            setOverlay(false)
        }
    } catch (error) {
        console.log("error",error);
        if(error == "AxiosError: Network Error"){
          ToastAndroid.showWithGravityAndOffset(  
            "No network connectivity",  
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50 
          )
          setDisable(false)
          setOverlay(false)
      }
      setDisable(false)
      setOverlay(false)
    }
}

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View>
            <Spinner
          visible={overlay}
        />
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

                    {
                        error ? (
                            <Text style={{ color: 'red', fontSize: 16, alignSelf: 'center', marginTop: '4%' }}>There OTP is incorrect</Text>
                        ) : (
                            null
                        )
                    }

                    <View style={styles.codeInputParent}>

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input1}
                            value={otp1}
                            autoFocus={true}
                            editable={otp1.length === 0 && otp2.length===0 && otp3.length===0 && otp4.length===0 && otp5.length===0 && otp6.length===0 ? true : false}
                            //onChange={() => input2.current.focus()}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key !== 'Backspace') { input2.current.focus() } }}
                            // onKeyPress={({ nativeEvent }) => { if (nativeEvent.key !== 'Backspace') { input2.current.focus() } else{setOtp(otp.slice(0,-1))} }}
                            keyboardType='numeric'
                            onChangeText={setOtp1} />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input2}
                            value={otp2}
                            editable={otp1.length === 1 && otp2.length===0 && otp3.length===0 && otp4.length===0 && otp5.length===0 && otp6.length===0 ? true : false}                            //onChange={() => input3.current.focus()}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp1(""); setTimeout(() => { input1.current.focus(); }, 100); } else { input3.current.focus() } }}
                            // onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp(otp.slice(0,-1)); setTimeout(() => {input1.current.focus();}, 100); } else{ input3.current.focus() } }}
                            keyboardType='numeric'
                            onChangeText={setOtp2} />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input3}
                            value={otp3}
                            editable={otp1.length === 1 && otp2.length===1 && otp3.length===0 && otp4.length===0 && otp5.length===0 && otp6.length===0 ? true : false}
                            //onChange={() => input4.current.focus()}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp2(""); setTimeout(() => { input2.current.focus(); }, 100); } else { input4.current.focus() } }}
                            keyboardType='numeric'
                            onChangeText={setOtp3} />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input4}
                            value={otp4}
                            editable={otp1.length === 1 && otp2.length===1 && otp3.length===1 && otp4.length===0 && otp5.length===0 && otp6.length===0 ? true : false}                            //onChange={() => input5.current.focus()}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp3(""); setTimeout(() => { input3.current.focus(); }, 100); } else { input5.current.focus() } }}
                            keyboardType='numeric'
                            onChangeText={setOtp4} />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input5}
                            value={otp5}
                            editable={otp1.length === 1 && otp2.length===1 && otp3.length===1 && otp4.length===1 && otp5.length===0 && otp6.length===0 ? true : false}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp4(""); setTimeout(() => { input4.current.focus(); }, 100); } else { input6.current.focus() } }}
                            keyboardType='numeric'
                            onChangeText={setOtp5} />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input6}
                            value={otp6}
                            editable={otp1.length === 1 && otp2.length===1 && otp3.length===1 && otp4.length===1 && otp5.length===1 || otp6.length===1 ? true : false}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp5(""); setTimeout(() => { input5.current.focus(); }, 100); } }}
                            keyboardType='numeric'
                            onChangeText={setOtp6} />
                        {/* <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input1}
                            autoFocus={true}
                            editable={otp.length > 1 ? false : true}
                            //onChange={() => input2.current.focus()}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key !== 'Backspace') { input2.current.focus() } else{setOtp(otp.slice(0,-1))} }}
                            keyboardType='numeric'
                            onChangeText={(text) => 
                                setOtp(prevState => prevState.concat(text))
                            } />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input2}
                            editable={otp.length > 2 ? false : true}
                            //onChange={() => input3.current.focus()}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp(otp.slice(0,-1)); setTimeout(() => {input1.current.focus();}, 100); } else{ input3.current.focus() } }}
                            keyboardType='numeric'
                            onChangeText={(text) => setOtp(prevState => prevState.concat(text))} />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input3}
                            editable={otp.length > 3 ? false : true}
                            //onChange={() => input4.current.focus()}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp(otp.slice(0,-1)); setTimeout(() => {input2.current.focus();}, 100);  } else{ input4.current.focus() } }}
                            keyboardType='numeric'
                            onChangeText={(text) => setOtp(prevState => prevState.concat(text))} />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input4}
                            editable={otp.length > 4 ? false : true}
                            //onChange={() => input5.current.focus()}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp(otp.slice(0,-1)); setTimeout(() => {input3.current.focus();}, 100);  } else{ input5.current.focus() } }}
                            keyboardType='numeric'
                            onChangeText={(text) => setOtp(prevState => prevState.concat(text))} />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input5} 
                            editable={otp.length > 5 ? false : true}
                            //onChange={() => input6.current.focus()}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp(otp.slice(0,-1)); setTimeout(() => {input4.current.focus();}, 100);  } else{ input6.current.focus() } }}
                            keyboardType='numeric'
                            onChangeText={(text) => setOtp(prevState => prevState.concat(text))} />

                        <TextInput
                            style={styles.verificationCode}
                            maxLength={1}
                            caretHidden={false}
                            ref={input6}
                            onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { setOtp(otp.slice(0,-1)); setTimeout(() => {input5.current.focus();}, 100); } }}
                            keyboardType='numeric'
                            onChangeText={(text) => setOtp(prevState => prevState.concat(text))} /> */}

                    </View>


                    <View style={{ alignItems: 'center', width: '60%', alignSelf: 'center'}}>
                        <Text style={{ fontSize: 16, width: '100%',textAlign:"center" }} >If you didn't receive a code! </Text>
                        {
                            time === 0 ? (
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '2%' }}>
                                    <Text style={{ color: 'grey', marginHorizontal: '3%' }}>00:00</Text>
                                    <TouchableOpacity onPress={resendOTP}><Text style={{ color: '#5A56E9', fontSize: 16 }}>Resend</Text></TouchableOpacity>
                                </View>
                            ) : (
                                time < 10 ? (
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '2%' }}>
                                        <Text style={{ color: 'grey', marginHorizontal: '3%' }}>00:0{time}</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 16 }}>Resend</Text>
                                    </View>
                                ) : (
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '2%' }}>
                                        <Text style={{ color: 'grey', marginHorizontal: '3%' }}>00:{time}</Text>
                                        <Text style={{ color: 'darkgrey', fontSize: 16 }}>Resend</Text>
                                    </View>
                                )
                            )
                        }
                    </View>

                    <TouchableOpacity style={styles.sendEmail_btn} disabled={disable} onPress={verifyOTP}>
                        <Text style={styles.sendEmail_btn_text}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default VerificationScreen;

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
        padding: 0,
    },
})