import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';
import commonStyles from '../css';
import {leftarrowImage} from '../../../Assets/Images';

const ResetPassword = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SelectAccount');
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
        Reset your password
      </Text>
      <Text style={{fontSize: 15, color: '#ff1d00', paddingHorizontal: 20}}>
        Create a Password at least 6 characters long.
      </Text>
      <Text
        style={{
          fontSize: 17,
          color: 'black',
          fontWeight: 'bold',
          paddingHorizontal: 20,
          paddingTop: 10,
        }}>
        New Password:
      </Text>
      <TextInput style={commonStyles.input} />
      <Text
        style={{
          fontSize: 17,
          color: 'black',
          fontWeight: 'bold',
          paddingHorizontal: 20,
          paddingTop: 10,
        }}>
        New Password Confirmation:
      </Text>
      <TextInput style={commonStyles.input} />
      <Button
        name={'Reset Password'}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
