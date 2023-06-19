import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {facebookImage, greaterthanImage} from '../../../Assets/Images';

const AdpCard = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <View>
          <Text style={{fontSize: 20, color: 'black'}}>Recent ad activity</Text>
          <Text style={{fontSize: 15}}>
            View and manage ads you have
            {'\n'}interacted with recently.
          </Text>
        </View>
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
        <View>
          <Text style={{fontSize: 20, color: 'black'}}>
            Advertisement you've seen
          </Text>
          <Text style={{fontSize: 15}}>
            Review and adjust settings for
            {'\n'}advertisers you have seen.
          </Text>
        </View>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 15,
        }}>
        <View>
          <Text style={{fontSize: 20, color: 'black'}}>Ad topics</Text>
          <Text style={{fontSize: 15}}>
            Manage topics you want to see more
            {'\n'}or less of.
          </Text>
        </View>
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
        <View>
          <Text style={{fontSize: 20, color: 'black'}}>Ad settings</Text>
          <Text style={{fontSize: 15}}>
            Review settings and learn how data
            {'\n'}influences what you see.
          </Text>
        </View>
        <Image
          source={greaterthanImage}
          style={{height: 20, width: 20, alignSelf: 'center'}}
        />
      </View>
    </View>
  );
};

export default AdpCard;

const styles = StyleSheet.create({
  container: {
    height: 380,
    width: '90%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
});
