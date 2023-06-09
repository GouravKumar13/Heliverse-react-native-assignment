import { ImageBackground, Image,  SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';




const BackgroundImage = () => {
  
    
    return (
        <SafeAreaView>
            <View  >
                <ImageBackground source={ require('../assets/images/award_bg.png') } style={ styles.Backgroud } />
                <Image source={ require("../assets/images/awardPlatform.png") } style={ styles.platform } />
                <Image source={ require("../assets/images/girlClap.png") } style={ styles.girlClap } />
                         

            </View>
        </SafeAreaView>
    );
};

export default BackgroundImage;

const styles = StyleSheet.create({
    Backgroud: { height: '100%', width: '100%', },
    platform: {
        position: 'absolute',
        top: '90%',
        width: '100%',

    },
    girlClap: {
        position: 'absolute',
        width:'50%',
        height:'40%',
        top: '53%',
        left: '25%',
        
    },
    text:{
         position: 'absolute',
         color:'#FFD5AA',
         fontSize: 24,
         top: '40%',
         left: '25%',
    },
   
});
