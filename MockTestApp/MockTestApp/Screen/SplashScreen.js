import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, SafeAreaView,ImageBackground,TouchableOpacity,Text,ScrollView} from 'react-native';

//import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      // AsyncStorage.getItem('user_id').then((value) =>
      //   navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      // );
    }, 5000);
  }, []);

  login=()=>{
    console.log('the nav obj is',navigation);
    //navigation.navigate('Auth', { screen: 'LoginScreen'});
    navigation.navigate('RegisterScreen');
   //navigation.replace('Auth');
   
    console.log('shenu gupta123 called');
  //  alert("testing......");
    // this.props.navigation.navigate('Second');
}

    return (
      //<View style={styles.container}>
       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={require('../Image/AppLoader.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
      <TouchableOpacity style={styles.btn} onPress={this.login}><Text style={styles.underline}>Existing User?</Text></TouchableOpacity>
      <Text style={styles.orLabel}>OR</Text>
      <TouchableOpacity style={styles.btn} onPress={this.login}><Text style={styles.underline}>New Registration</Text></TouchableOpacity>
      </View>
        </View>
      </ImageBackground>
      </ScrollView>
   // </View>
 
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "200%",
},
  mainContainer:{
    flex: 0.10,
    justifyContent: "flex-end",
    height: 30,
    width: 150,
    marginBottom: 10,
  },
  rowContainer: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30
  },
  underline: {
    color: "black",
    fontSize: 12,
    lineHeight: 84,
    textAlign: "center",
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  orLabel: {
    color: "black",
    fontSize: 12,
    lineHeight: 84,
    textAlign: "center",
    textAlign: 'left',
  },
  
});

