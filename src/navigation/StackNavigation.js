import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screen/Login'
import Products from '../Screen/Products'
import { NavigationContainer } from '@react-navigation/native'
import TopTabNavigation from './TopTabNavigation'
const Stack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>

                {/* <Stack.Screen name="Login" component={Login} /> */}
                <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})