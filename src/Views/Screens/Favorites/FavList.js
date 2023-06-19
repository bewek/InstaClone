import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ButtonGrey from '../../Components/ButtonGrey';

const FavList = ({image, title, desc}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      }}>
      <Image source={image} style={styles.img} />
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <ButtonGrey name={'Remove'} style={styles.butt} />
    </View>
  );
};

export default FavList;

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
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
  },
});
