import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import {
  cameraboyImage,
  cameraImage,
  helmetgirlImage,
  leftarrowImage,
  oldmanImage,
  plusImage,
  purplegirlImage,
  skateboyImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const Saved = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
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
            paddingHorizontal: 30,
            flex: 1,
          }}>
          Saved
        </Text>
        <Image source={plusImage} style={styles.image} />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <View>
            <Image source={purplegirlImage} style={styles.img} />
            <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
              Jenny's Post
            </Text>
          </View>
          <View>
            <Image source={skateboyImage} style={styles.img} />
            <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
              John's Photo
            </Text>
          </View>
          <View>
            <Image source={cameraboyImage} style={styles.img} />
            <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
              Rice's Post
            </Text>
          </View>
          <View>
            <Image source={oldmanImage} style={styles.img} />
            <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
              Luke's Video
            </Text>
          </View>
          <View>
            <Image source={helmetgirlImage} style={styles.img} />
            <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
              Lilly's Post
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
  img: {
    height: 150,
    width: 150,
  },
});
