import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  archiveImage,
  calenderImage,
  leftarrowImage,
  locationImage,
  threedotsImage,
} from '../../../Assets/Images';
import ArchiveImage from './ArchiveImage';
import {useNavigation} from '@react-navigation/native';

const Archive = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#d9d9d9',
          height: 45,
          justifyContent: 'space-between',
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
            paddingHorizontal: 20,
            flex: 1,
          }}>
          Stories archive
        </Text>
        <TouchableOpacity>
          <Image source={threedotsImage} style={{height: 25, width: 25}} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderBottomColor: '#d9d9d9',
            borderBottomWidth: 1,
          }}>
          <Image source={archiveImage} style={styles.image} />
          <Image source={calenderImage} style={styles.image} />
          <Image source={locationImage} style={styles.image} />
        </View>
        <ArchiveImage />
      </ScrollView>
    </View>
  );
};

export default Archive;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
});
