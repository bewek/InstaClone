import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import commonStyles from '../css';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';
import {leftarrowImage} from '../../../Assets/Images';

const SBirthday = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SSaveInfo');
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
          What's your Birthday?
        </Text>
        <Text style={{fontSize: 15, color: '#263238', paddingHorizontal: 20}}>
          Use your own birthday, even if this account is for a business, a pet
          or something else. No one will see this on your profile.
        </Text>
        <TextInput style={commonStyles.input} placeholder="Birthday" />
        <Button
          name={'Next'}
          onPress={() => {
            navigation.navigate('SUsername');
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

export default SBirthday;

const styles = StyleSheet.create({});
