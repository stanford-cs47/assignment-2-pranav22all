import React from 'react';
import { StyleSheet, Text, View, Image, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <View style = {styles.nav_bar}>
          <Image style = {styles.top_icon}
            source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png'}}
          />

          <Image style = {{width: 106, height: 44, resizeMode:'contain',}}
            source = {require('./App/Images/tinder-logo.png')}
          />

          <Image style = {styles.top_icon}
            source = {require('./App/Images/chatting.png')}
          />
        </View>

        <View style= {styles.profile_pic}>
          <Image 
            source = {require('./App/Images/Profiles/harold.jpg')}
          />
        
          <View style = {styles.text_box}>          
            <Text style = {styles.large_text}><Text style = {styles.large_bold_text}>Harold, </Text>65</Text> 
          </View>

          <View style = {styles.text_box}>
            <Text style = {styles.small_text}>Internet Meme</Text>
          </View>
        </View>

        <View style = {styles.button_bar}>
          <TouchableOpacity style = {styles.small_button}>
            <Image
              style={styles.small_button_icon}
              source={require('./App/Images/rewind.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.large_button}>
            <Image
              style={styles.large_button_icon}
              source={require('./App/Images/nope.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.small_button}>
            <Image
              style={styles.small_button_icon}
              source={require('./App/Images/boost.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.large_button}>
            <Image
              style={styles.large_button_icon}
              source={require('./App/Images/like.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style = {styles.small_button}>
            <Image
              style={styles.small_button_icon}
              source={require('./App/Images/super-like.png')}
            />
          </TouchableOpacity>
        </View> 
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',

  },

  nav_bar:{
    width: '100%',
    height: Platform.OS === 'ios' ? 44 : 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey', 
    borderBottomWidth: 1,
  },

  top_icon:{
    width: 40,
    height: 40,
    tintColor: '#C5C5C5',
  },

  profile_pic:{
    backgroundColor: 'white',
    borderColor: '#C5C5C5',
    borderWidth: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  large_bold_text:{
    fontSize: 24,
    fontWeight: 'bold',
  },

  large_text:{
    fontSize: 24,
    paddingLeft: 10,
    
  }, 

  small_text:{
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 5,
    color: '#C5C5C5', 
  },

  button_bar:{
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }, 

  large_button:{
    width: 40,
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
    borderRadius: 20,
    padding: 10, 
  },

  large_button_icon:{
    width: 30,
    height: 30,
    resizeMode:'contain',
  },

  small_button:{
    width: 40, 
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
    borderRadius: 20,
  },

  small_button_icon:{
    width: 20,
    height: 20,
    resizeMode:'contain',
  },
});

