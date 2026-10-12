import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WelcomeScreen from './components/WelcomeScreen'; 
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Welcome',
  screens: {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}