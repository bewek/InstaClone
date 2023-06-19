import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {downloadImage, leftarrowImage} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';
import Button from '../../Components/Button';

const Download = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', margin: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Activity');
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
          Download your information
        </Text>
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            height: 90,
            width: 90,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: 'black',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Image
              source={downloadImage}
              style={{
                height: 60,
                width: 60,
                alignSelf: 'center',
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            textAlign: 'center',
            margin: 15,
          }}>
          Get a copy of what you've
          {'\n'}
          shared on InstaClone
        </Text>
        <Text style={{fontSize: 15, textAlign: 'center'}}>
          We'll email you a link to a file with your photos,
          {'\n'}
          comments, profile information and more. It may take
          {'\n'}
          up to 14 days to collect this data and send it to you.
        </Text>

        <Text
          style={{
            color: 'black',
            fontSize: 15,
            paddingHorizontal: 20,
            margin: 15,
            borderBottomColor: 'blue',
            borderBottomWidth: 1,
          }}>
          bibek@gmail.com
        </Text>

        <Button name={'Request download'} />
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
