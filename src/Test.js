import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Form from './Form'

export default function Test() {
  const [textValue, setTextValue] = useState('')
  const [list, setList] = useState([])


  const handleSubmit = () => {
    if (textValue.trim() !== '') {
      setList([textValue, ...list])
      setTextValue('')
      console.log(list)
    }
  }
  const removeTask = (index) => {
    let itemsCopy = [...list];
    itemsCopy.splice(index, 1);
    setList(itemsCopy)
  }

  return (

    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              list.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => removeTask(index)}>
                    <Form text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

      </ScrollView>

      <View style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={textValue} onChangeText={text => setTextValue(text)} />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});