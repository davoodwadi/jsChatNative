import React, {useState} from 'react';
import { Keyboard, TouchableWithoutFeedback, Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform, Button, Alert, Pressable, Dimensions } from "react-native";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LogBox } from 'react-native';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs();
// Get the window dimensions
const { width, height } = Dimensions.get('window');
const widthBox = width * 0.5;

export const UserInput = ({
    value, 
    onChange, 
    onPress,
    placeholder = 'Type a message...', 
    buttonIcon = 'downcircle',
    buttonColor = "black",
    buttonSize = 24,
  }) => {
    return (
  
      <View
      style={styles.userContainer}
      >
        <TextInput 
        value={value}
        onChangeText={onChange}
        multiline
        numberOfLines={10}
        placeholder={placeholder}
        style={styles.user}
        />
  
        <Pressable 
        style={styles.sendButton} 
        onPress={onPress}
        >
        {/* <MaterialCommunityIcons name="send" size={24} color="white" /> */}
          <AntDesign name={buttonIcon} size={buttonSize} color={buttonColor} />
        </Pressable>
      </View>
    );
  };

export const BotText = ({value}) => {
    return (
        <View
        style={styles.botContainer}
        >
        <Text style={styles.bot}>{value}</Text>
        </View>
    )
};

export const UserBot = ({
    placeholder, 
    value, 
    width, 
    nestLevel=0, 
    onCollect
}) => {
    width = nestLevel===0 ? width : width/nestLevel;
    const containerStyle = { ...styles.viewContentColumn, width };
    const [userValue, setUserValue] = useState('');
    const [botValue, setBotValue] = useState('');
    
    const handlePress = () => {
        console.log('button pressed');
        setBotValue(`${placeholder}\n\n${userValue}`);
        // console.log('onCollect(placeholder)');
        onCollect(placeholder);
    };
    // console.log(`setting width to ${width}`)
    return (
        <View style={containerStyle}>
        <UserInput placeholder={placeholder} value={userValue} onChange={setUserValue} onPress={handlePress}/>
        <BotText value={botValue}></BotText>

        </View>
    );
};
  
const styles = StyleSheet.create({
user: {
    borderColor: '#b2bec3',
    // borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 25,
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
    paddingHorizontal:10,
    paddingVertical: 10,
    // width: width*0.5,
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#d1e1e8',
    fontSize: 16,
    textAlignVertical: 'top',
},
botContainer: {
    borderColor: '#b2bec3',
    // borderWidth: 1,
    borderRadius: 20,
    // paddingHorizontal:10,
    // paddingVertical: 10,
    // width: width*0.5,
    // marginBottom: 10,
    // marginTop: 10,
    marginHorizontal: 10,
    // backgroundColor: '#d1e1e8',
    fontSize: 16,
    textAlignVertical: 'top',
},
viewContentRow: {
    flexDirection: 'row', // Horizontal scrolling
    flexWrap: 'wrap',    // Allows vertical wrapping of columns
  },
viewContentColumn: {
flexDirection: 'column', // Horizontal scrolling
flexWrap: 'wrap',    // Allows vertical wrapping of columns
width: 50,
  },
});