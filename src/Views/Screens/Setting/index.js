import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  aboutImage,
  addImage,
  bellImage,
  helpImage,
  leftarrowImage,
  lockImage,
  prefImage,
  searchiconImage,
  supImage,
  themeImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import SCard from './SCard';
import Settline from './Settline';
import BottomTab from '../../Components/BottomTab';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 15}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image source={leftarrowImage} style={styles.image} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              paddingHorizontal: 30,
            }}>
            Settings
          </Text>
        </View>
        <View
          style={[
            styles.input,
            {
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            },
          ]}>
          <TouchableOpacity>
            <Image source={searchiconImage} style={{height: 20, width: 20}} />
          </TouchableOpacity>
          <TextInput placeholder="Search" style={{flex: 1, marginLeft: 20}} />
        </View>

        <View style={{flex: 1}}>
          <SCard />
        </View>
        <Text style={{fontSize: 18, color: 'black', margin: 15}}>
          InstaClone Settings
        </Text>

        <View style={{flex: 1}}>
          <Settline />
        </View>

        <Text
          style={{
            fontSize: 16,
            color: 'black',
            margin: 10,
            paddingHorizontal: 10,
          }}>
          Logins
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddAccount');
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#03a9f4',
              paddingHorizontal: 10,
              margin: 10,
            }}>
            Add account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#03a9f4',
              paddingHorizontal: 10,
              margin: 10,
            }}>
            Log out
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
  input: {
    backgroundColor: '#d9d9d9',
    borderRadius: 12,
    width: '90%',
    height: 45,
    margin: 15,
  },
});
