import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import HomeScreen from './Screens/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SecondScreen from './Screens/secondScreen';
import ThirdScreen from './Screens/thirdScreen';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <TailwindProvider utilities={utilities}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Second" component={SecondScreen} />
                    <Stack.Screen name="Third" component={ThirdScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </TailwindProvider>
    );
}
