import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  calloptionImage,
  leftarrowImage,
  plusiconImage,
  plusImage,
  searchiconImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const MessageTop = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image source={leftarrowImage} style={styles.img} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            flex: 1,
            paddingHorizontal: 20,
          }}>
          bivekc32
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NewCall');
          }}>
          <Image source={calloptionImage} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NewChat');
          }}>
          <Image source={plusImage} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageTop;

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
});
