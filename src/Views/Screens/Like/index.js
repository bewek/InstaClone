import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BottomTab from '../../Components/BottomTab';
import LikeTop from './LikeTop';
import LikeCard from './LikeCard';
import {
  oldmanImage,
  purplegirlImage,
  skateboyImage,
} from '../../../Assets/Images';

const card = [
  {
    image: purplegirlImage,
    title: 'jenny345, rice-5 and 20 others',
    texts: ' liked your photo.  ',
  },
  {
    image: skateboyImage,
    title: 'rice-5 and 20 others',
    texts: 'commented your photo.  ',
  },
  {
    image: oldmanImage,
    title: 'luke34 commented ',
    texts: ' your photo.  ',
  },
  {
    image: skateboyImage,
    title: 'lily74 commented',
    texts: ' your photo. ',
  },
];

const Like = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <LikeTop />
        <View style={{flex: 1}}>
          <Text style={styles.text}>Today</Text>
          {card.map((item, index) => {
            return (
              <LikeCard
                key={index}
                image={item?.image}
                title={item?.title}
                texts={item?.texts}
              />
            );
          })}
          <Text style={styles.text}>Yesterday</Text>
          {card.map((item, index) => {
            return (
              <LikeCard
                key={index}
                image={item?.image}
                title={item?.title}
                texts={item?.texts}
              />
            );
          })}
          <Text style={styles.text}>This Month</Text>
          {card.map((item, index) => {
            return (
              <LikeCard
                key={index}
                image={item?.image}
                title={item?.title}
                texts={item?.texts}
              />
            );
          })}
        </View>
      </ScrollView>
      <BottomTab focused={'Home'} />
    </View>
  );
};

export default Like;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingHorizontal: 20,
    margin: 15,
  },
});
