import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const NewPostImage = ({image}) => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default NewPostImage;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 95,
  },
});
