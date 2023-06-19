import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  addstoryImage,
  asImage,
  atImage,
  ccImage,
  commentImage,
  endImage,
  excImage,
  eyeImage,
  guideImage,
  leftarrowImage,
  liveImage,
  lockImage,
  lpImage,
  msgngImage,
  muteImage,
  onoffImage,
  plusiconImage,
  resImage,
  storyhImage,
  supImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import BottomTab from '../../Components/BottomTab';

const Privacy = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
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
          Privacy
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#d9d9d9',
            borderBottomWidth: 1,
          }}>
          <Text style={{fontSize: 16, color: 'black', padding: 15}}>
            Account Privacy
          </Text>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Image
                source={lockImage}
                style={[styles.image, {alignSelf: 'center'}]}
              />
              <Text style={[styles.text, {paddingHorizontal: 20, flex: 1}]}>
                Private Account
              </Text>
              <TouchableOpacity>
                <Image
                  source={onoffImage}
                  style={[styles.image, {alignSelf: 'center', marginRight: 20}]}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{borderBottomColor: '#d9d9d9', borderBottomWidth: 1}}>
          <Text style={{fontSize: 16, color: 'black', margin: 15}}>
            Interactions
          </Text>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 12,
              }}>
              <Image source={excImage} style={styles.img} />
              <Text style={styles.texts}>Limits</Text>
              <Text>Off</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={eyeImage} style={styles.img} />
              <Text style={styles.text}>Hidden Words</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={commentImage} style={styles.img} />
              <Text style={styles.text}>Comments</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={plusiconImage} style={styles.img} />
              <Text style={styles.text}>Posts</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                margin: 12,
                justifyContent: 'space-between',
              }}>
              <Image source={atImage} style={styles.img} />
              <Text style={[styles.text, {flex: 1}]}>Mentions</Text>
              <Text>Everyone</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={addstoryImage} style={styles.img} />
              <Text style={styles.text}>Story</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={liveImage} style={styles.img} />
              <Text style={styles.text}>Live</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={guideImage} style={styles.img} />
              <Text style={styles.text}>Guides</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={asImage} style={styles.img} />
              <Text style={styles.text}>Activity Status</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={msgngImage} style={styles.img} />
              <Text style={styles.text}>Messages</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={endImage} style={styles.img} />
              <Text style={styles.text}>End-to-end encryption</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{borderBottomColor: '#d9d9d9', borderBottomWidth: 1}}>
          <Text style={{fontSize: 16, color: 'black', margin: 15}}>
            Connections
          </Text>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={resImage} style={styles.img} />
              <Text style={styles.text}>Restricted Accounts</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={ccImage} style={styles.img} />
              <Text style={styles.text}>Blocked Accounts</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={muteImage} style={styles.img} />
              <Text style={styles.text}>Muted Accounts</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={supImage} style={styles.img} />
              <Text style={styles.text}>Accounts you follow</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{borderBottomColor: '#d9d9d9', borderBottomWidth: 1}}>
          <Text style={{fontSize: 16, color: 'black', margin: 15}}>
            Data permissions
          </Text>

          <TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 12}}>
              <Image source={lpImage} style={styles.img} />
              <Text style={styles.text}>Apps and websites</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
  text: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
  },
  texts: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
    flex: 1,
  },
  img: {
    height: 27,
    width: 27,
  },
});
