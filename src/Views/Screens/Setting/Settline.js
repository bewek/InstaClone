import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  aboutImage,
  addImage,
  bellImage,
  helpImage,
  lockImage,
  prefImage,
  supImage,
  themeImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const Settline = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FollowAndInvite');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={addImage} style={styles.image} />
          <Text style={styles.text}>Follow and invite friends</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notifications');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={bellImage} style={styles.image} />
          <Text style={styles.text}>Notifications</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Privacy');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={lockImage} style={styles.image} />

          <Text style={styles.text}>Privacy</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SuperVision');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={supImage} style={styles.image} />

          <Text style={styles.text}>Supervision</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Preferences');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={prefImage} style={styles.image} />

          <Text style={styles.text}>Preferences</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Help');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={helpImage} style={styles.image} />

          <Text style={styles.text}>Help</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('About');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={aboutImage} style={styles.image} />

          <Text style={styles.text}>About</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Theme');
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image source={themeImage} style={styles.image} />

          <Text style={styles.text}>Theme</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Settline;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    marginLeft: 8,
  },
  text: {
    fontSize: 17,
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
});
