import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';

export default function AddTodo(props) {
  const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
      />
      <TouchableOpacity onPress={() => { props.handler(text) }} style={styles.button}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#26c6da',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});
