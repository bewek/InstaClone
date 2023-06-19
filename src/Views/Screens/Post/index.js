import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  bluetickImage,
  leftarrowImage,
  myimgImage,
  onoffImage,
  rightarrowImage,
} from '../../../Assets/Images';
import ButtonGrey from '../../Components/ButtonGrey';

const Post = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Filter');
          }}>
          <Image source={leftarrowImage} style={styles.img} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            paddingHorizontal: 20,
            flex: 1,
          }}>
          NewPost
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image source={bluetickImage} style={styles.img} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={myimgImage}
          style={{height: 60, width: 60, margin: 10}}
        />
        <TextInput placeholder="Write a caption" style={styles.input} />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Tag People</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Add location</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <ButtonGrey name={'Kathmandu'} style={styles.butt} />
        <ButtonGrey name={'lalitpur'} style={styles.butt} />
        <ButtonGrey name={'satdobato'} style={styles.butt} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Add music</Text>
      </View>
      <View
        style={[
          styles.container,
          {flexDirection: 'row', justifyContent: 'space-around'},
        ]}>
        <ButtonGrey name={'lily'} style={styles.butto} />
        <ButtonGrey name={'latin'} style={styles.butto} />
        <ButtonGrey name={'satin'} style={styles.butto} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Share to Facebook</Text>
        <Image source={onoffImage} style={styles.image} />
      </View>
      <Text style={{paddingHorizontal: 15}}>
        Sharing as Bibek chaudhary. Audience is friends
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Share to Twitter</Text>
        <Image source={onoffImage} style={styles.image} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Share to Tumblr</Text>
        <Image source={onoffImage} style={styles.image} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>Advance Settings</Text>
        <Image source={rightarrowImage} style={styles.img} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
  },
  input: {
    width: '50%',
    height: 45,
    margin: 8,
    fontSize: 16,
    marginLeft: 15,
    margin: 15,
  },
  container: {
    height: 50,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  text: {
    fontSize: 15,
    color: 'black',
    padding: 12,
  },
  butt: {
    width: '110%',
  },
  butto: {
    width: '140%',
  },
  image: {
    height: 30,
    width: 40,
  },
});
