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
import {leftarrowImage, onoffImage} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const Notifications = () => {
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
          Notifications
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#d9d9d9',
            borderBottomWidth: 1,
          }}>
          <Text style={styles.text}>Push Notifications</Text>
          <TouchableOpacity>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.text, {paddingHorizontal: 10}]}>
                Pause All
              </Text>
              <TouchableOpacity>
                <Image
                  source={onoffImage}
                  style={[styles.image, {alignSelf: 'center', marginRight: 30}]}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Post, Stories and Comments</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Following and Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Calls</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Live and Reels</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>Fundraises</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>From InstaClone</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Other Notification Types</Text>
        <TouchableOpacity>
          <Text style={styles.text}>Email Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Shopping</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Notifications;

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
    padding: 8,
  },
});
