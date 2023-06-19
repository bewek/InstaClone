import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  avatarImage,
  bluetickImage,
  crossImage,
  myimgImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
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
            navigation.navigate('Profile');
          }}>
          <Image source={crossImage} style={styles.image} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'black',
            flex: 1,
            paddingHorizontal: 30,
          }}>
          EditProfile
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image source={bluetickImage} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          padding: 10,
        }}>
        <Image
          source={myimgImage}
          style={{height: 70, width: 70, borderRadius: 40}}
        />
        <Image
          source={avatarImage}
          style={{
            height: 70,
            width: 70,
            borderRadius: 40,
            marginLeft: 20,
          }}
        />
      </View>
      <Text style={{fontSize: 14, color: '#03a9f4', textAlign: 'center'}}>
        Edit picture or avatar
      </Text>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.desc}>Bibek Chaudhary</Text>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
        <Text style={styles.title}>Username</Text>
        <Text style={styles.desc}>bivekc32</Text>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
        <Text style={styles.title}>Pronouns</Text>
        <Text style={styles.desc}></Text>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
        <Text style={styles.title}>Bio</Text>
        <Text style={styles.desc}>
          Don't let yesterday take up too much of today
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={{fontSize: 15, padding: 10}}>Add link</Text>
      </TouchableOpacity>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
        <Text style={styles.title}>Gender</Text>
        <Text style={styles.desc}>Male</Text>
      </View>
      <View
        style={{
          height: 50,
          borderColor: 'grey',
          borderWidth: 0.5,
          marginTop: 10,
        }}>
        <TouchableOpacity>
          <Text style={styles.text}> Switch to professional account</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 50,
          borderColor: 'grey',
          borderWidth: 0.5,
        }}>
        <TouchableOpacity>
          <Text style={styles.text}>Personal information settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    padding: 5,
    paddingHorizontal: 10,
  },
  desc: {
    fontSize: 17,
    color: 'black',
    paddingHorizontal: 10,
    padding: 5,
  },
  text: {
    fontSize: 17,
    color: '#03a9f4',
    padding: 10,
  },
});
