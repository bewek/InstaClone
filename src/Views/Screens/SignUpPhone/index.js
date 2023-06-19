import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {leftarrowImage} from '../../../Assets/Images';
import commonStyles from '../css';
import Button from '../../Components/Button';
import Buttons from '../../Components/Buttons';

const SignUpPhone = () => {
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
          What's your mobile
          {'\n'}
          number?
        </Text>
        <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
          Enter the phone number where you can be contacted. No one will see
          this on your profile
        </Text>
        <TextInput style={commonStyles.input} placeholder="Phone Number" />

        <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
          You may receive SMS notifications from us for security and login
          purposes.
        </Text>
        <Button
          name={'Next'}
          onPress={() => {
            navigation.navigate('ConfirmPhone');
          }}
        />
        <Buttons
          name={'Sign up with Email'}
          onPress={() => {
            navigation.navigate('SignUpEmail');
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

export default SignUpPhone;

const styles = StyleSheet.create({
  butt: {
    backgroundColor: 'white',
    border: 'none',
    width: '10%',
  },
});
