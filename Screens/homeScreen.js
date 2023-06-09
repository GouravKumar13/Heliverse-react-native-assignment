import { ImageBackground, Image, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import BackgroundImage from './backgroundImage';



const HomeScreen = ({ navigation }) => {
    const tw = useTailwind();
    setTimeout(() => {
        navigation.navigate('Second');
    }, 3000); // 3 seconds delay
    return (
        <SafeAreaView>
            <View >
                <BackgroundImage />
                <Image source={ require("../assets/images/castingLogo.png") } style={ styles.castingLogo } />

                <Text style={ styles.text }>The Results R In!</Text>

            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    Backgroud: { height: '100%', width: '100%', },

    text: {
        position: 'absolute',
        color: '#FFD5AA',
        fontSize: 24,
        top: '40%',
        left: '25%',
    },
    castingLogo: {
        position: 'absolute',
        width: 100,
        height: 100,
        left: '30%',
        top: '8%',
    }


});
