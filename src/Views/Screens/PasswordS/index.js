import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {greaterthanImage, leftarrowImage} from '../../../Assets/Images';
import Security from './Security';

const PasswordS = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountCenter');
        }}>
        <Image source={leftarrowImage} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>Password and security</Text>

      <Text style={styles.texts}>Login & recovery</Text>
      <Text
        style={{
          fontSize: 15,

          paddingHorizontal: 20,
        }}>
        Manage your passwords, login preferences and recovery methods.
      </Text>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
            Change Password
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
            Two-factor authentication
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
            Saved login
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </View>

      <Security />
    </View>
  );
};

export default PasswordS;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    margin: 15,
  },
  text: {
    fontSize: 27,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
  texts: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
  container: {
    height: 170,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
});
