import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './screens/onbordingScreen';
import LoginScreen from './screens/loginScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();

export default function App() {
  //first install hbar pr only onboarding screen ase (done hye jabar pr) next time on krlei login screen ase .....nexttime onboarding dekhte gele reunstall krte hbe
  const[isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if(isFirstLaunch === null){
    return null;
  }else if(isFirstLaunch === true){
    return (
      <NavigationContainer>
      <AppStack.Navigator screenOptions={{
        headerMode: 'none' }
      }>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
    );
  }else{
    return <LoginScreen /> ;
  }

}

