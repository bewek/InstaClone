import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  archiveImage,
  calenderImage,
  copyImage,
  deleteImage,
  downloadImage,
  greaterthanImage,
  interImage,
  pnvImage,
  searchiconImage,
  timeImage,
} from '../../../Assets/Images';

const ActivityCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TimeSpent');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image source={timeImage} style={styles.image} />
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text style={styles.title}>Time Spent</Text>
              <Text style={styles.desc}>
                See how much time you actually spend on InstaClone each day.
              </Text>
            </View>
            <Image source={greaterthanImage} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PhotosAV');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image source={pnvImage} style={styles.image} />
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text style={styles.title}>Photos and videos</Text>
              <Text style={styles.desc}>
                View archive or delete photos and videos you've shared.
              </Text>
            </View>
            <Image source={greaterthanImage} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Interactions');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image source={interImage} style={styles.image} />
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text style={styles.title}>InterActions</Text>
              <Text style={styles.desc}>
                Review and delete likes, comments, and your other interactions.
              </Text>
            </View>
            <Image source={greaterthanImage} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AHistory');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image source={calenderImage} style={styles.image} />
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text style={styles.title}>Account History</Text>
              <Text style={styles.desc}>
                Review changes you've made to your account since you created it.
              </Text>
            </View>
            <Image source={greaterthanImage} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RecentSearch');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image source={searchiconImage} style={styles.image} />
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text style={styles.title}>Recent Searches</Text>
              <Text style={styles.desc}>
                Review things you've searched for on InstaClone and clear your
                search history.
              </Text>
            </View>
            <Image source={greaterthanImage} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LinkV');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image source={copyImage} style={styles.image} />
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text style={styles.title}>Link you've visited</Text>
              <Text style={styles.desc}>
                See which links you've visited recently.
              </Text>
            </View>
            <Image source={greaterthanImage} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Archive');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image source={archiveImage} style={styles.image} />
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text style={styles.title}>Archived</Text>
              <Text style={styles.desc}>
                View and manage content you've archived.
              </Text>
            </View>
            <Image source={greaterthanImage} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Deleted');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image source={deleteImage} style={styles.image} />
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text style={styles.title}>Recently Deleted</Text>
              <Text style={styles.desc}>
                View and manage content you've recently deleted.
              </Text>
            </View>
            <Image source={greaterthanImage} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Download');
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <Image source={downloadImage} style={styles.image} />
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text style={styles.title}>Download your information</Text>
              <Text style={styles.desc}>
                Download a copy of the information you've shared with
                InstaClone.
              </Text>
            </View>
            <Image source={greaterthanImage} style={styles.img} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({
  card: {
    height: 90,
    borderColor: '#d9d9d9',
    borderWidth: 1,
  },
  image: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  title: {
    fontSize: 17,
    color: 'black',
  },
  desc: {
    fontSize: 14,
  },
  img: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
});
