import React from "react";
import { StyleSheet, Text, View, Button , Image , TouchableOpacity } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';


const Done = ({...props}) => (
    <TouchableOpacity
    style={{marginRight:18}}
    onPress={()=> submit()}
    {...props}
    >
    <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>

);

const OnboardingScreen = ({ navigation }) => {
    return (

        <Onboarding
        DoneButtonComponent={Done}
            onSkip={() => navigation.replace("Login")} // jump to login screen jate r back  e on
            onDone={() => navigation.navigate("Login")}
            pages={[
                //1st page of onbording
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Connect to the World',
                    subtitle: 'A New Way To Connect With The World',
                },
                //2nd page of onbording
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Share Your Favorites',
                    subtitle: 'Share Your Thoughts With Similar Kind of People',
                },
                //3rd page of onbording
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Become The Star',
                    subtitle: 'Let The Spot Light Capture You',
                },
             
  ]}
        />

    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

});
