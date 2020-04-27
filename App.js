/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OnboardingScreen from './src/screens/OnboardingScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='OnboardingScreen'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='OnboardingScreen'
          component={OnboardingScreen}
        />
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
        />
        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
        />
        <Stack.Screen
          name='ForgotPasswordScreen'
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
