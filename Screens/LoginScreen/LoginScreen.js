import React, { useState , useEffect } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import styles from './css';
import * as API from '../../Services/api';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function LoginScreen({ navigation, route }) {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [isShowPassWord, setIsShowPassWord] = useState(true);

    useEffect(() => {
        if(route.params){
            setUserName(route.params.phone);
            setPassWord(route.params.passWord);
        }
    
    }, []);

    
    const createAlert = (message) =>
    Alert.alert('Thông báo', message, [
        
        { text: 'OK', onPress: () => console.log('OK Alert') },
    ]);
    
    const handleLogin = () => {
        if (userName === '' || passWord === '') {
            createAlert("\nKhông được để trống !");
        } else {
            API.login(userName , passWord)
            .then( res => {
                console.log(res.data);
                if(res.data.login){
                    navigation.navigate("Home");
                }
            })
            .catch( err => console.error(err));
        }
    };

    return (
        <View style={styles.container}>

            <Text style={{
                marginBottom: 50,
                fontSize: 40,
                fontWeight: "bold"
            }} > Fast Food </Text>

            <TextInput style={[styles.input , {paddingRight : 20}]} value={userName}
                onChangeText={(text) => setUserName(text)} placeholder='User Name' keyboardType='numeric' />

            <View>
                <TextInput style={styles.input} value={passWord}
                    onChangeText={(text) => setPassWord(text)} placeholder='Mật khẩu'
                    secureTextEntry={isShowPassWord} />

                <TouchableOpacity style={styles.showPassWord} onPress={() => setIsShowPassWord(isShowPassWord ? false : true)} >
                    <Entypo name={isShowPassWord ? "eye" : "eye-with-line"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn_login} onPress={() => handleLogin()} >
                <Text style={styles.btn_text} > Đăng nhập </Text>
            </TouchableOpacity>

            <View style={styles.sign_up} >
                <Text>Bạn chưa có tài khoản?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")} >
                    <Text style={{ color: "green" }} > Đăng Ký</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default LoginScreen;