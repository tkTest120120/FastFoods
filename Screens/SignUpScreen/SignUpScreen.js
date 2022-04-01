import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import styles from './css'
import * as API from '../../Services/api'

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function SignUpScreen({ navigation }) {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [rePassWord, setRePassWord] = useState('');
    const [isShowPassWord, setIsShowPassWord] = useState(true);
    const [isShowRePassword, setIsShowRePassword] = useState(true);

    const createAlert = (message) =>
        Alert.alert('Thông báo', message, [

            { text: 'OK', onPress: () => console.log('OK Alert') },
        ]);

    return (
        <View style={styles.container}>

            <Text style={{
                marginBottom: 50,
                fontSize: 40,
                fontWeight: "bold"
            }} > Fast Food </Text>

            <TextInput style={styles.input} value={userName}
                onChangeText={(text) => setUserName(text)} placeholder='Số điện thoại' keyboardType='numeric'
            />

            <View>
                <TextInput style={styles.input} value={passWord}
                    onChangeText={(text) => setPassWord(text)} placeholder='Mật khẩu'
                    secureTextEntry={isShowPassWord} />

                <TouchableOpacity style={styles.showPassWord} onPress={()=> setIsShowPassWord(isShowPassWord ? false : true)} >
                    <Entypo name={isShowPassWord ? "eye" : "eye-with-line"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View  >
                <TextInput style={styles.input} value={rePassWord}
                    onChangeText={(text) => setRePassWord(text)} placeholder='Nhập lại Mật khẩu' secureTextEntry={isShowRePassword} />

                <TouchableOpacity style={styles.showPassWord} onPress={()=> setIsShowRePassword(isShowRePassword ? false : true)} >
                    <Entypo name={isShowRePassword ? "eye" : "eye-with-line"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn_login} onPress={() => {
                if (userName === '' || passWord === '' || rePassWord === '') {
                    createAlert("\nKhông được để trống !");
                } else if (passWord !== rePassWord) {
                    createAlert("\nMật khẩu không trùng nhau !")
                }
                else {
                    
                    API.sign_up(userName , passWord , "food")
                    .then(response =>{
                        const dataBody = response.data;
                        console.log(response.data);
                        if(dataBody.signUp){
                            navigation.replace("Login" , {phone : userName , passWord : passWord});
                        } else if (dataBody.errno === 1062){
                            console.log('Số điện thoại đã tồn tại');
                        }
                    })
                    .catch(err =>{
                        console.log("lỗi gửi dữ liệu đăng ký");
                        console.error(err);
                    });
                }
            }} >
                <Text style={styles.btn_text} > Đăng ký </Text>
            </TouchableOpacity>

        </View>
    );
};

export default SignUpScreen;