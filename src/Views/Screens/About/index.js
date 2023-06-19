import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {greaterthanImage, leftarrowImage} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const About = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
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
          About
        </Text>
      </View>

      <View style={{flex: 1}}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 15,
            }}>
            <Text style={styles.text}>Privacy Policy</Text>
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
            <Text style={styles.text}>Terms of Use</Text>
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
            <Text style={styles.text}>Open source libraries</Text>
            <Image
              source={greaterthanImage}
              style={{height: 20, width: 20, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 17,
    color: 'black',
    paddingHorizontal: 10,
  },
});
