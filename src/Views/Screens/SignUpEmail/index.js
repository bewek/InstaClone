import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import commonStyles from '../css';
import Button from '../../Components/Button';
import {leftarrowImage} from '../../../Assets/Images';
import Buttons from '../../Components/Buttons';

const SignUpEmail = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Image
          source={leftarrowImage}
          style={{height: 20, width: 30, marginLeft: 20, margin: 10}}
        />
      </TouchableOpacity>

      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            margin: 10,
            paddingHorizontal: 10,
          }}>
          What's your email?
        </Text>
        <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
          Enter the email where you can be contacted. No one will see this on
          your profile
        </Text>
        <TextInput style={commonStyles.input} placeholder="Email" />
        <Button
          name={'Next'}
          onPress={() => {
            navigation.navigate('ConfirmEmail');
          }}
        />
        <Buttons
          name={'Sign up with mobile number'}
          onPress={() => {
            navigation.navigate('SignUpPhone');
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text
          style={{
            fontSize: 15,
            color: '#004dcf',
            textAlign: 'center',
            marginBottom: 15,
          }}>
          Already have an account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpEmail;

const styles = StyleSheet.create({});
