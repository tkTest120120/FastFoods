import * as React from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';

import styles from './css'

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function LoginScreen({ navigation }) {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    return (
        <View style={styles.container}>

            <Text style={{
                marginBottom : 50,
                fontSize : 40,
                fontWeight : "bold"
            }} > Fast Food </Text>

            <TextInput style={styles.input} value={userName}
            onChangeText={(text) => setUserName(text)} placeholder='User Name' />

            <TextInput style={styles.input} value={passWord}
            onChangeText={(text) => setPassWord(text)} placeholder='PassWord' />

            <TouchableOpacity style={styles.btn_login} onPress={()=> navigation.navigate("Home")} >
                <Text style={styles.btn_text} > Đăng nhập </Text>
            </TouchableOpacity>

        </View>
    );
};

export default LoginScreen;