import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  addImage,
  adpImage,
  humaniconImage,
  metaImage,
  securedImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const SCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={metaImage}
        style={{
          height: 30,
          width: 100,
          margin: 10,
          marginLeft: 20,
          marginTop: 20,
        }}
      />
      <Text style={styles.text}>Accounts Center</Text>
      <Text style={styles.text}>
        Manage your connected experiences and account settings across Meta
        technologies.
      </Text>
      <View style={{flexDirection: 'row', margin: 5}}>
        <Image
          source={humaniconImage}
          style={{height: 20, width: 20, marginLeft: 10}}
        />
        <Text style={{fontSize: 15, color: 'black', paddingHorizontal: 20}}>
          Personal Details
        </Text>
      </View>
      <View style={{flexDirection: 'row', margin: 5}}>
        <Image
          source={securedImage}
          style={{height: 20, width: 20, marginLeft: 10}}
        />
        <Text style={{fontSize: 15, color: 'black', paddingHorizontal: 20}}>
          Password and security
        </Text>
      </View>
      <View style={{flexDirection: 'row', margin: 5}}>
        <Image
          source={adpImage}
          style={{height: 20, width: 20, marginLeft: 10}}
        />
        <Text style={{fontSize: 15, color: 'black', paddingHorizontal: 20}}>
          Ad preferences
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountCenter');
        }}>
        <Text style={{fontSize: 16, color: '#03a9f4', margin: 15}}>
          See more in Accounts Center
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SCard;

const styles = StyleSheet.create({
  container: {
    height: 290,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
});
