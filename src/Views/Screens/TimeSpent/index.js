import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  aboutImage,
  greaterthanImage,
  leftarrowImage,
  weekImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const TimeSpent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          justifyContent: 'space-between',
        }}>
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
            flex: 1,
          }}>
          Time spent
        </Text>
        <Image source={aboutImage} style={{height: 30, width: 30}} />
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: 'black',
          paddingHorizontal: 20,
        }}>
        Time on InstaClone
      </Text>

      <Text
        style={{
          fontSize: 40,
          fontWeight: '600',
          color: '#ffc107',
          paddingHorizontal: 20,
          textAlign: 'center',
          margin: 10,
        }}>
        2h 30m
      </Text>

      <Text style={{fontSize: 17, color: 'black', textAlign: 'center'}}>
        Daily average
      </Text>

      <Text style={{fontSize: 16, textAlign: 'center'}}>
        Average time you spent per day using the
        {'\n'}
        InstaClone app on this device in the last
        {'\n'}
        week
      </Text>

      <View style={{borderBottomWidth: 1, borderBottomColor: '#d9d9d9'}}>
        <Image
          source={weekImage}
          style={{height: 130, width: '90%', margin: 15}}
        />
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: 'black',
          paddingHorizontal: 10,
          margin: 10,
        }}>
        Manage your time
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
          paddingHorizontal: 5,
        }}>
        <View>
          <Text style={{fontSize: 18, color: 'black'}}>
            Set remainder to take breaks
          </Text>
          <Text style={{fontSize: 15}}>
            Schedule a remainder to take regular breaks
            {'\n'}
            from scrolling.
          </Text>
        </View>
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
          paddingHorizontal: 5,
        }}>
        <View>
          <Text style={{fontSize: 18, color: 'black'}}>
            Set daily time limit
          </Text>
          <Text style={{fontSize: 15}}>
            Limit the time you spend on InstaClone each
            {'\n'}
            day by scheduling a remainder to close the app.
          </Text>
        </View>
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
          paddingHorizontal: 5,
        }}>
        <View>
          <Text style={{fontSize: 18, color: 'black'}}>
            Notification settings
          </Text>
          <Text style={{fontSize: 15}}>
            Choose which InstaClone notifications to get.
            {'\n'}
            You can also mute push notifications.
          </Text>
        </View>
        <Image
          source={greaterthanImage}
          style={{height: 20, width: 20, alignSelf: 'center'}}
        />
      </View>
    </View>
  );
};

export default TimeSpent;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
