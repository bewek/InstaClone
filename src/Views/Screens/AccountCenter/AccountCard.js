import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  accountImage,
  adImage,
  contactImage,
  contImage,
  greaterthanImage,
  pasImage,
  payImage,
  yiapImage,
} from '../../../Assets/Images';

const AccountCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Accounts');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image source={accountImage} style={styles.image} />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
              margin: 5,
              flex: 1,
              paddingHorizontal: 10,
            }}>
            Accounts
          </Text>
          <Image source={greaterthanImage} style={styles.img} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PersonalDetails');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image source={contImage} style={styles.image} />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
              margin: 5,
              flex: 1,
              paddingHorizontal: 10,
            }}>
            Personal details
          </Text>
          <Image source={greaterthanImage} style={styles.img} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PasswordS');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image source={pasImage} style={styles.image} />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
              margin: 5,
              flex: 1,
              paddingHorizontal: 10,
            }}>
            Password and security
          </Text>
          <Image source={greaterthanImage} style={styles.img} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('YIAP');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <Image source={yiapImage} style={styles.image} />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
              margin: 10,
              flex: 1,
              paddingHorizontal: 10,
            }}>
            Your information and permissions
          </Text>
          <Image source={greaterthanImage} style={styles.img} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AdP');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <Image source={adImage} style={styles.image} />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
              margin: 10,
              flex: 1,
              paddingHorizontal: 10,
            }}>
            Ad preferences
          </Text>
          <Image source={greaterthanImage} style={styles.img} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Payments');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
          }}>
          <Image source={payImage} style={styles.image} />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
              margin: 10,
              flex: 1,
              paddingHorizontal: 10,
            }}>
            Payments
          </Text>
          <Image source={greaterthanImage} style={styles.img} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 5,
  },
  image: {
    height: 25,
    width: 25,
    alignSelf: 'center',
    marginLeft: 10,
  },
  img: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
});
