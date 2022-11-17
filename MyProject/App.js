/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {

    const [placeHolderText, setPlaceHolderText] = React.useState('PlaceHolder');
    const [placeHolderOtherText, setPlaceHolderOtherText] = React.useState('*');
  
    return (
      <View style={{flex: 1, alignContent: 'flex-start', justifyContent: 'flex-start'}}>
        <View style={styles.textcontainer}>  
        <TextInput  style={styles.input}
          //remove placeholder on touching
          onResponderStart={() => {
            setPlaceHolderOtherText('');
            setPlaceHolderText('');
          }}>
          <Text>
            {placeHolderText}
            <Text style={{color: 'red'}}>{placeHolderOtherText}</Text>
          </Text>
        </TextInput>

        <TextInput  style={styles.input}
          //remove placeholder on touching
          onResponderStart={() => {
            setPlaceHolderOtherText('');
            setPlaceHolderText('');
          }}>
          <Text>
            {placeHolderText}
            <Text style={{color: 'red'}}>{placeHolderOtherText}</Text>
          </Text>
        </TextInput>
        </View>
        </View>
    );
  };

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
  textcontainer:{
  // backgroundColor: "lightgray",
   margin: 12,
   padding: 0,
   borderColor: 'lightgray',
   borderRadius: 10,
   marginTop: 50
  }
});

export default App;
