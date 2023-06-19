// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../Screens/Login';
import Home from '../../Screens/Home';
import SignUpPhone from '../../Screens/SignUpPhone';
import {
  Accounts,
  Activity,
  AddPeople,
  AdP,
  Archive,
  Cart,
  CloseFriends,
  ConfirmEmail,
  ConfirmPhone,
  ConnectedE,
  Create,
  Digital,
  EditProfile,
  Favorites,
  Filter,
  FindAccount,
  FollowRequests,
  IMessage,
  Like,
  Message,
  NewCall,
  NewChat,
  NewPost,
  NewStory,
  NotCode,
  Option,
  PasswordS,
  Payments,
  PersonalDetails,
  Post,
  Profile,
  Profiles,
  QRCode,
  Requests,
  ResetPassword,
  SAgree,
  Saved,
  SBirthday,
  Search,
  SelectAccount,
  Setting,
  ShareProfile,
  Shop,
  ShopAccount,
  ShoppingActivity,
  SignUpEmail,
  SName,
  SPassword,
  SSaveInfo,
  SUsername,
  UpdateMessaging,
  Wishlist,
  YIAP,
  YourReview,
  AddAccount,
  AccountCenter,
  FollowAndInvite,
  Notifications,
  Privacy,
  SuperVision,
  Preferences,
  Help,
  About,
  Theme,
  YourAccount,
  TimeSpent,
  PhotosAV,
  Interactions,
  AHistory,
  RecentSearch,
  LinkV,
  Deleted,
  Download,
} from '../../Screens';
import {Link} from '@react-navigation/native';

// import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function AuthStack() {
  // const {isLogIn} = useSelector(state => state.auth);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* {isLogIn ? (
        <> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUpPhone" component={SignUpPhone} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
      <Stack.Screen name="ConfirmPhone" component={ConfirmPhone} />
      <Stack.Screen name="SName" component={SName} />
      <Stack.Screen name="SPassword" component={SPassword} />
      <Stack.Screen name="SSaveInfo" component={SSaveInfo} />
      <Stack.Screen name="SBirthday" component={SBirthday} />
      <Stack.Screen name="SUsername" component={SUsername} />
      <Stack.Screen name="SAgree" component={SAgree} />
      <Stack.Screen name="NotCode" component={NotCode} />
      <Stack.Screen name="FindAccount" component={FindAccount} />
      <Stack.Screen name="SelectAccount" component={SelectAccount} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Like" component={Like} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="NewPost" component={NewPost} />
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ShareProfile" component={ShareProfile} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Option" component={Option} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="YourAccount" component={YourAccount} />
      <Stack.Screen name="ShoppingActivity" component={ShoppingActivity} />
      <Stack.Screen name="AddPeople" component={AddPeople} />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="Archive" component={Archive} />
      <Stack.Screen name="QRCode" component={QRCode} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name="Digital" component={Digital} />
      <Stack.Screen name="CloseFriends" component={CloseFriends} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="UpdateMessaging" component={UpdateMessaging} />
      <Stack.Screen name="NewCall" component={NewCall} />
      <Stack.Screen name="NewChat" component={NewChat} />
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="IMessage" component={IMessage} />
      <Stack.Screen name="FollowRequests" component={FollowRequests} />
      <Stack.Screen name="NewStory" component={NewStory} />
      <Stack.Screen name="ShopAccount" component={ShopAccount} />
      <Stack.Screen name="AddAccount" component={AddAccount} />
      <Stack.Screen name="AccountCenter" component={AccountCenter} />
      <Stack.Screen name="FollowAndInvite" component={FollowAndInvite} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="SuperVision" component={SuperVision} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Theme" component={Theme} />
      <Stack.Screen name="Profiles" component={Profiles} />
      <Stack.Screen name="ConnectedE" component={ConnectedE} />
      <Stack.Screen name="Accounts" component={Accounts} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="PasswordS" component={PasswordS} />
      <Stack.Screen name="YIAP" component={YIAP} />
      <Stack.Screen name="AdP" component={AdP} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="TimeSpent" component={TimeSpent} />
      <Stack.Screen name="PhotosAV" component={PhotosAV} />
      <Stack.Screen name="Interactions" component={Interactions} />
      <Stack.Screen name="AHistory" component={AHistory} />
      <Stack.Screen name="RecentSearch" component={RecentSearch} />
      <Stack.Screen name="LinkV" component={LinkV} />
      <Stack.Screen name="Deleted" component={Deleted} />
      <Stack.Screen name="Download" component={Download} />
      {/* </>
      ) : (
        <> */}

      {/* </>
      )} */}
    </Stack.Navigator>
  );
}

export default AuthStack;
