import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {leftarrowImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import commonStyles from '../css';
import Button from '../../Components/Button';

const FindAccount = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
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
        Find your account
      </Text>
      <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
        Enter your username, email, or phone number.
      </Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Username, email, or mobile number"
      />
      <Button
        name={'Find account'}
        onPress={() => {
          navigation.navigate('SelectAccount');
        }}
      />
    </View>
  );
};

export default FindAccount;

const styles = StyleSheet.create({});
