import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const LikeCard = ({image, title, texts}) => {
  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <TouchableOpacity>
        <Image
          source={image}
          style={{height: 50, width: 50, borderRadius: 30}}
        />
      </TouchableOpacity>
      <View style={{paddingHorizontal: 20}}>
        <Text
          style={{
            fontSize: 17,
            color: 'black',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: 'black',
          }}>
          {texts}
        </Text>
      </View>
    </View>
  );
};

export default LikeCard;

const styles = StyleSheet.create({
  butt: {
    width: '25%',
    backgroundColor: '#03a9f4',
    height: 35,
  },
});
