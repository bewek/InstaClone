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
import {
  addImage,
  headmanImage,
  houseImage,
  leftarrowImage,
} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';
import FollowCard from './FollowCard';

const data = [
  {
    image: headmanImage,
    title: 'Rann Joy',
    desc: 'Followed by rice-5 and 20 others',
  },
  {
    image: houseImage,
    title: 'Jan Sen',
    desc: 'Followed by rice-5 and 20 others',
  },
  {
    image: houseImage,
    title: 'Jan Sen',
    desc: 'Followed by rice-5 and 20 others',
  },
  {
    image: houseImage,
    title: 'Jan Sen',
    desc: 'Followed by rice-5 and 20 others',
  },
  {
    image: houseImage,
    title: 'Jan Sen',
    desc: 'Followed by rice-5 and 20 others',
  },
  {
    image: houseImage,
    title: 'Jan Sen',
    desc: 'Followed by rice-5 and 20 others',
  },
  {
    image: houseImage,
    title: 'Jan Sen',
    desc: 'Followed by rice-5 and 20 others',
  },
  {
    image: houseImage,
    title: 'Jan Sen',
    desc: 'Followed by rice-5 and 20 others',
  },
  {
    image: houseImage,
    title: 'Jan Sen',
    desc: 'Followed by rice-5 and 20 others',
  },
  {
    image: houseImage,
    title: 'Jan Sen',
    desc: 'Followed by rice-5 and 20 others',
  },
];

const FollowRequests = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
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
          Settings
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}>
          Manage
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            height: 90,
            width: 90,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: 'black',
            padding: 10,
            marginTop: 30,
            alignSelf: 'center',
          }}>
          <Image
            source={addImage}
            style={{
              height: 60,
              width: 60,
              alignSelf: 'center',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 19,
            color: 'black',
            fontWeight: '600',
            textAlign: 'center',
            padding: 20,
          }}>
          Follow Requests
        </Text>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          When people ask to follow you, you'll see their
          {'\n'}
          requests here
        </Text>
        <View>
          <Text style={{fontSize: 16, color: 'black', margin: 20}}>
            Suggested for you
          </Text>
          {data.map((item, index) => {
            return (
              <FollowCard
                key={index}
                image={item?.image}
                title={item?.title}
                desc={item?.desc}
              />
            );
          })}
        </View>
      </ScrollView>
      <BottomTab focused={'Home'} />
    </View>
  );
};

export default FollowRequests;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
