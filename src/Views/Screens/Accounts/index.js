import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {leftarrowImage, myimgImage} from '../../../Assets/Images';

const Accounts = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AccountCenter');
        }}>
        <Image source={leftarrowImage} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>Accounts</Text>
      <Text style={{fontSize: 15, paddingHorizontal: 20}}>
        Add or remove accounts from this Accounts Center. Removing an account
        will also remove any profiles managed by that account. Learn more
      </Text>

      <View style={styles.card}>
        <Text
          style={{
            fontSize: 20,
            color: '#0d47a1',
            margin: 15,
            fontWeight: '600',
          }}>
          Add accounts
        </Text>
      </View>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Bibek Chaudhary
            </Text>
            <Text style={{fontSize: 15}}>Facebook</Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                height: 40,
                borderColor: 'grey',
                borderWidth: 1,
                width: 100,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  margin: 7,
                  marginLeft: 20,
                }}>
                Remove
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', margin: 10}}>
          <Image
            source={myimgImage}
            style={{height: 50, width: 50, borderRadius: 40}}
          />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '600',
              alignSelf: 'center',
              paddingHorizontal: 20,
            }}>
            Bibek Chaudhary
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              bivekc32
            </Text>
            <Text style={{fontSize: 15}}>InstaClone</Text>
          </View>
          <TouchableOpacity>
            <View
              style={{
                height: 40,
                borderColor: 'grey',
                borderWidth: 1,
                width: 100,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  margin: 7,
                  marginLeft: 20,
                }}>
                Remove
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', margin: 10}}>
          <Image
            source={myimgImage}
            style={{height: 50, width: 50, borderRadius: 40}}
          />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '600',
              alignSelf: 'center',
              paddingHorizontal: 20,
            }}>
            bivekc32
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    margin: 15,
  },
  text: {
    fontSize: 27,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
  card: {
    height: 60,
    margin: 15,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 5,
  },
  container: {
    height: 160,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
});
