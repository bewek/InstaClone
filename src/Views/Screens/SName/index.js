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
import Button from '../../Components/Button';
import commonStyles from '../css';

const SName = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ConfirmPhone');
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
          What's your name?
        </Text>
        <TextInput style={commonStyles.input} placeholder="Full name" />
        <Button
          name={'Next'}
          onPress={() => {
            navigation.navigate('SPassword');
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

export default SName;

const styles = StyleSheet.create({});
