import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Button,
  Alert,
  SafeAreaView,
  Platform,
  Pressable,
} from 'react-native';

import Loader from '../Components/Loader';

const RegisterScreen = (props) => {
    const [placeHolderText, setPlaceHolderText] = React.useState('PlaceHolder');
    const [placeHolderOtherText, setPlaceHolderOtherText] = React.useState('*');
    const { onPress, title = 'Save' } = props;
  
    return (
      <View style={styles.safeAreaView}>
         <ImageBackground source={require('../Image/newUser.png')}  resizeMode= {Platform.OS === 'ios' ?  "cover" : "stretch"} style={styles.image}>
         <ScrollView>
         <Text style={styles.registerText}> Register</Text>

         <View style={styles.textInputBg}>
        <TextInput  style={styles.input}
          //remove placeholder on touching
          onResponderStart={() => {
            setPlaceHolderOtherText('');
            setPlaceHolderText('');
          }}>
          <Text>
            {'Name'}
            <Text style={{color: 'red'}}>{placeHolderOtherText}</Text>
          </Text>
        </TextInput>
        </View>
        
        <View style={styles.textInputBg}>
        <TextInput  style={styles.input}
          //remove placeholder on touching
          onResponderStart={() => {
            setPlaceHolderOtherText('');
            setPlaceHolderText('');
          }}>
          <Text>
            {'Designation'}
            <Text style={{color: 'red'}}>{placeHolderOtherText}</Text>
          </Text>
        </TextInput>
        </View>

        <View style={styles.textInputBg}>
        <TextInput  style={styles.input}
          //remove placeholder on touching
          onResponderStart={() => {
            setPlaceHolderOtherText('');
            setPlaceHolderText('');
          }}>
          <Text>
            {'Location'}
            <Text style={{color: 'red'}}>{placeHolderOtherText}</Text>
          </Text>
        </TextInput>
        </View>

        <View style={styles.textInputBg}>
        <TextInput  style={styles.input}
          //remove placeholder on touching
          onResponderStart={() => {
            setPlaceHolderOtherText('');
            setPlaceHolderText('');
          }}>
          <Text>
            {'EMAIL ID'}
            <Text style={{color: 'red'}}>{placeHolderOtherText}</Text>
          </Text>
        </TextInput>
        </View>

        <View style={styles.textInputBg}>
        <TextInput  style={styles.input}
          //remove placeholder on touching
          onResponderStart={() => {
            setPlaceHolderOtherText('');
            setPlaceHolderText('');
          }}>
          <Text>
            {'Mobile'}
            <Text style={{color: 'red'}}>{placeHolderOtherText}</Text>
          </Text>
        </TextInput>
        </View>

        <View style={styles.textInputBg}>
        <TextInput  style={styles.input}
          //remove placeholder on touching
          onResponderStart={() => {
            setPlaceHolderOtherText('');
            setPlaceHolderText('');
          }}>
          <Text>
            {'Company'}
            <Text style={{color: 'red'}}>{placeHolderOtherText}</Text>
          </Text>
        </TextInput>
        </View>
        <View style={styles.createAccount}>
        <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
       </View>
       </ScrollView>
        </ImageBackground>
         </View>
    );
};
export default RegisterScreen;

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    registerText: {
        marginTop: '35%',
        paddingHorizontal: 24,
        fontSize: 30,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    input: {
      height: 40,
      margin: 12,
     // borderWidth: 1,
      padding: 5,
     // borderRadius: 10,
     // borderColor: 'lightgray',
     // backgroundColor: 'red,'
    },
    textcontainer:{
     backgroundColor: "white",
     margin: 12,
     padding: 0,
     borderColor: 'lightgray',
     borderRadius: 10,
     marginTop: 50
    },
    image: {
        flex: 1,
        justifyContent: "flex-start",
      },
      textInputBg:   {
        backgroundColor: "white",
        paddingLeft: 10,
        paddingRight: 10,
        margin: 5,
        borderColor: 'lightgray',
        borderRadius: 10,
      },
      createAccount: {
        backgroundColor: "#076082",
        height: 50,
        textAlign: "center",
        justifyContent: 'center',
      },
      buttonView:  {
       // color: 'white',
        padding: 20,
      },
      safeAreaView: {
       // paddingTop: Platform.OS === 'android' ? 25 : 0,
        flex: 1,
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#076082',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });
