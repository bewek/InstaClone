import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {leftarrowImage} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const Theme = () => {
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
          Set Theme
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
            <Text style={styles.text}>Light</Text>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 30,
                borderColor: 'grey',
                borderWidth: 2,
              }}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 15,
            }}>
            <Text style={styles.text}>Dark</Text>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 30,
                borderColor: 'grey',
                borderWidth: 2,
              }}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 15,
            }}>
            <Text style={styles.text}>System default</Text>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 30,
                borderColor: 'grey',
                borderWidth: 2,
                backgroundColor: '#0d47a1',
              }}></View>
          </View>
        </TouchableOpacity>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Theme;

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
