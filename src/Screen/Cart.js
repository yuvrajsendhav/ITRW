import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { h } from '../config'
import { useDispatch } from 'react-redux'
import { cartSelector, setAddToCart } from '../redux/reducers/cartreducer'
const Cart = () => {
    const dispatch = useDispatch()
    const { myCart } = cartSelector()
    //console.log('myCart', myCart)

    const handleRemoveProduct = (items) => {
        const removed = myCart.filter(item => item.id !== items.id)
        dispatch(setAddToCart(removed))
    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.FlatStyle}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: item.image }} style={styles.Imagestyle} />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 8,
                    }}>
                    <Text>{item.title}</Text>
                    <Text>Rs.{item.price}</Text>
                </View>
                <Text>{item.description}</Text>
                <TouchableOpacity style={styles.cartButton} onPress={() => { handleRemoveProduct(item) }}>
                    <Text style={styles.cartText}>Remove From Cart</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={myCart}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    Imagestyle: {
        width: '80%',
        height: h(50),
        borderRadius: 8,
    },
    FlatStyle: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
    cartButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', backgroundColor: 'cyan',
        padding: '1%',
        borderRadius: 10
    },
    cartText: {
        color: 'blue'
    }
})