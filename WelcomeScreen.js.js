import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function WelcomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.phoneFrame}>
        
        <View style={styles.topBlueHeader}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backText}>{'< Back'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back</Text>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.optionsRow}>
            <View style={styles.rememberBox}>
              <View style={styles.square} />
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotText}>forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Sign in with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.iconCircle}>
              <FontAwesome name="facebook" size={18} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <FontAwesome name="twitter" size={18} color="#1DA1F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <FontAwesome name="google" size={18} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconCircle}>
              <FontAwesome name="apple" size={18} color="#000000" />
            </TouchableOpacity>
          </View>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8da0c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneFrame: {
    width: '100%',
    maxWidth: 360,
    height: 720,
    backgroundColor: '#2b4c7e',
    borderRadius: 30,
    overflow: 'hidden',
  },
  topBlueHeader: {
    height: 140,
    backgroundColor: '#2b4c7e',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  backText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 20,
  },
  inputBox: {
    width: '100%',
    marginBottom: 14,
  },
  label: {
    fontSize: 11,
    color: '#4a5568',
    marginBottom: 4,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e0',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 13,
  },
  optionsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  rememberBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: '#a0aec0',
    borderRadius: 3,
    marginRight: 6,
  },
  rememberText: {
    fontSize: 11,
    color: '#718096',
  },
  forgotText: {
    fontSize: 11,
    color: '#3b5998',
    fontWeight: 'bold',
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#4c6ef5',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 18,
  },
  signInText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e8f0',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 11,
    color: '#a0aec0',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#718096',
  },
  signUpText: {
    fontSize: 11,
    color: '#3b5998',
    fontWeight: 'bold',
  },
});