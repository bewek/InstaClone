import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const SearchImage = ({image}) => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchImage;

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: 120,
    marginLeft: 5,
  },
});
