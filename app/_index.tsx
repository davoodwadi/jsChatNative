import React, {useState} from 'react';
import { Keyboard, TouchableWithoutFeedback, Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Button, Alert, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import alert from '../components/alertpoly'
import {UserInput, BotText} from '../components/UserInput'


const randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis malesuada tortor. Maecenas viverra neque non hendrerit feugiat. Aliquam sed est non turpis semper rutrum eu ac diam. Nulla pretium risus non tellus volutpat luctus. Maecenas volutpat enim ac felis efficitur tempor. Donec posuere porttitor elit in sodales. Pellentesque sodales consequat vestibulum. Vestibulum dictum arcu a nunc elementum, gravida hendrerit lorem porttitor. Nullam sit amet lectus id nunc aliquam tempus sit amet vitae tortor. Aliquam sed molestie mauris, eu congue lacus. Phasellus aliquet sed turpis vitae iaculis. Maecenas ultrices magna enim, blandit pharetra tellus sollicitudin at. Mauris in augue dui. Sed placerat facilisis fringilla. Curabitur elit ligula, venenatis sed sollicitudin maximus, viverra sed leo.

Etiam aliquet feugiat consequat. Nunc aliquam pellentesque orci, sed tempor nisl. Nulla sapien elit, bibendum nec massa id, vulputate tempor velit. Suspendisse potenti. Mauris fringilla euismod metus, ut congue sapien aliquet at. Sed sed nisi libero. Curabitur varius eros quis libero dictum, in laoreet arcu vehicula. Nulla porttitor enim ut eros sagittis, sed maximus risus sagittis. Phasellus a dolor massa.

`

const messages = [
  { id: '1', text: 'Hello!', type: 'received' },
  { id: '2', text: 'Hi there!', type: 'sent' },
  { id: '3', text: 'How are you?', type: 'received' },
];
const processInput = (inputText, botTextSetter) => {
  console.log(`processed: ${inputText}`);
  botTextSetter(inputText+'\n\n'+randomText);
}

console.log('Platform.OS');
console.log(Platform.OS);


export default function Index() {
  
  const [currentText1, setCurrentText1] = useState('')
  const [currentText2, setCurrentText2] = useState('')
  const [botText, setBotText] = useState('')
  const [botTextEditable, setBotTextEditable] = useState('')

  // const texts = messages.map(m => m.text)
  // alert([...texts, 'yo'])
  // const inputArray = []
  // for (let i=1; i<11; i++){
  //   inputArray.push({
  //     id : i,
  //     value : `${i}`
  //   })
  // }
  // const [inputs, setInputs] = useState([{ id: 1, value: '' }]);
  
  // const id = 3;
  // const value = 'n';
  // setInputs(inputs.map(input => (input.id === id ? { ...input, value } : input)));
  // const handled = inputArray.map(input => (input.id === id ? { ...input, value } : input));
  // alert(JSON.stringify(handled));
  console.log('Hello World');
  // alert('Hi')

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollViewContainer}
        >
        {/* go vertical */}
        
          
          {/* go horizontal */}
          <View style={styles.containerRow}>
              <View style={styles.containerColumn}> 
              <UserInput 
              value={currentText1} 
              onChange={setCurrentText1}
              onPress={() => processInput(currentText1, setBotText)}
              />
              <BotText value={botText}/>
              </View>

              <View style={styles.containerColumn}>
              <UserInput 
              value={currentText1} 
              onChange={setCurrentText1}
              onPress={() => processInput(currentText1, setBotText)}
              />
              <BotText value={botText}/>
              </View>
          </View>

    
          

        </KeyboardAwareScrollView>        
    </GestureHandlerRootView>
  );
}




const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 40,
    paddingVertical: 80,
  },
  containerRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between', // Adjust space between inputs
    justifyContent: "space-evenly",
    alignItems: 'center',
    marginBottom: 20,
    // marginHorizontal:100,
    paddingHorizontal: 100,
  },
  containerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between', // Adjust space between inputs
    alignItems: 'center',
    marginBottom: 20,
  },

  user: {
    borderColor: '#b2bec3',
    // borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#dfe6e9',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  bot: {
    borderColor: '#b2bec3',
    // borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#ffeaa7',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  displayText: {
    fontSize: 20,
    color: '#2d3436',
  },
  sendButton: {
    // backgroundColor: '#74b9ff',
    // paddingVertical: 1,
    // paddingHorizontal: 2,
    // borderRadius: 1,
    alignItems: 'center',
    // color: 'red',
    // marginBottom: 0,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  userContainer: {
    borderColor: '#b2bec3',
    // borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#d1e1e8',
    fontSize: 16,
    textAlignVertical: 'top',
  }
});