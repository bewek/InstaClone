import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ProfileImage = ({image}) => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={image}
          style={{
            height: 120,
            width: 125,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({});
