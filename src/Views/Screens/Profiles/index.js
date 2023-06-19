import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  greaterthanImage,
  leftarrowImage,
  myimgImage,
} from '../../../Assets/Images';

const Profiles = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountCenter');
        }}>
        <Image source={leftarrowImage} style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.text}>Profiles</Text>
      <Text style={{fontSize: 16, paddingHorizontal: 20}}>
        Manage your profile info, and use the same info across Facebook,
        InstaClone and Horizon. Add more profiles by adding your accounts. Learn
        more
      </Text>
      <View style={styles.container}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 15,
            }}>
            <Image source={myimgImage} style={styles.image} />
            <View style={{flex: 1, padding: 13}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
                Bibek Chaudhary
              </Text>
              <Text>Facebook, InstaClone</Text>
            </View>
            <Image
              source={greaterthanImage}
              style={{height: 20, width: 20, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 17, color: '#03a9f4', paddingHorizontal: 20}}>
            Add accounts
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
    margin: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
  container: {
    height: 140,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 40,
  },
});
