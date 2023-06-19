import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import {
  addImage,
  contactImage,
  gridImage,
  listimageImage,
  lockImage,
  menImage,
  myimgImage,
  plusiconImage,
  plusImage,
} from '../../../Assets/Images';
import ProfileImage from './ProfileImage';
import ProfileTop from './ProfileTop';
import ProfilePost from './ProfilePost';
import Profilestory from './Profilestory';
import ButtonGrey from '../../Components/ButtonGrey';
import {useNavigation} from '@react-navigation/native';

const image = [
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
  {image: myimgImage},
];

const story = [
  {image: myimgImage, title: 'Highlights'},
  {image: menImage, title: 'Suit'},
];

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ProfileTop />

      <View style={{flex: 1}}>
        <ScrollView>
          <ProfilePost />
          <View>
            <Text style={styles.desc}>Bibek Chaudhary</Text>
            <Text style={styles.desc}>
              Don't let yesterday take up too much of today
            </Text>
            <Text style={styles.desc}>Every man dies. Not every man lives</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <ButtonGrey
              name={'Edit Profile'}
              onPress={() => {
                navigation.navigate('EditProfile');
              }}
            />
            <ButtonGrey
              name={'Share Profile'}
              onPress={() => {
                navigation.navigate('ShareProfile');
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddPeople');
              }}>
              <Image
                source={addImage}
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: '#d9d9d9',
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              margin: 10,
            }}>
            {story.map((item, index) => {
              return (
                <Profilestory
                  key={index}
                  image={item?.image}
                  title={item?.title}
                />
              );
            })}
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('NewStory');
                }}>
                <View
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 40,
                    borderColor: 'grey',
                    borderWidth: 1,
                    marginLeft: 10,
                    padding: 18,
                  }}>
                  <Image
                    source={plusImage}
                    style={{
                      height: 30,
                      width: 30,
                      alignSelf: 'center',
                    }}
                  />
                </View>
              </TouchableOpacity>

              <Text style={{color: 'black', textAlign: 'center'}}>New</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: 10,
            }}>
            <TouchableOpacity>
              <Image
                source={gridImage}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={contactImage}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}>
            {image.map((item, index) => {
              return <ProfileImage key={index} image={item?.image} />;
            })}
          </View>
        </ScrollView>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  desc: {
    fontSize: 15,
    color: '#525252',
    paddingHorizontal: 15,
  },
  img: {
    height: 120,
    width: 125,
  },
});
