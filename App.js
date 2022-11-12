import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AssignmentThree from "./assignmentThree";
import Details from './app/components/details';
import Preview from "./app/components/preview";

const Stack = createStackNavigator();

export default function App(){

    return(

        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="assignment-3" component={AssignmentThree} />
                <Stack.Screen name="detailed-song" component={Details} />
                <Stack.Screen name="song-preview" component={Preview} />
            </Stack.Navigator>
            
        </NavigationContainer>

    );

}