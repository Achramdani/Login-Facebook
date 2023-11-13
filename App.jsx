import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './src/components/login';
import About from './src/components/About';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Detail from './src/components/Detail';

const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeStack.Navigator initialRouteName={userIsLoggedIn ? 'Main' : 'Login'} screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="About" component={About} />
  </HomeStack.Navigator>
    
  );
};

const App = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    // Gantilah logika ini sesuai dengan kondisi login yang sesungguhnya
    // Contoh: Cek apakah ada token atau sesi yang sudah disimpan
    const checkLoginStatus = async () => {
      // Simulasi: Menggunakan setTimeout untuk menunjukkan proses cek login
      setTimeout(() => {
        setUserIsLoggedIn(true); // Ganti dengan logika autentikasi yang sesungguhnya
      }, 1000);
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
