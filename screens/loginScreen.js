import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, ScrollView, Button } from "react-native";
import { useFonts } from 'expo-font';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loaded] = useFonts({
        'Kufam-SemiBoldItalic': require('../assets/fonts/Kufam-SemiBoldItalic.ttf'),
        'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/video-chat.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Dev's Talk</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign In"
            // onPress={() => login(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
            {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        buttonTitle="Sign In with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                    // onPress={() => fbLogin()}
                    />

                    <SocialButton
                        buttonTitle="Sign In with Google"
                        btnType="google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                    // onPress={() => googleLogin()}
                    />
                </View>
            ) : null}

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                    Don't have an acount?<Text style={{textDecorationLine: 'underline', fontWeight:'bold'}}> Create here</Text> 
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});