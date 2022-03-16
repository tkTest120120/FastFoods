import React, { useState } from 'react';
import { Image, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Octicons, FontAwesome } from '@expo/vector-icons';

import styles from './css'

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const DATA = [
    {
        title: 'Item',
        name: "Com Hop ",
        price: 3000,
        amount: 1,
    },
    {
        title: 'Item',
        name: "Com Hop ",
        price: 3000,
        amount: 1,
    },
    {
        title: 'Item',
        name: "Com Hop ",
        price: 3000,
        amount: 1,
    },

];

export default function CartScreen({ navigation }) {

    const [payments, setPayments] = useState(10000);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={DATA}
                keyExtractor={(item, index) => index.toString()}

                renderItem={(item, index) => (
                    <View style={styles.item} >
                        <Image style={styles.image}
                            source={{ uri: 'https://gymme.vn/wp-content/uploads/2020/08/eat-clean-tim-khoe.jpg' }} />

                        <View style={styles.item_CT} >
                            <Text style={styles.foodName} > {item.item.name} </Text>
                            <Text style={styles.price} > {item.item.price + 'đ'} </Text>

                            <View style={styles.amount} >
                                <TouchableOpacity onPress={() => {
                                    if (item.item.amount > 1) {
                                        item.item.amount -= 1;
                                        setPayments(payments + 1);
                                    }
                                }} >
                                    <Octicons name="diff-removed" size={24} color="black" />
                                </TouchableOpacity>

                                <Text style={styles.amount_text} > {item.item.amount} </Text>

                                <TouchableOpacity onPress={() => {
                                    item.item.amount += 1;
                                    setPayments(payments + 1);
                                }} >
                                    <Octicons name="diff-added" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.btn_Delete} >
                            <FontAwesome name="remove" size={26} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.footer} >
                <TouchableOpacity style={styles.btn_TT} >
                    <Text style={styles.btn_text} > thanh toan </Text>
                </TouchableOpacity>
                <Text style={styles.tien_TT} > {payments}VNĐ </Text>
            </View>
        </View>
    );
};