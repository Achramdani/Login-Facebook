import { StyleSheet, Text, View, Image , TextInput, Button } from 'react-native'
import React ,{ useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/components/About';

const HomeScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [text, setText] = useState('');
  
  return (
    <View style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
         source={require('./src/images/facebook.png')} 
         style={{width: 100, height: 100, marginBottom:20,marginTop:50}}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>FACEBOOK</Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>Login</Text>
      </View>
      <TextInput
        style={{
          backgroundColor: '#FFFFFF',
          marginHorizontal: 20, 
          borderRadius: 15,
          marginBottom:10,
      }}
        placeholder="Email"
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
      <TextInput
        style={{
          backgroundColor: '#FFFFFF',
          marginHorizontal: 20, 
          borderRadius: 15,
          marginBottom: 20
      }}
        placeholder="Password"
        onChangeText={(newPassword) => setPassword(newPassword)}
        value={password}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('About')}
      />
    </View>
    
  );
}

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false
        }} />
        <Stack.Screen name="About" component={About} options={{
          headerShown:false
        }}  />
      </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default App
