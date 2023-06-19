import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {leftarrowImage} from '../../../Assets/Images';
import NewCard from './NewCard';

const NewStory = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image source={leftarrowImage} style={styles.image} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              paddingHorizontal: 20,
              flex: 1,
            }}>
            New Highlight
          </Text>
          <Text
            style={{
              fontSize: 16,
            }}>
            Next
          </Text>
        </View>
        <NewCard />
      </ScrollView>
    </View>
  );
};

export default NewStory;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
});
