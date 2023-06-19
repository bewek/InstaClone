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
import {
  glassmanImage,
  headmanImage,
  ladybabyImage,
  lakegirlImage,
  leftarrowImage,
} from '../../../Assets/Images';
import AddCard from './AddCard';

const card = [
  {
    image: lakegirlImage,
    name: 'Reece Rousey',
    desc: 'Followed by rice-5 and +2 more',
  },
  {
    image: ladybabyImage,
    name: 'See Van',
    desc: 'Followed by lily76 and +2 more',
  },
  {
    image: headmanImage,
    name: 'Rann Joy',
    desc: 'Followed by luke34 and +2 more',
  },
  {
    image: glassmanImage,
    name: 'John Wick',
    desc: 'Followed by jenny345 and +2 more',
  },
  {
    image: lakegirlImage,
    name: 'Reece Rousey',
    desc: 'Followed by rice-5 and +2 more',
  },
  {
    image: lakegirlImage,
    name: 'Reece Rousey',
    desc: 'Followed by rice-5 and +2 more',
  },
  {
    image: lakegirlImage,
    name: 'Reece Rousey',
    desc: 'Followed by rice-5 and +2 more',
  },
  {
    image: lakegirlImage,
    name: 'Reece Rousey',
    desc: 'Followed by rice-5 and +2 more',
  },
];

const AddPeople = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 15}}>
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
              paddingHorizontal: 20,
            }}>
            Discover People
          </Text>
        </View>
        <Text style={{fontSize: 16, color: 'black', paddingHorizontal: 20}}>
          Top Suggestions
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 10,
            flexWrap: 'wrap',
          }}>
          {card.map((item, index) => {
            return (
              <AddCard
                key={index}
                image={item?.image}
                name={item?.name}
                desc={item?.desc}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AddPeople;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
