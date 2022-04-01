import * as React from 'react';
import { Button, Text, View, FlatList, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Feather } from '@expo/vector-icons';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import TabContainer from './TabContainer'
import DetailsScreen from '../Screens/DetailsScreen/DetailsScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';

const WIDTH = Dimensions.get('screen').width;

// const HomeStack = createStackNavigator();

// function HomeStackScreen() {
//     return (
//         <HomeStack.Navigator>
//             <HomeStack.Screen name="Home" component={HomeScreen} />
//             <HomeStack.Screen name="Details" component={DetailsScreen} />
//         </HomeStack.Navigator>
//     );
// }

// const SettingsStack = createStackNavigator();

// function SettingsStackScreen() {
//     return (
//         <SettingsStack.Navigator>
//             <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//             <SettingsStack.Screen name="Details" component={DetailsScreen} />
//         </SettingsStack.Navigator>
//     );
// }


const Stack = createStackNavigator();

export default function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Home"
                    component={TabContainer}
                    options={{ headerShown: false }}
                />

                <Stack.Screen name="Detail" component={DetailsScreen} />
                
                <Stack.Screen name="SignUp" component={SignUpScreen} 
                options={{title : "Đăng Ký"}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};