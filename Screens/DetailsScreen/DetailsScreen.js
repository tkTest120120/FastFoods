import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Octicons, FontAwesome } from '@expo/vector-icons';

import styles from './css'

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function DetailsScreen({ navigation, route }) {

    const [food, setFood] = useState(route.params.item);

    return (
        <View style={styles.container} >
                <Text style={{
                    // marginBottom: 50,
                    fontSize: 20,
                    fontWeight: "bold"
                }} > Fast Food {food.name} {food.price} </Text>


                <View style={styles.payment} >
                    <TouchableOpacity onPress={() => {

                    }} >
                        <Octicons name="diff-removed" size={24} color="black" />
                    </TouchableOpacity>

                    <Text style={{ marginHorizontal: 20 , fontSize : 16 }} > 1 </Text>

                    <TouchableOpacity onPress={() => {

                    }} >
                        <Octicons name="diff-added" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn_payment} >
                        <Text style={styles.btn_text} > Dat Hang </Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

export default DetailsScreen;