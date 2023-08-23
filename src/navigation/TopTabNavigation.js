import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native'
import Products from '../Screen/Products';
import Cart from '../Screen/Cart';
import Map from '../Screen/Map';
const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Map" component={Map} />
        </Tab.Navigator>
    );
}

export default TopTabNavigation

const styles = StyleSheet.create({})
