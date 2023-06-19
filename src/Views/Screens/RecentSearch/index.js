import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {leftarrowImage} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const RecentSearch = () => {
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
          Recent searches
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={{padding: 20}}>Empty search</Text>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default RecentSearch;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
