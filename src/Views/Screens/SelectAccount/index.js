import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {leftarrowImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import Buttons from '../../Components/Buttons';
import Button from '../../Components/Button';

const SelectAccount = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FindAccount');
        }}>
        <Image
          source={leftarrowImage}
          style={{height: 20, width: 30, marginLeft: 20, margin: 10}}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
          margin: 10,
          paddingHorizontal: 10,
        }}>
        Select your account
      </Text>
      <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
        Select account that matches your username, email, or phone number.
      </Text>

      <Buttons name={'9812345678'} style={styles.butt} />
      <Buttons name={'bibek@gmail.com'} style={styles.butt} />
      <Button
        name={'Select account'}
        onPress={() => {
          navigation.navigate('ResetPassword');
        }}
      />
    </View>
  );
};

export default SelectAccount;

const styles = StyleSheet.create({
  butt: {
    width: '60%',
    alignSelf: 'center',
  },
});
