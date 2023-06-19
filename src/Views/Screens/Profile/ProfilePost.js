import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {myimgImage} from '../../../Assets/Images';

const ProfilePost = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity>
        <Image
          source={myimgImage}
          style={{height: 80, width: 80, borderRadius: 40}}
        />
      </TouchableOpacity>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.text}>20</Text>
        <Text style={styles.textbot}>Posts</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.text}>50</Text>
        <Text style={styles.textbot}>Followers</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.text}>50</Text>
        <Text style={styles.textbot}>Following</Text>
      </View>
    </View>
  );
};

export default ProfilePost;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  textbot: {
    color: 'black',
  },
});
