import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ShopImage = ({image}) => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default ShopImage;

const styles = StyleSheet.create({
  image: {
    height: 190,
    width: 190,
    marginLeft: 5,
  },
});
