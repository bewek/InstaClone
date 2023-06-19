import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const FilterImage = ({title, image}) => {
  return (
    <View>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity>
        <Image source={image} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

export default FilterImage;

const styles = StyleSheet.create({
  img: {
    height: 80,
    width: 80,
  },
  text: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
});
