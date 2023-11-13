import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>FACEBOOK</Text>
      <View></View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        resizeMode:'cover'
    }
})