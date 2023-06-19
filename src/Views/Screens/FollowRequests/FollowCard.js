import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {crossImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';

const FollowCard = ({image, title, desc}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
      }}>
      <TouchableOpacity>
        <Image source={image} style={styles.img} />
      </TouchableOpacity>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Button name={'Follow'} style={styles.butt} />
      <TouchableOpacity>
        <Image
          source={crossImage}
          style={{
            height: 10,
            width: 10,
            marginTop: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FollowCard;

const styles = StyleSheet.create({
  img: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  desc: {
    fontSize: 15,
  },
  butt: {
    width: 100,
    height: 40,
    marginRight: 10,
  },
});
