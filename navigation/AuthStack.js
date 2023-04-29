import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from '../screens/onbordingScreen';
import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/SignupScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();

export default function AuthStack() {
  //first install hbar pr only onboarding screen ase (done hye jabar pr) next time on krlei login screen ase .....nexttime onboarding dekhte gele reunstall krte hbe
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <AppStack.Navigator initialRouteName={routeName}>
      <AppStack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />
      <AppStack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
      <AppStack.Screen name="Signup" component={SignupScreen}
      options={({navigation})=>({
        title:'',
        headerStyle:{
          backgroundColor:'#f9fafd',
          shadowColor:'#f9fafd',
          elevation:0
        },

        headerLeft:()=>(
          <View style={{marginLeft:10}}>
            <FontAwesome.Button name="long-arrow-left" size={25} backgroundColor="#f9fafd" color="#333" onPress={()=>navigation.navigate('Login')}/>
          </View>
        )


      })} />
    </AppStack.Navigator>
  );


}
