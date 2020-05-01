/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { YellowBox } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OnboardingScreen from './src/screens/OnboardingScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'
import HomeScreen from './src/screens/HomeScreen'
import OurBurgerScreen from './src/screens/OurBurgerScreen'
import FavoriteScreen from './src/screens/FavoriteScreen'
import TrackOrderScreen from './src/screens/TrackOrderScreen'
import WalletScreen from './src/screens/WalletScreen'

import HomeIcon from './src/assets/icons/home-icon.svg'
import OurBurgerIcon from './src/assets/icons/our-burger-icon.svg'
import StarIcon from './src/assets/icons/star-icon.svg'
import TrackIcon from './src/assets/icons/track-icon.svg'
import WalletIcon from './src/assets/icons/wallet-icon.svg'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTab'
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }}
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
        <Stack.Screen
          name='HomeTab'
          component={HomeTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const allTab = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    label: 'Home',
    icon: HomeIcon
  },
  {
    name: 'OurBurgerScreen',
    component: OurBurgerScreen,
    label: 'Our Burgers',
    icon: OurBurgerIcon
  },
  {
    name: 'FavoriteScreen',
    component: FavoriteScreen,
    label: 'Favourite',
    icon: StarIcon
  },
  {
    name: 'TrackOrderScreen',
    component: TrackOrderScreen,
    label: 'Track Orders',
    icon: TrackIcon
  },
  {
    name: 'WalletScreen',
    component: WalletScreen,
    label: 'Wallet',
    icon: WalletIcon
  }
]

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FF9F1C',
        style: {
          height: 64
        },
        labelStyle: {
          fontFamily: 'Nunito-SemiBold',
          fontSize: 12,
          marginBottom: 10
        },
        tabStyle: {
          marginTop: 10
        },
        keyboardHidesTabBar: true
      }}
    >
      {allTab.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: () => (
              <item.icon
                width={index === 3 ? 28 : 22}
                height={index === 3 ? 28 : 22}
              />
            )
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default App
