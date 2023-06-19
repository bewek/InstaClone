import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BottomTab from '../../Components/BottomTab';
import {
  gridImage,
  leftarrowImage,
  myimgImage,
  reelImage,
} from '../../../Assets/Images';

const Deleted = () => {
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
          Recently deleted
        </Text>
      </View>

      <View style={{flex: 1}}>
        <View
          style={[
            styles.card,
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          ]}>
          <Image source={gridImage} style={styles.img} />
          <Image source={reelImage} style={styles.img} />
        </View>

        <Text style={{margin: 15, textAlign: 'center'}}>
          Only you can see these posts. They will be
          {'\n'}
          permanently deleted after the number of days
          {'\n'}
          shown. After that, you won't be able to restore them
        </Text>

        <View style={{flexDirection: 'row', margin: 15}}>
          <TouchableOpacity>
            <Image source={myimgImage} style={styles.pic} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={myimgImage} style={styles.pic} />
          </TouchableOpacity>
        </View>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Deleted;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
  img: {
    height: 35,
    width: 35,
    alignSelf: 'center',
  },
  card: {
    height: 50,
    backgroundColor: '#d9d9d9',
  },
  pic: {
    height: 130,
    width: 130,
    margin: 5,
  },
});
