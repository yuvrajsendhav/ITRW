import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { h } from '../config'
import { useDispatch } from 'react-redux'
import { getProduct, productSelector } from '../redux/reducers/productreducer'
import { setAddToCart, cartSelector } from '../redux/reducers/cartreducer'
const Products = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const { allProduct } = productSelector()
  const { myCart } = cartSelector()
  //console.log('allProduct', allProduct)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    // console.log("cartData!! >====", cartData)
    dispatch(setAddToCart(data))
  }, [data])
  // const fetchData = async () => {
  //   //axios.get('https://jsonplaceholder.typicode.com/todos')
  //   try {
  //     const response = await axios.get('https://fakestoreapi.com/products/');
  //     console.log('Product response', response);
  //     setData(response.data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   //.then(res=>res.json())
  //   // .then(resData=>{
  //   //     console.log('res',resData)
  //   //     setData(resData)
  //   // })
  //   // .catch(err=>{
  //   //     console.log('error',err)
  //   // })
  // }
  const fetchData = () => {
    dispatch(getProduct())
  }

  const addItemToCart = (items) => {
    if (myCart.length == 0) {
      setData([...myCart, items])
      dispatch(setAddToCart(myCart))
    }

    // else if (itemIndex !== -1) {
    //   // Item already exists in the cart, you can choose to update the quantity or show a message
    //   Alert.alert('Already Added')
    // }

    else if (myCart.some((item) => item.id === items.id)) {
      Alert.alert('Already Added')
    }
    else {
      setData([...myCart, items])
      dispatch(setAddToCart(myCart))
    }
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
        <TouchableOpacity style={styles.cartButton}
          onPress={() => { addItemToCart(item) }}
        >
          <Text style={styles.cartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={allProduct}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} />
    </View>
  )
}

export default Products

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