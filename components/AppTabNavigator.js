import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonteScreen';
import BookRequestScreen from '../screens/BookRequestScreen';

export const AppTapNavigator= createBottomTabNavigator({
    DonateBooks:{
        screen: BookDonateScreen,
        navigationOptions:{
            tabBarLabel: 'Donate Books'
        }
    },
    RequestBooks:{
        screen: BookRequestScreen,
        navigationOptions:{
            tabBarLabel: 'Request Books'
        }
    }
})