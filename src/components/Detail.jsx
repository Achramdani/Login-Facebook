// Detail.js

import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Detail = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity>
      <View style={styles.item}>
        <Text style = {styles.text}>
        <MaterialCommunityIcons name="cog"  size={30} />
        Pengaturan dan Privasi </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.item}>
        <Text style = {styles.text}>
        <MaterialCommunityIcons name="account-box"  size={30} />
        Pengaturan</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.item}>
        <Text style = {styles.text}>
        <MaterialCommunityIcons name="security"  size={30} />  
        Keamanan</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.item}>
        <Text style = {styles.text}>
        <MaterialCommunityIcons name="alert-octagon"  size={30} />  
        Laporkan masalah</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.item}>
        <Text style = {styles.text}>
        <MaterialCommunityIcons name="help-circle-outline"  size={30} />  
        Bantuan & dukungan</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.item}>
        <Text style = {styles.text}>
        <MaterialCommunityIcons name="book-open-variant"  size={30} />  
        Kotak masuk & dukungan</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.item}>
        <Text style = {styles.text}>
        <MaterialCommunityIcons name="file-document-edit"  size={30} />  
        Ketentuan & kebijakan</Text>
      </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text :{
    fontSize: 20
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#dbe4f3',
  },
  item: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

export default Detail;
