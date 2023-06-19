import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {copyImage, leftarrowImage} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const LinkV = () => {
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
          Links you've visited
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
              source={copyImage}
              style={{
                height: 40,
                width: 40,
                alignSelf: 'center',
                marginTop: 22,
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
          No link history
        </Text>
        <Text style={{fontSize: 15, textAlign: 'center'}}>
          There is no links within your
          {'\n'}
          link history.
        </Text>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default LinkV;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
