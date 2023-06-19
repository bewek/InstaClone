import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {facebookImage, greaterthanImage} from '../../../Assets/Images';

const Security = () => {
  return (
    <View>
      <Text style={styles.texts}>Security checks</Text>
      <Text
        style={{
          fontSize: 15,
          paddingHorizontal: 20,
        }}>
        Review security issues by running checks across apps, devices and email
        sent.
      </Text>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
            When you're logged in
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
            Login alerts
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
            Recent mails
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
            Security Checkup
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 15,
          }}>
          <Text
            style={{fontSize: 20, color: 'black', fontWeight: '500', flex: 1}}>
            Safe browsing
          </Text>
          <Image
            source={facebookImage}
            style={{
              height: 30,
              width: 30,
              alignSelf: 'center',
              marginRight: 15,
            }}
          />
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};

export default Security;

const styles = StyleSheet.create({
  texts: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
  container: {
    height: 290,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
});
