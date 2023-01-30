import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import SignIn from '../pages/SignIn';
import Home from "../pages/Home";

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureDirection: "horizontal"  
            }}
            initialRouteName='Welcome'
            options={{
                gestureDirection: "horizontal"
            }}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}