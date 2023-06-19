import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  activityImage,
  archiveImage,
  cfImage,
  digitalImage,
  leftarrowImage,
  msgngImage,
  qrImage,
  settingsImage,
  starImage,
  wishImage,
} from '../../../Assets/Images';

const OptionSelect = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={settingsImage} style={styles.image} />
          <Text style={styles.text}>Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Activity');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={activityImage} style={styles.image} />
          <Text style={styles.text}>Your activity</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Archive');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={archiveImage} style={styles.image} />

          <Text style={styles.text}>Archive</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ShareProfile');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={qrImage} style={styles.image} />

          <Text style={styles.text}>QR Code</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Saved');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={wishImage} style={styles.image} />

          <Text style={styles.text}>Saved</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Digital');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={digitalImage} style={styles.image} />

          <Text style={styles.text}>Digital collectibles</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CloseFriends');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={cfImage} style={styles.image} />

          <Text style={styles.text}>Close friends</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Favorites');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={starImage} style={styles.image} />

          <Text style={styles.text}>Favorites</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('UpdateMessaging');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={msgngImage} style={styles.image} />

          <Text style={styles.text}>Update messaging</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OptionSelect;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
    paddingHorizontal: 20,
  },
});
