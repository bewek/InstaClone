import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Online = ({image, title}) => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={image} style={styles.photo} />

        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Online;

const styles = StyleSheet.create({
  photo: {
    height: 60,
    width: 60,

    borderRadius: 40,
  },
  text: {
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
});
