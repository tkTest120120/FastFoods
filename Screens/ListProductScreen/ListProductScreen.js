import * as React from 'react';
import { Text, View, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import styles from './css';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const DATA = [
    {
        title: 'Item',
        name: "Com Hop",
        price: 3000
    },
    {
        title: 'Item',
        name: "Com Hop",
        price: 3000
    },
    {
        title: 'Item',
        name: "Com Hop",
        price: 3000
    },
    {
        title: 'Item',
        name: "Com Hop",
        price: 3000
    },
    {
        title: 'Item',
        name: "Com Hop",
        price: 3000
    },

];

export default function ListProductScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <Text style={{
        fontSize: 40
      }} > Ắn gì hôm nay ? </Text> */}
            <FlatList style={styles.flatList}
                data={DATA}
                renderItem={(item, index) => (
                    <TouchableOpacity  onPress={()=> navigation.navigate('Detail', { item: item.item })} >
                        <View style={styles.item} >
                            <Image style={styles.image}
                                source={{ uri: 'https://gymme.vn/wp-content/uploads/2020/08/eat-clean-tim-khoe.jpg' }} />

                            <View style={styles.item_CT} >
                                <Text style={styles.foodName} > {item.item.name} </Text>
                                <Text > {item.item.title} </Text>
                                <Text style={styles.price} > {item.item.price + 'đ'} </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};