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
import {crossImage, metaImage} from '../../../Assets/Images';
import ProfileCard from './ProfileCard';
import AccountCard from './AccountCard';

const AccountCenter = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        <Image source={crossImage} style={styles.image} />
      </TouchableOpacity>
      <Image
        source={metaImage}
        style={{
          height: 20,
          width: 80,
          margin: 10,
          marginLeft: 20,
        }}
      />
      <Text style={styles.text}>Accounts Center</Text>
      <Text style={styles.desc}>
        Manage your connected experiences and account settings across Meta
        technologies like Facebook, InstaClone and Meta Horizon.
      </Text>
      <ProfileCard />
      <Text
        style={{fontSize: 18, color: 'black', fontWeight: '700', margin: 15}}>
        Account Settings
      </Text>
      <AccountCard />
    </View>
  );
};

export default AccountCenter;

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
    margin: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
  desc: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 20,
    padding: 5,
  },
});
