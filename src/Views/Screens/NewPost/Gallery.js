import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {cameraImage, multipleImage} from '../../../Assets/Images';

const Gallery = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Text style={{fontSize: 20, color: 'black', margin: 10, flex: 1}}>
        Gallery
      </Text>
      <View style={[styles.card, {flexDirection: 'row', alignSelf: 'center'}]}>
        <Image
          source={multipleImage}
          style={{
            height: 20,
            width: 20,
            alignSelf: 'center',
            marginLeft: 10,
          }}
        />
        <Text style={{color: 'white', alignSelf: 'center', marginLeft: 5}}>
          SELECT MULTIPLE
        </Text>
      </View>
      <Image
        source={cameraImage}
        style={{
          height: 30,
          width: 35,
          borderRadius: 20,
          alignSelf: 'center',
          margin: 10,
        }}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  card: {
    height: 30,
    backgroundColor: '#525252',
    width: '40%',
    borderRadius: 20,
  },
});
