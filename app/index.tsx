import React, { useState, useRef } from 'react';
import { LayoutChangeEvent, Dimensions, ScrollView, View, StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import { UserInput, BotText, UserBot } from '@/components/UserInput';
const randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis malesuada tortor. Maecenas viverra neque non hendrerit feugiat. Aliquam sed est non turpis semper rutrum eu ac diam. Nulla pretium risus non tellus volutpat luctus. Maecenas volutpat enim ac felis efficitur tempor. Donec posuere porttitor elit in sodales. Pellentesque sodales consequat vestibulum. Vestibulum dictum arcu a nunc elementum, gravida hendrerit lorem porttitor. Nullam sit amet lectus id nunc aliquam tempus sit amet vitae tortor. Aliquam sed molestie mauris, eu congue lacus. Phasellus aliquet sed turpis vitae iaculis. Maecenas ultrices magna enim, blandit pharetra tellus sollicitudin at. Mauris in augue dui. Sed placerat facilisis fringilla. Curabitur elit ligula, venenatis sed sollicitudin maximus, viverra sed leo.

Etiam aliquet feugiat consequat. Nunc aliquam pellentesque orci, sed tempor nisl. Nulla sapien elit, bibendum nec massa id, vulputate tempor velit. Suspendisse potenti. Mauris fringilla euismod metus, ut congue sapien aliquet at. Sed sed nisi libero. Curabitur varius eros quis libero dictum, in laoreet arcu vehicula. Nulla porttitor enim ut eros sagittis, sed maximus risus sagittis. Phasellus a dolor massa.

`
import { LogBox } from 'react-native';
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs();

const { width, height } = Dimensions.get('window');

const windowDims = Dimensions.get('window');
const windowHeight = windowDims.height
const windowWidth = windowDims.width
let userWidth = windowWidth*2/3
// console.log(`window height: ${windowHeight} width: ${windowWidth}`);


export default function Canvas() {
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [canvasHeight, setCanvasHeight] = useState(0);
    
    // collect chain messages
    const [collectedTexts, setCollectedTexts] = useState([]);
    const collectTextValues = (placeholder) => {
      const texts = [];
      let currentPlaceholder = placeholder;
      while (currentPlaceholder) {
        texts.push(currentPlaceholder);
        currentPlaceholder = currentPlaceholder.split('.').slice(0, -1).join('.');
        console.log('currentPlaceholder')
        console.log(currentPlaceholder)
      }
      setCollectedTexts(texts);
      console.log(collectedTexts);
    };

  return (
    <ScrollView 
    style={styles.container}
    // onLayout={(e: LayoutChangeEvent) => console.log("ScrollView Layout: ", e.nativeEvent)}
    // onContentSizeChange={(width: number, height: number) => console.log(`Vertical Width: ${width}, Height: ${height}`)}
    >
    <ScrollView 
    horizontal={true} 
    style={styles.horizontalScrollView}
    // onContentSizeChange={(width: number, height: number) => setCanvasSize(width, height)}
    >
        <View style={styles.viewContentColumn}>
                
            <View style={styles.viewContentRow}>

                {/* within 1.1 create 2.1, 2.2 */}
                <View style={styles.viewContentColumn}>
                    <UserBot placeholder='1.1' width={userWidth} nestLevel={0} value={randomText}/>
                    <View style={styles.viewContentRow}>

                        <View style={styles.viewContentColumn}>
                            <UserBot placeholder='1.1.1' width={userWidth} nestLevel={2} value={randomText}/>
                        
                            <View style={styles.viewContentRow}>
                                <View style={styles.viewContentColumn}>
                                <UserBot placeholder='1.1.1.1' width={userWidth} nestLevel={3*2} value={randomText}/>                                    
                                </View>

                                <View style={styles.viewContentColumn}>
                                <UserBot placeholder='1.1.1.2' width={userWidth} nestLevel={3*2} value={randomText}/>                                    
                                </View>

                                <View style={styles.viewContentColumn}>
                                <UserBot placeholder='1.1.1.3' width={userWidth} nestLevel={3*2} value={randomText}/>                                    
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewContentColumn}>
                        <UserBot placeholder='1.1.2' width={userWidth} nestLevel={2} value={randomText} onCollect={collectTextValues} />
                        </View>

                    </View>
                    
                    
                </View>
                
                <View style={styles.viewContentColumn}>
                <UserBot placeholder='1.2' width={userWidth} nestLevel={0} value={randomText}/>
                    <View style={styles.viewContentRow}>
                            <View style={styles.viewContentColumn}>
                            <UserBot placeholder='1.2.1' width={userWidth} nestLevel={2} value={randomText}/>
                            </View>
                            <View style={styles.viewContentColumn}>
                            <UserBot placeholder='1.2.2' width={userWidth} nestLevel={2} value={randomText}/>
                            </View>
                    </View>
                </View>

                <View style={styles.viewContentColumn}>
                <UserBot placeholder='1.3' width={userWidth} nestLevel={0} value={randomText}/>
                    <View style={styles.viewContentRow}>
                                <View style={styles.viewContentColumn}>
                                <UserBot placeholder='1.3.1' width={userWidth} nestLevel={3} value={randomText}/>
                                </View>
                                <View style={styles.viewContentColumn}>
                                <UserBot placeholder='1.3.2' width={userWidth} nestLevel={3} value={randomText}/>
                                </View>
                                <View style={styles.viewContentColumn}>
                                <UserBot placeholder='1.3.3' width={userWidth} nestLevel={3} value={randomText}/>
                                </View>
                    </View>
                </View>

            </View>

            

            

        </View>


    </ScrollView>
    </ScrollView>
      
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
  
  horizontalScrollView: {
    flex: 1,
    },
  viewContentRow: { 
    flexDirection: 'row', // Horizontal scrolling
    flexWrap: 'wrap',    // Allows vertical wrapping of columns
    alignItems: 'flex-start',
    // maxWidth: 200,
    width: null,
    
  },
  viewContentColumn: {
    flexDirection: 'column', // Horizontal scrolling
    flexWrap: 'wrap',    // Allows vertical wrapping of columns
    alignItems: 'flex-start',
    // maxWidth: 1,
    width: null,

  },

  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
