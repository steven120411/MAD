import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 15 }}>
      <Text>Welcome to the App!</Text>
      <Button 
        title="Go to Login" 
        onPress={() => navigation.navigate('Login')} 
      />
      <Button 
        title="Go to Sign Up" 
        onPress={() => navigation.navigate('SignUp')} 
      />
    </View>
  );
}