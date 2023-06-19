import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  greaterthanImage,
  leftarrowImage,
  loginImage,
  sapImage,
} from '../../../Assets/Images';

const ConnectedE = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountCenter');
        }}>
        <Image source={leftarrowImage} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>
        Connected
        {'\n'}
        experiences
      </Text>

      <View style={styles.container}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 15,
            }}>
            <Image source={sapImage} style={{height: 25, width: 25}} />
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: '600',
                flex: 1,
                paddingHorizontal: 20,
              }}>
              Sharing across Profiles
            </Text>
            <Image
              source={greaterthanImage}
              style={{height: 20, width: 20, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 15,
            }}>
            <Image source={loginImage} style={{height: 25, width: 25}} />
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: '600',
                flex: 1,
                paddingHorizontal: 20,
              }}>
              Logging in with accounts
            </Text>
            <Image
              source={greaterthanImage}
              style={{height: 20, width: 20, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConnectedE;

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
    height: 120,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
