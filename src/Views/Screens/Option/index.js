import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {leftarrowImage} from '../../../Assets/Images';
import styles from '../css';
import OptionSelect from './OptionSelect';

const Option = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Image
          source={leftarrowImage}
          style={{height: 30, width: 30, marginLeft: 10, margin: 15}}
        />
      </TouchableOpacity>

      <OptionSelect />
    </View>
  );
};

export default Option;
