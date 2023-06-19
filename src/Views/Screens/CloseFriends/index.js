import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  leftarrowImage,
  purplegirlImage,
  searchiconImage,
} from '../../../Assets/Images';
import Button from '../../Components/Button';
import CFList from './CFList';

const data = [
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
  {image: purplegirlImage, title: 'jenny345', desc: 'Jenny Shaw'},
];

const CloseFriends = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}>
        <View style={{flexDirection: 'row', margin: 15}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image source={leftarrowImage} style={styles.image} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              paddingHorizontal: 30,
            }}>
            Close Friends
          </Text>
        </View>
        <Text style={{fontSize: 15, textAlign: 'center'}}>
          We don't send notifications when you edit your close friends list. How
          it works
        </Text>
        <View
          style={[
            styles.input,
            {
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            },
          ]}>
          <TouchableOpacity>
            <Image source={searchiconImage} style={{height: 20, width: 20}} />
          </TouchableOpacity>
          <TextInput placeholder="Search" style={{flex: 1, marginLeft: 20}} />
        </View>
      </View>
      <ScrollView>
        <Text style={{fontSize: 16, color: 'black', margin: 10}}>
          Suggested
        </Text>
        {data.map((item, index) => {
          return (
            <CFList
              key={index}
              image={item?.image}
              title={item?.title}
              desc={item?.desc}
            />
          );
        })}
      </ScrollView>
      <Button name={'Done'} />
    </View>
  );
};

export default CloseFriends;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
  input: {
    backgroundColor: '#d9d9d9',
    borderRadius: 12,
    width: '90%',
    height: 45,
    margin: 15,
  },
});
