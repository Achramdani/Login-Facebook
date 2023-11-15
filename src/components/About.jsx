import { StyleSheet, Text, View,Image,  } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <View style={{backgroundColor:'orange', width:110, height:180, borderRadius:15, marginLeft:10,marginTop:10, elevation:3}}>
        <Image source={require('../images/aa.jpg')} 
        style={{width:110, height:180, borderRadius:15,}}/>
      </View>
      <View style={{backgroundColor:'orange', width:110, height:180, borderRadius:15, marginLeft:5,marginTop:10}}>
      <Image source={require('../images/bb.png')} 
        style={{width:110, height:180, borderRadius:15,}}/>
      </View>
      <View style={{backgroundColor:'orange', width:110, height:180, borderRadius:15, marginLeft:5,marginTop:10}}>
      <Image source={require('../images/cc.png')} 
        style={{width:110, height:180, borderRadius:15,}}/>
      </View>
      <View style={{backgroundColor:'orange', width:110, height:180, borderRadius:15, marginLeft:5,marginTop:10}}>
      <Image source={require('../images/dd.jpg')} 
        style={{width:110, height:180, borderRadius:15,}}/>
      </View>
      <View style={{backgroundColor:'orange', width:110, height:180, borderRadius:15, marginLeft:5,marginTop:10}}>
      <Image source={require('../images/ee.jpg')} 
        style={{width:110, height:180, borderRadius:15,}}/>
      </View>
      </View>
      
      <View style={{marginTop:40, marginLeft:10,flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../images/aa.jpg')} style={{width:80,height:80, borderRadius:40}}/>
        <Text style={{marginLeft:15, fontWeight:'bold', color:'black'}}>Ach. RAMDANI FIRDAUSI</Text>
      </View>
      <View style={{marginTop:40, marginLeft:10,flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../images/bb.png')} style={{width:80,height:80, borderRadius:40}}/>
        <Text style={{marginLeft:15, fontWeight:'bold', color:'black'}}>THUFAEL MIRZA ALAVI</Text>
      </View>
      <View style={{marginTop:40, marginLeft:10,flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../images/cc.png')} style={{width:80,height:80, borderRadius:40}}/>
        <Text style={{marginLeft:15, fontWeight:'bold', color:'black'}}>ARI SUGIANTO</Text>
      </View>
      <View style={{marginTop:40, marginLeft:10,flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../images/dd.jpg')} style={{width:80,height:80, borderRadius:40}}/>
        <Text style={{marginLeft:15, fontWeight:'bold', color:'black'}}>MULYADI</Text>
      </View>
      <View style={{marginTop:40, marginLeft:10,flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../images/ee.jpg')} style={{width:80,height:80, borderRadius:40}}/>
        <Text style={{marginLeft:15, fontWeight:'bold', color:'black'}}>MOH. MUHLIS</Text>
      </View>
      
     
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#dbe4f3'
  }
})