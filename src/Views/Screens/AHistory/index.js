import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  accountImage,
  commentImage,
  leftarrowImage,
} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const AHistory = () => {
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
          Account history
        </Text>
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              paddingHorizontal: 20,
              fontWeight: '600',
            }}>
            Newest to oldest
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              paddingHorizontal: 10,
            }}>
            Sort & filter
          </Text>
        </View>

        <View
          style={{
            height: 130,
            borderColor: '#d9d9d9',
            borderWidth: 1,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'black',
              paddingHorizontal: 20,
              fontWeight: '500',
              margin: 15,
              textAlign: 'center',
            }}>
            About account history
          </Text>
          <Text style={{fontSize: 15, textAlign: 'center'}}>
            Review changes you've made to your
            {'\n'}
            accounts since you created it.
          </Text>
        </View>

        <View
          style={{
            height: 130,
            borderColor: '#d9d9d9',
            borderWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              margin: 10,
              paddingHorizontal: 10,
            }}>
            This week
          </Text>

          <View style={{flexDirection: 'row', margin: 10}}>
            <Image
              source={commentImage}
              style={{height: 25, width: 25, alignSelf: 'center'}}
            />
            <View style={{paddingHorizontal: 20}}>
              <Text style={{fontSize: 17, color: 'black'}}>Messaging</Text>
              <Text>You just messaged jenny345</Text>
              <Text>1hr</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 130,
            borderColor: '#d9d9d9',
            borderWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              margin: 10,
              paddingHorizontal: 10,
            }}>
            Earlier
          </Text>

          <View style={{flexDirection: 'row', margin: 10}}>
            <Image
              source={accountImage}
              style={{height: 25, width: 25, alignSelf: 'center'}}
            />
            <View style={{paddingHorizontal: 20}}>
              <Text style={{fontSize: 17, color: 'black'}}>Messaging</Text>
              <Text>You just messaged changed your name</Text>
              <Text>1hr</Text>
            </View>
          </View>
        </View>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default AHistory;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
