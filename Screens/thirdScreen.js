import { Button, StyleSheet, SafeAreaView, Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import BackgroundImage from './backgroundImage';


const ThirdScreen = ({ navigation }) => {
    const [timerValue, setTimerValue] = React.useState(15000);
    const endTime = 40000;
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (timerValue < endTime) {
                return (
                    setTimerValue((prevCount) => prevCount + 1)
                )
            }
            

        }, 10);
        return () => clearInterval(interval);

    }, [timerValue]);
    return (
        <View>
            <BackgroundImage style={ { zIndex: 1 } } />
                     
             <Text style={ {
                left: '15%',
                top: '18%',
                textAlign: 'center',
                width:'65%',
                position: 'absolute',
                color: '#FFD5AA',
                fontWeight: 'bold',
                fontSize: 32,
            } }>4 Frindes Gave U Some Love</Text>
            


            <View style={ { flex: 1, position: 'absolute', left: '26%', top: "5%", justifyContent: 'center', alignItems: 'center' } }>
                <Image source={ require("../assets/images/main-heart.png") } style={ styles.heart } />
                <Text style={ { position: 'absolute', color: '#FFD5AA', fontSize: 32, top: '180%' } }>{ timerValue }</Text>
            </View>

            <Pressable onPress={ () => navigation.navigate('Home') } style={ {
                position: 'absolute', top: '70%',
                left: '75%',
            } } >
                <Image source={ require("../assets/images/arrow.png") } style={ styles.arrow } />
            </Pressable>

        </View>
    );
};

export default ThirdScreen;

const styles = StyleSheet.create({
    heart: {

        height: 130,
        width: 170,
        top: 200,


    },
    arrow: {
        // position: 'absolute',
        width: 50,
        height: 50,

        zIndex: 10,
    },
});
