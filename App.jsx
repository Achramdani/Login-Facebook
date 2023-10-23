import { StyleSheet, Text, View, Image , TextInput } from 'react-native'
import React ,{ useState, useEffect} from 'react'
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={{flex: 1, backgroundColor: '#dbe4f3'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
         source={require('./src/images/facebook.png')} 
         style={{width: 100, height: 100}}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>FACEBOOK</Text>
        <Text style={{marginTop: 10, fontWeight: 'bold'}}>Login</Text>
      </View>
      <TextInput
        value={email}
        style={{
          backgroundColor: '#FFFFFF',
          marginHorizontal: 20, 
          borderRadius: 15,
      }}
      placeholder="Masukkan Email"/>
      <TextInput value={password} />
    </View>
  );
};

export default App

const styles = StyleSheet.create({
  
})