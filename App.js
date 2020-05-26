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
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './src/redux/reducers'

import OnboardingScreen from './src/screens/OnboardingScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'
import HomeScreen from './src/screens/HomeScreen'
import OurBurgerScreen from './src/screens/OurBurgerScreen'
import FavouriteScreen from './src/screens/FavouriteScreen'
import TrackOrderScreen from './src/screens/TrackOrderScreen'
import WalletScreen from './src/screens/WalletScreen'

import HomeIconInactive from './src/assets/icons/home-icon.svg'
import HomeIconActive from './src/assets/icons/home-icon-active.svg'
import OurBurgerIconInactive from './src/assets/icons/our-burger-icon.svg'
import OurBurgerIconActive from './src/assets/icons/our-burger-icon-active.svg'
import StarIconInactive from './src/assets/icons/star-icon.svg'
import StarIconActive from './src/assets/icons/star-icon-active.svg'
import TrackIconInactive from './src/assets/icons/track-icon.svg'
import TrackIconActive from './src/assets/icons/track-icon-active.svg'
import WalletIconInactive from './src/assets/icons/wallet-icon.svg'
import WalletIconActive from './src/assets/icons/wallet-icon-active.svg'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
  YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

const allTab = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    label: 'Home',
    icon: {
      active: HomeIconActive,
      inactive: HomeIconInactive
    }
  },
  {
    name: 'OurBurgerScreen',
    component: OurBurgerScreen,
    label: 'Our Burgers',
    icon: {
      active: OurBurgerIconActive,
      inactive: OurBurgerIconInactive
    }
  },
  {
    name: 'FavouriteScreen',
    component: FavouriteScreen,
    label: 'Favourite',
    icon: {
      active: StarIconActive,
      inactive: StarIconInactive
    }
  },
  {
    name: 'TrackOrderScreen',
    component: TrackOrderScreen,
    label: 'Track Orders',
    icon: {
      active: TrackIconActive,
      inactive: TrackIconInactive
    }
  },
  {
    name: 'WalletScreen',
    component: WalletScreen,
    label: 'Wallet',
    icon: {
      active: WalletIconActive,
      inactive: WalletIconInactive
    }
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
            // eslint-disable-next-line react/prop-types
            tabBarIcon: ({ focused }) => {
              const Icon = focused ? item.icon.active : item.icon.inactive
              const size = index === 3 ? 28 : 22
              return (
                <Icon
                  height={size}
                  width={size}
                />
              )
            }
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default App
