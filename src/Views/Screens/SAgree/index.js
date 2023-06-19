import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';
import {leftarrowImage} from '../../../Assets/Images';

const SAgree = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SUsername');
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
          Agree to InstaClone's terms and policies
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#263238',
            paddingHorizontal: 20,
            marginBottom: 20,
          }}>
          People who use our service may have uploaded your contact information
          to InstaClone. Learn More
        </Text>

        <Text
          style={{
            fontSize: 15,
            color: '#263238',
            paddingHorizontal: 20,
            marginBottom: 20,
          }}>
          By tapping I agree, you agree to create an account and to InstaClone's
          Terms, Privacy Policy and Cookies Policy
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#263238',
            paddingHorizontal: 20,
            marginBottom: 20,
          }}>
          The Privacy Policy describes the ways we can use the information we
          collect when you create an account. For example, we use this
          information to provide, personalize and improve our products,
          including ads.
        </Text>
        <Button
          name={'I agree'}
          onPress={() => {
            navigation.navigate('Home');
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

export default SAgree;

const styles = StyleSheet.create({});
