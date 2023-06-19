import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {leftarrowImage} from '../../../Assets/Images';
import ActivityCard from './ActivityCard';

const Activity = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#d9d9d9',
          height: 45,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image source={leftarrowImage} style={{height: 30, width: 30}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'black',
            paddingHorizontal: 30,
          }}>
          Your activity
        </Text>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '500',
              color: 'black',
              textAlign: 'center',
            }}>
            One place to manage your activity
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
            }}>
            We've added more tools for you to review
            {'\n'}
            and manage your photos, videos, account
            {'\n'}
            and activity on InstaClone.
          </Text>
        </View>
        <View style={{flex: 1}}>
          <ActivityCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({});
