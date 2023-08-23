import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { h, regx } from '../config'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navgation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [isemail, setIsEmail] = useState(false)
  const headers = {
    'Content-Type': 'application/json'
  }
  const body = {
    email: email,
    password: password
  }

  const handleSubmit = async () => {
    if (!email) {
      setIsEmail(true)
    }
    else if (!regx.email.test(email)) {
      setEmailErr(true)
    }
    else {
      setIsEmail(false)
      setEmailErr(false)
      try {
        const response = await axios.post
          ('https://api.escuelajs.co/api/v1/auth/login', body, { headers })
        navgation.navigate('Products')
       // console.log('response', response)
      } catch (err) {
        console.log('error', err);
      }
    }
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Your email'
        style={styles.inputStyle}
        autoCapitalize="none" autoCorrect={false}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <View style={{ padding: h(1) }}>
        {isemail && <Text style={{ color: 'red' }}>Please Enter Email</Text>}
        {emailErr && <Text style={{ color: 'red' }}>Please Enter Correct Email</Text>}
      </View>
      <TextInput
        placeholder='password'
        style={styles.inputStyle}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginHorizontal: 16,
    padding: '1%'
  },
  inputStyle: {
    padding: h(1),
    color: 'white',
    marginTop: h(1),
    backgroundColor: 'gray',
    borderRadius: 10
  },
  button: {
    backgroundColor: 'blue',
    padding: h(2),
    marginTop: h(1),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})