import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {myimgImage} from '../../../Assets/Images';

const NewCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
      <Image source={myimgImage} style={styles.image} />
    </View>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 120,
    marginBottom: 10,
  },
});
