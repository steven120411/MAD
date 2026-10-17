import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUpScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.phoneFrame}>
        
        <View style={styles.topBlueHeader}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backText}>{''}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Get Started</Text>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Full Name"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

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
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.termsRow}>
            <View style={styles.checkbox} />
            <Text style={styles.termsText}>
              I agree to the processing of <Text>Personal data</Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Sign up with</Text>
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
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signInText}>Sign in</Text>
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
    justify: 'center',
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
    height: 80,
    backgroundColor: '#2b4c7e',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  backText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
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
  termsRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: '#a0aec0',
    borderRadius: 3,
    marginRight: 6,
  },
  termsText: {
    fontSize: 11,
    color: '#718096',
  },
  linkText: {
    color: '#3b5998',
    fontWeight: 'bold',
  },
  signUpButton: {
    width: '100%',
    backgroundColor: '#4c6ef5',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 18,
  },
  signUpButtonText: {
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
  signInText: {
    fontSize: 11,
    color: '#3b5998',
    fontWeight: 'bold',
  },
});