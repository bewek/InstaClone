import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeStory = ({image, title}) => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={image} style={styles.photo} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeStory;

const styles = StyleSheet.create({
  photo: {
    height: 65,
    width: 65,
    borderWidth: 2,
    borderColor: '#ffc107',
    borderRadius: 40,
  },
  text: {
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
});
