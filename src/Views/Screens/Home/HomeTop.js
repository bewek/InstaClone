import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {heartImage, messageImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const HomeTop = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {flexDirection: 'row', justifyContent: 'space-around'},
      ]}>
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          fontWeight: 'bold',
          margin: 10,
          flex: 1,
        }}>
        InstaClone
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Like');
        }}>
        <Image source={heartImage} style={styles.img} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Message');
        }}>
        <Image source={messageImage} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeTop;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  img: {
    height: 25,
    width: 25,
    margin: 15,
  },
});
