import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  commentImage,
  eyeImage,
  greaterthanImage,
  heartImage,
  leftarrowImage,
  reviewtagImage,
  sreplyImage,
} from '../../../Assets/Images';
import BottomTab from '../../Components/BottomTab';

const Interactions = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', margin: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Activity');
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
          Interactions
        </Text>
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <Image
            source={commentImage}
            style={{height: 25, width: 25, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            Comments
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
          <Image
            source={heartImage}
            style={{height: 25, width: 25, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            Likes
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
          <Image
            source={sreplyImage}
            style={{height: 25, width: 25, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            Story replies
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
          <Image
            source={reviewtagImage}
            style={{height: 25, width: 25, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            Reviews
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
          <Image
            source={eyeImage}
            style={{height: 25, width: 25, alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            Not interested
          </Text>
          <Image
            source={greaterthanImage}
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        </View>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Interactions;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});
