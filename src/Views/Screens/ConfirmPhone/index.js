import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {leftarrowImage} from '../../../Assets/Images';
import Button from '../../Components/Button';
import Buttons from '../../Components/Buttons';
import commonStyles from '../css';
import {useNavigation} from '@react-navigation/native';

const ConfirmPhone = () => {
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

      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
          margin: 10,
          paddingHorizontal: 10,
        }}>
        Enter the confirmation code
      </Text>
      <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
        To confirm your account enter the 6-digit code we sent to 98********
      </Text>
      <TextInput style={commonStyles.input} placeholder="Confirmation code" />
      <Button
        name={'Next'}
        onPress={() => {
          navigation.navigate('SName');
        }}
      />
      <Buttons
        name={"I didn't get the code"}
        onPress={() => {
          navigation.navigate('NotCode');
        }}
      />
    </View>
  );
};

export default ConfirmPhone;

const styles = StyleSheet.create({});
