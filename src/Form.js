// import {
//   Alert,
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// //import Dropdown from './DropDown';

// const Form = () => {
//   const [userdata, setUserData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState({
//     field: '',
//     message: '',
//   });
//   const [checkValidEmail, setCheckValidEmail] = useState(false);
//   let {email, password} = userdata;
  

//   const handleLogin = (text) => {
//     // let re = /\S+@\S+\.\S+/;
//     // let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//     let re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//     //setEmail(text);
//     if (re.test(text) || regex.test(text)) {
//       setCheckValidEmail(false);
//     } else {
//       setCheckValidEmail(true);
//     }
//     alert('Login Success');
//     console.log('userdata', userdata);
//   };
//   // useEffect(() => {
//   //   handleLogin();
//   // }, []);
//   return (
//     <SafeAreaView style={{padding: '4%'}}>
//       <TextInput
//         style={styles.input}
//         onChangeText={text => setUserData({...userdata, email: text})}
//         value={email}
//         placeholder={'Email'}
//       />
//       {error.field === 'email' && <Text>Email is required</Text>}
//       <TextInput
//         style={styles.input}
//         onChangeText={text => setUserData({...userdata, password: text})}
//         value={password}
//         placeholder={'Password'}
//       />
//       {error.field === 'password' && <Text>Password is required</Text>}
//       {email === '' || password === '' || checkValidEmail === true ? (
//         <TouchableOpacity
//           disabled
//           style={styles.buttonDisable}
//           //onPress={handleLogin}
//           >
//           <Text style={styles.text}>Submit</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.text}>Submit</Text>
//         </TouchableOpacity>
//       )}
//     </SafeAreaView>
//   );
// };

// export default Form;

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     marginTop: 10,
//     borderWidth: 1,
//     padding: 10,
//   },
//   button: {
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'orange',
//     borderRadius: 5,
//     marginTop: 25,
//   },
//   buttonDisable: {
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'grey',
//     borderRadius: 5,
//     marginTop: 25,
//   },
//   text: {
//     color: 'white',
//     fontWeight: '700',
//   },
// });
import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const Form = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5, 
    },
})

export default Form;