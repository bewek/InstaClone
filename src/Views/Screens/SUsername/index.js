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
import commonStyles from '../css';
import Button from '../../Components/Button';
import {leftarrowImage} from '../../../Assets/Images';

const SUsername = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SBirthday');
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
          Create a Username
        </Text>
        <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
          Add a username or use our suggestion. Youcan change this at any time.
        </Text>
        <TextInput style={commonStyles.input} placeholder="Username" />
        <Button
          name={'Next'}
          onPress={() => {
            navigation.navigate('SAgree');
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

export default SUsername;

const styles = StyleSheet.create({});
