import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Buttons from '../../Components/Buttons';
import {
  homeiconImage,
  myimgImage,
  plusiconImage,
  searchiconImage,
  shopiconImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const tabs = {
  tabs: [
    {
      title: 'Home',
      icon: homeiconImage,
      tab: {
        title: 'Home',
        icon: homeiconImage,
      },
    },
    {
      title: 'Search',
      icon: searchiconImage,
      tab: {
        title: 'Search',
        icon: searchiconImage,
      },
    },
    {
      title: 'NewPost',
      icon: plusiconImage,
      tab: {
        title: 'NewPost',
        icon: plusiconImage,
      },
    },
    {
      title: 'Shop',
      icon: shopiconImage,
      tab: {
        title: 'Shop',
        icon: shopiconImage,
      },
    },
    {
      title: 'Profile',
      icon: myimgImage,
      tab: {
        title: 'Profile',
        icon: myimgImage,
      },
    },
  ],
};

const BottomTab = ({focused}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          padding: 2,
        }}>
        {tabs.tabs.map((tab, index) => {
          return (
            <Buttons
              key={index}
              source={tab.icon}
              style={[
                focused == tab.tab.title && {backgroundColor: '#d9d9d9'},
                {height: 40, width: 60, padding: 20, borderColor: 'white'},
              ]}
              textStyle={focused == tab.title && {color: '#000'}}
              name={tab.title}
              onPress={() => {
                navigation.navigate(tab.title);
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
});
