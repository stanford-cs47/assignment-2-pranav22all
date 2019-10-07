import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {style.nav_bar}>
          <Image style = {styles.small_icon_settings}
            source = {require('#')} // Where is the image for settings? 
          />

          <Image
            source = {require('App/Images/tinder-logo@2x.png')}
          />

          <Image style = {styles.small_icon_chat}
            source = {require('App/Images/chatting@2x.png')}
          />
        </View>

        <View style= {style.profile_pic}>
          <Image 
            source = {require('App/Images/Profiles/harold@2x.jpg')}
          />
          
          <View style={styles.box_large}>
            <Text>Harold, 65</Text>
          </View>

          <View style={styles.box}>
            <Text>Internet Meme</Text>
          </View>
        </View>

        <View style = {style.buttons}>
          <Image 
            source = {require('App/Images/rewind@2x.png')}
          />

          <Image 
            source = {require('App/Images/nope@2x.png')}
          />

          <Image 
            source = {require('App/Images/boost@2x.png')}
          />

          <Image 
            source = {require('App/Images/like@2x.jpg')}
          />

          <Image 
            source = {require('App/Images/super-like@2x.jpg')}
          />
        </View> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',

  },

  nav_bar:{
    width: 100%,
    height: 56, //Change this to be flexible between iOS and Android
    resizeMode: 'contain',
  },

  small_icon_chat:{
    alignContent: 'right',
    tintColor: #C5C5C5,
  }

  small_icon_settings:{
    alignContent: 'left', 
    tintColor: #C5C5C5,
  }

  profile_pic:{
    flex: 2, 
    borderColor: #C5C5C5,
    borderRadius: 5,
  },

  box_large:{
    fontSize: 24,
  },

  box_small:{
    fontSize: 16,
  },

  button:{
    //Add styles here
  }, 

});

