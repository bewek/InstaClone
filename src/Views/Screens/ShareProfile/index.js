import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  copyImage,
  crossImage,
  qrImage,
  shareImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const ShareProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#ff9800', height: '100%'}}>
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
          <Image source={crossImage} style={styles.img} />
        </TouchableOpacity>
        <View
          style={{
            height: 30,
            width: '20%',
            backgroundColor: '#969696',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'white',
          }}>
          <TouchableOpacity>
            <Text style={{color: 'white', textAlign: 'center', marginTop: 4}}>
              COLOR
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image source={qrImage} style={styles.img} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: '45%',
          width: '80%',
          backgroundColor: 'white',
          padding: 10,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 20,
        }}>
        <Image
          source={qrImage}
          style={{height: 250, width: 250, alignSelf: 'center'}}
        />
        <Text
          style={{
            fontSize: 40,
            color: '#e65100',
            textAlign: 'center',
            padding: 20,
          }}>
          @BIVEKC32
        </Text>
      </View>
      <View
        style={{
          height: 120,
          width: '80%',
          backgroundColor: 'white',
          alignSelf: 'center',
          margin: 20,
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,

            paddingHorizontal: 30,
            marginLeft: 30,
          }}>
          <TouchableOpacity>
            <View>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  borderColor: 'grey',
                  borderWidth: 1,
                  alignSelf: 'center',
                }}>
                <Image
                  source={shareImage}
                  style={{
                    height: 30,
                    width: 30,
                    alignSelf: 'center',
                    marginTop: 12,
                  }}
                />
              </View>
              <Text style={{padding: 10}}>Share Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  borderColor: 'grey',
                  borderWidth: 1,
                  alignSelf: 'center',
                }}>
                <Image
                  source={copyImage}
                  style={{
                    height: 30,
                    width: 30,
                    alignSelf: 'center',
                    marginTop: 12,
                  }}
                />
              </View>
              <Text style={{padding: 10}}>Copy link</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShareProfile;

const styles = StyleSheet.create({
  img: {
    height: 25,
    width: 25,
  },
});
