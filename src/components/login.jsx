import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import About from './About';

const Login = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');

  const handleLogin = () => {
    // Simulasikan logika autentikasi
    const isAuthenticated = true; // Ganti dengan logika autentikasi sesuai kebutuhan

    if (isAuthenticated) {
      // Jika login berhasil, navigasi ke layar 'About'
      navigation.navigate('Home');
    } else {
      // Jika login gagal, tampilkan pesan atau lakukan tindakan lainnya
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../images/facebook.png')} style={styles.logo} />
        <Text style={styles.logoText}>FACEBOOK</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(newPassword) => setPassword(newPassword)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbe4f3',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop: 50,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Login;
