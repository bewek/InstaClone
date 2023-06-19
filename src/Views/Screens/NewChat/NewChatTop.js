import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {leftarrowImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const NewChatTop = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Message');
          }}>
          <Image source={leftarrowImage} style={{height: 30, width: 30}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            paddingHorizontal: 20,
            flex: 1,
          }}>
          NewMessage
        </Text>
        <Text style={{fontSize: 18}}>Chat</Text>
      </View>
      <View>
        <Text style={{fontSize: 18, color: 'black', paddingHorizontal: 15}}>
          To
        </Text>
        <TextInput placeholder="Search" style={styles.input} />
        <Text style={{fontSize: 17, color: 'black', paddingHorizontal: 12}}>
          Use end-to-end encryption
        </Text>
      </View>
    </View>
  );
};

export default NewChatTop;

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 45,
    margin: 8,
    fontSize: 16,
    marginLeft: 15,
  },
});
