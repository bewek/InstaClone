import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {leftarrowImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';

const AddAccount = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{flexDirection: 'row', margin: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Image source={leftarrowImage} style={{height: 30, width: 30}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'black',
            paddingHorizontal: 30,
          }}>
          Add account
        </Text>
      </View>
      <Button
        name={'Log in to existing account'}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUpPhone');
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#03a9f4',
            textAlign: 'center',
          }}>
          Create new account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAccount;

const styles = StyleSheet.create({});
