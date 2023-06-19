import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Buttons from '../../Components/Buttons';
import {leftarrowImage} from '../../../Assets/Images';

const NotCode = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUpPhone');
        }}>
        <Image
          source={leftarrowImage}
          style={{height: 20, width: 30, marginLeft: 20, margin: 10}}
        />
      </TouchableOpacity>
      <Buttons
        name={'Resend Code'}
        onPress={() => {
          navigation.navigate('ConfirmPhone');
        }}
      />
      <Buttons
        name={'Already have an account'}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default NotCode;
