import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import HomeCard from './HomeCard';
import HomeStory from './HomeStory';
import HomeTop from './HomeTop';
import {
  cameraboyImage,
  commentImage,
  glassmanImage,
  headmanImage,
  heartImage,
  helmetgirlImage,
  ladybabyImage,
  lakegirlImage,
  messageImage,
  myimgImage,
  oldmanImage,
  purplegirlImage,
  seenImage,
  skateboyImage,
  threedotsImage,
} from '../../../Assets/Images';

const photo = [
  {image: myimgImage, title: 'Your Story'},
  {image: cameraboyImage, title: 'rice-5'},
  {image: purplegirlImage, title: 'jenny345'},
  {image: skateboyImage, title: 'john12'},
  {image: skateboyImage, title: 'john12'},
];

const post = [
  {
    img: myimgImage,
    title: 'bivekc32',
    threeimg: threedotsImage,
    image: myimgImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by jenny345 and 50 others',
    name: 'bivekc32',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 30 comments',
    hour: '10 hours ago',
  },
  {
    img: purplegirlImage,
    title: 'jenny345',
    threeimg: threedotsImage,
    image: purplegirlImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by you and 140 others',
    name: 'jenny345',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 100 comments',
    hour: '12 hours ago',
  },
  {
    img: cameraboyImage,
    title: 'rice-5',
    threeimg: threedotsImage,
    image: cameraboyImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by jenny345 and 50 others',
    name: 'rice-5',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 30 comments',
    hour: '10 hours ago',
  },
  {
    img: skateboyImage,
    title: 'john12',
    threeimg: threedotsImage,
    image: skateboyImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by jenny345 and 50 others',
    name: 'john12',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 30 comments',
    hour: '12 hours ago',
  },
  {
    img: helmetgirlImage,
    title: 'lily76',
    threeimg: threedotsImage,
    image: helmetgirlImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by jenny345 and 50 others',
    name: 'lilly76',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 30 comments',
    hour: '18 hours ago',
  },
  {
    img: oldmanImage,
    title: 'luke34',
    threeimg: threedotsImage,
    image: oldmanImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by jenny345 and 200 others',
    name: 'luke34',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 90 comments',
    hour: '23 hours ago',
  },
  {
    img: lakegirlImage,
    title: 'rousey8',
    threeimg: threedotsImage,
    image: lakegirlImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by jenny345 and 200 others',
    name: 'rousey8',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 90 comments',
    hour: '23 hours ago',
  },
  {
    img: glassmanImage,
    title: 'wick-7',
    threeimg: threedotsImage,
    image: glassmanImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by jenny345 and 200 others',
    name: 'wick-7',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 90 comments',
    hour: '23 hours ago',
  },
  {
    img: ladybabyImage,
    title: 'see34',
    threeimg: threedotsImage,
    image: ladybabyImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by jenny345 and 200 others',
    name: 'see34',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 90 comments',
    hour: '23 hours ago',
  },
  {
    img: headmanImage,
    title: 'rann58',
    threeimg: threedotsImage,
    image: headmanImage,
    heart: heartImage,
    comment: commentImage,
    message: messageImage,
    seen: seenImage,
    desc: 'Liked by jenny345 and 200 others',
    name: 'rann58',
    description: 'The way to get started is to quit talking and begin doing',
    viewall: 'View all 90 comments',
    hour: '23 hours ago',
  },
];

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <HomeTop />
      <ScrollView>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10
            }}>
            {photo.map((item, index) => {
              return (
                <HomeStory
                  key={index}
                  image={item?.image}
                  title={item?.title}
                />
              );
            })}
          </View>

          <View>
            {post.map((item, index) => {
              return (
                <HomeCard
                  key={index}
                  img={item?.img}
                  title={item?.title}
                  threeimg={item?.threeimg}
                  image={item?.image}
                  heart={item?.heart}
                  comment={item?.comment}
                  message={item?.message}
                  seen={item?.seen}
                  desc={item?.desc}
                  name={item?.name}
                  description={item?.description}
                  viewall={item?.viewall}
                  hour={item?.hour}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <BottomTab focused={'Home'} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
