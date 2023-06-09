import {
    Animated,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Pressable
} from 'react-native';
import React, { useState } from 'react';
import BackgroundImage from './backgroundImage';

const SecondScreen = ({ navigation }) => {

    const [animation] = useState(new Animated.Value(0));
    const [componentVisible, setComponentVisible] = useState(false);

    const startAnimation = () => {
        setComponentVisible(true);
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setComponentVisible(false);
            animation.setValue(0);
        });
    };
    const interpolatedTranslateX = animation.interpolate({
        inputRange: [0, 1.1],
        outputRange: [500, 0],
    });
    return (
        <View style={ {} }>
            <BackgroundImage />
            <View style={ {
                position: 'absolute', top: '40%',
                left: '38%', flex: 1, justifyContent: 'center', alignItems: 'center'
            } }>
                <Image source={ require("../assets/images/main-heart.png") } style={ styles.heart } />
                <Text style={ { color: '#FFD5AA', fontSize: 34 } } >15000</Text>
            </View>

            <Text style={ { color: '#FFD5AA', position: 'absolute', fontSize: 27, fontWeight: '500', top: 160, left: 70, } }>Gave U Some Love</Text>

            <Pressable onPress={ () => startAnimation() } style={ {
                position: 'absolute', top: '70%',
                left: '75%',
            } } >
                <Image source={ require("../assets/images/arrow.png") } style={ styles.arrow } />
            </Pressable>
            { componentVisible && (
                <Animated.View style={ [styles.animatedContainer, { transform: [{ translateX: interpolatedTranslateX }] }] }>
                    <Image source={ require("../assets/images/avtar2.png") } style={ styles.avatar } />
                    <View style={{flex:1, justifyContent:'center',alignItems:'center'}} >
                    <Text style={ styles.text }>D-Lister</Text>
                    <Text style={ {color:'#FFD5AA'} }> Solly</Text>
                    </View>
                </Animated.View>
            ) }
        </View>
    );
};

export default SecondScreen;

const styles = StyleSheet.create({
    animatedContainer: {
        position: 'absolute',
        flex:1,
    width: '100%',
        top:50,
        justifyContent: 'space-between',
        
    },

    text: {
        color: '#FFD5AA',
        fontWeight: 'bold',
        fontSize:32,

    },
    arrow: {
        // position: 'absolute',
        width: 50,
        height: 50,

        zIndex: 10,
    },
    heart: {
        position: 'absolute',
        width: 170,
        height: 130,


    },
    avatar: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,

        borderColor: '#FFD5AA',
    }

});
