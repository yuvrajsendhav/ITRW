// import React, {useState, useEffect} from 'react';
// import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import {colors} from 'constants';
// import { fs, h, w } from './config';

// const arrayData = [
//   {
//     key: 'Select_Item',
//     value: 'Select Item',
//   },
// ];

// const Dropdown = props => {
//   const {
//     data,
//     selected,
//     selectedKey = () => {},
//     parentContainer,
//     defaultTitle = 'Select Item',
//     buttonStyle,
//     containerStyle,
//     titleStyle,
//     itemsStyle,
//     itemTitleStyle,
//     showDefault = false,
//     warning,
//     warningMessage,
//     selectable = true,
//   } = props;
//   const [title, setTitle] = useState(defaultTitle);
//   const [itemStatus, setHideStatus] = useState(false);
//   const [actualData, setActualData] = useState(data);

//   const selectedItem = (val, keyValue) => {
//     selected(val);
//     // selectedKey(keyValue + 1);
//     selectedKey(keyValue);
//   };

//   useEffect(() => {
//     if (showDefault) {
//       setActualData([...arrayData, ...data]);
//     }
//   }, []);

//   const openItems = () => {
//     setHideStatus(!itemStatus);
//   };

//   const selectItem = (val, keyValue) => {
//     setTitle(val);
//     setHideStatus(false);
//     selectedItem(val, keyValue);
//   };

//   return (
//     <View style={{...parentContainer}}>
//       <Pressable
//         onPress={selectable ? openItems : () => {}}
//         style={{...styles.button, ...buttonStyle}}>
//         <Text style={{...styles.title, ...titleStyle}}>
//           {selectable ? title : ` `}
//         </Text>
//         <Icon
//           name={itemStatus ? 'angle-up' : 'angle-down'}
//           size={20}
//           color={'black'}
//         />
//       </Pressable>
//       {warning ? (
//         <Text style={styles.textWarning}>{warningMessage}</Text>
//       ) : null}
//       {itemStatus && (
//         <ScrollView
//           nestedScrollEnabled={true}
//           style={{...styles.container(actualData.length), ...containerStyle}}>
//           {actualData.map(
//             (
//               {
//                 grade_id,
//                 grade_name,
//                 school_id,
//                 school_name,
//                 board_id,
//                 board_name,
//                 default_id,
//                 default_name,
//               } = item,
//               index,
//             ) => {
//               let id = grade_id || school_id || board_id || default_id;
//               let name =
//                 grade_name || school_name || board_name || default_name;
//               return (
//                 <Pressable
//                   key={index}
//                   onPress={() => selectItem(name, id)}
//                   style={{...styles.itemBtn(index, data), ...itemsStyle}}>
//                   <Text style={{...styles.items, ...itemTitleStyle}}>
//                     {name}
//                   </Text>
//                 </Pressable>
//               );
//             },
//           )}
//         </ScrollView>
//       )}
//     </View>
//   );
// };

// export default Dropdown;

// const styles = StyleSheet.create({
//   button: {
//     borderWidth: 1,
//     height: h(4.8),
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     paddingHorizontal: w(2),
//   },
//   title: {
//     fontWeight: '400',
//     fontSize: fs(16),
//     color: 'black',
//     paddingRight: w(2),
//   },
//   container: size => ({
//     height: size > 2 ? h(20) : 'auto',
//     // height: 'auto',
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: h(5.6),
//     zIndex: 1,
//     //backgroundColor: colors.hex_F9F9F9,
//     backgroundColor: 'green',
//   }),
//   itemBtn: (index, data) => ({
//     borderBottomWidth: index == data.length ? 2 : 0,
//     borderBottomEndRadius: index == data.length ? 8 : 0,
//     borderWidth: 1,
//     paddingVertical: h(0.5),
//     justifyContent: 'center',
//     paddingHorizontal: w(2),
//   }),
//   items: {fontWeight: 'bold', fontSize: fs(14), color: 'black'},
// //textWarning: {color: colors.hex_B4091B},
// textWarning: {color: 'red'},
// });


