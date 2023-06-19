import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  facebookImage,
  greaterthanImage,
  leftarrowImage,
} from '../../../Assets/Images';

const PersonalDetails = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountCenter');
        }}>
        <Image source={leftarrowImage} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>Personal Details</Text>
      <Text style={{fontSize: 15, paddingHorizontal: 20}}>
        Meta uses this information to verify your identity and to keep our
        community safe. You decide what personal details you make visible to
        others.
      </Text>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Contact Info
            </Text>
            <Text style={{fontSize: 15}}>bibek@gmail.com</Text>
            <Text style={{fontSize: 15}}>+9779812345678</Text>
          </View>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Birthday
            </Text>
            <Text style={{fontSize: 15}}>Add your birthday</Text>
          </View>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 15,
          }}>
          <Text
            style={{fontSize: 18, color: 'black', fontWeight: '600', flex: 1}}>
            Birthday
          </Text>
          <Image
            source={facebookImage}
            style={{
              height: 30,
              width: 30,
              alignSelf: 'center',
              marginRight: 15,
            }}
          />
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Account ownership and control
            </Text>
            <Text style={{fontSize: 15}}>
              Manage your data, modify your
              {'\n'}
              legacy contact, deactivate or delete
              {'\n'}
              your accounts and profiles.
            </Text>
          </View>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    margin: 15,
  },
  text: {
    fontSize: 27,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
  container: {
    height: 350,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
});
