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
import {leftarrowImage} from '../../../Assets/Images';
import commonStyles from '../css';
import Button from '../../Components/Button';

const SPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SName');
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
          Create a password
        </Text>
        <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
          Create a password with at least 6 letters and numbers. It should be
          something others can't guess.
        </Text>
        <TextInput style={commonStyles.input} placeholder="Password" />
        <Button
          name={'Next'}
          onPress={() => {
            navigation.navigate('SSaveInfo');
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

export default SPassword;

const styles = StyleSheet.create({});
