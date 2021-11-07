import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import HomeTabNavigator from './HomeTabNavigator';

import DestinationSearch from '../screens/DestinationSearch';
import Guests from '../screens/Guests';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();


const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"Home"} 
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name={"dest-search"} 
                    component={DestinationSearch}
                    options={{
                        title: "Search your destination"
                    }}
                />
                <Stack.Screen 
                    name={"Guests"} 
                    component={Guests}
                    options={{
                        title: "How many people?"
                    }}
                />
                <Stack.Screen 
                    name={"Post"} 
                    component={PostScreen}
                    options={{
                        title: "Acomodation"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
