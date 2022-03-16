import * as React from 'react';
import { Button, Text, View, FlatList, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import ListProductScreen from '../Screens/ListProductScreen/ListProductScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';

const Tab = createBottomTabNavigator();

export default function TestScreen() {
    return (
        // <NavigationContainer>

        // </NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <Feather name="home" size={24} color="black" />
                        );
                    } else if (route.name === 'Carts') {
                        return (
                            <Feather name="shopping-cart" size={22} color="black" />
                        );
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={ListProductScreen} />
            <Tab.Screen name="Carts" component={CartScreen} options={{ tabBarBadge: 7 }} />
        </Tab.Navigator>
    );
};