import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {greaterthanImage, leftarrowImage} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const Help = () => {
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
          Help
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
            <Text style={styles.text}>Report a Problem</Text>
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
            <Text style={styles.text}>Account Status</Text>
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
            <Text style={styles.text}>Help Center</Text>
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
            <Text style={styles.text}>Apps and Websites</Text>
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
            <Text style={styles.text}>Privacy and Security Help</Text>
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
            <Text style={styles.text}>Support Requests</Text>
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

export default Help;

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
