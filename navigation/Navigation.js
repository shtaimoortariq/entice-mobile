import 'react-native-gesture-handler';
import React from 'react'

// IMPORTS...
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// PAGES...
import SplashScreen from '../screens/SplashScreen'
import JoinScreen from '../screens/JoinScreen'
import SignUpScreen from '../screens/SignUpScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import UserNameScreen from '../screens/UserNameScreen'
import InfluenceScreen from '../screens/InfluenceScreen'
import EngagementScreen from '../screens/EngagementScreen'
import SetYourPriceScreen from '../screens/SetYourPriceScreen';
import YourAllSetScreen from '../screens/YourAllSetScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    const [isLoading, setIsloading] = React.useState(true)

    setTimeout(() => setIsloading(false), 3000)

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Join">
                {isLoading ?
                    <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />
                    :
                    <React.Fragment>
                        <Stack.Screen
                            name="Join"
                            component={JoinScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SignUp"
                            component={SignUpScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Welcome"
                            component={WelcomeScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="UserName"
                            component={UserNameScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Influence"
                            component={InfluenceScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Engagement"
                            component={EngagementScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SetYourPrice"
                            component={SetYourPriceScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="YourAllSet"
                            component={YourAllSetScreen}
                            options={{ headerShown: false }}
                        />
                    </React.Fragment>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
