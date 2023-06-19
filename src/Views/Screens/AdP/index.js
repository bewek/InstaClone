import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {greaterthanImage, leftarrowImage} from '../../../Assets/Images';
import AdpCard from './AdpCard';

const AdP = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountCenter');
        }}>
        <Image source={leftarrowImage} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>Ad Preferences</Text>

      <AdpCard />

      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: 'black',
          paddingHorizontal: 20,
        }}>
        Common questions
      </Text>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 20, color: 'black'}}>
            What information is used to
            {'\n'}
            show me ads?
          </Text>
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
          <Text style={{fontSize: 20, color: 'black'}}>
            Does Meta sell my data?
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};

export default AdP;

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
    height: 140,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
});
