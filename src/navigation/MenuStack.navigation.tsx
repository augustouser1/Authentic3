import React from "react"
import {StackNavigationProp, createStackNavigator} from '@react-navigation/stack';
import {AutScreen} from  '../screens/AutScreen';
import {Regscreen} from '../screens/Regscreen'
type MenuStackParam = {
     AutScreen: undefined
     Regscreen: undefined
}
type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "AutScreen">
export type MenuStackTypes = {
   navigation: MenuScreenNavigation

}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animationEnabled: true,
        gestureEnabled: true
      }}>
        <Stack.Screen name="AutScreen" component={AutScreen} />
        <Stack.Screen name="Regscreen" component={Regscreen} />
      </Stack.Navigator>
    );
}