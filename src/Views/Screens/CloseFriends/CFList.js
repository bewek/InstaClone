import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {purplegirlImage} from '../../../Assets/Images';

const CFList = ({image, title, desc}) => {
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
      <View
        style={{
          height: 30,
          width: 30,
          borderRadius: 30,
          borderColor: 'grey',
          borderWidth: 2,
        }}></View>
    </View>
  );
};

export default CFList;

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
});
