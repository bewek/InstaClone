import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {greaterthanImage, leftarrowImage} from '../../../Assets/Images';

const YIAP = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountCenter');
        }}>
        <Image source={leftarrowImage} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>Your information and permissions</Text>

      <View
        style={[
          styles.input,
          {flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10},
        ]}>
        <TextInput
          placeholder="Search history"
          style={{flex: 1, fontSize: 18, fontWeight: '600', color: 'black'}}
        />
        <TouchableOpacity>
          <Image source={greaterthanImage} style={{height: 20, width: 20}} />
        </TouchableOpacity>
      </View>

      <Text style={{paddingHorizontal: 20}}>
        Manage your search history across Meta technologies.
      </Text>
    </View>
  );
};

export default YIAP;

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
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: '90%',
    height: 50,
    margin: 8,
    marginLeft: 15,
  },
});
