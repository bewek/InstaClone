import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  connectImage,
  greaterthanImage,
  myimgImage,
} from '../../../Assets/Images';

const ProfileCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profiles');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Image source={myimgImage} style={styles.image} />
          <View style={{flex: 1, padding: 13}}>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
              Profiles
            </Text>
            <Text>Bibek Chaudhary</Text>
          </View>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ConnectedE');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image source={connectImage} style={{height: 30, width: 30}} />
          <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
            Connected experiences
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 40,
  },
});
