import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {leftarrowImage} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const Preferences = () => {
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
          Preferences
        </Text>
      </View>

      <ScrollView>
        <View style={{flex: 1}}>
          <TouchableOpacity>
            <Text style={styles.text}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Close Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Account Status</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Avatar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Captions</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Browser settings</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Sensitive content control</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Contacts syncing</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Sharing to other apps</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Cellular data use</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Original posts</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Request verification</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Review activity</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Branded content</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.texts}>Switch to professional account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.texts}>Add new professional account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Preferences;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
    margin: 10,
    padding: 5,
  },
  texts: {
    fontSize: 16,
    color: '#03a9f4',
    paddingHorizontal: 10,
    margin: 10,
    padding: 5,
  },
});
