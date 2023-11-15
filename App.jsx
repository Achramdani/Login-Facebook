import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './src/components/login';
import About from './src/components/About';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Detail from './src/components/Detail';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
      <Tab.Screen name="Login" component={Login} 
      options={{
        
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="login"  size={24} />
          ),
      }}/>
      <Tab.Screen name="Home" component={About} 
      options={{
        
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="shield-home"  size={24} />
          ),
      }}/>
      <Tab.Screen name="Detail" component={Detail}
      options={{
        
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-details-outline"  size={24} />
          ),
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
