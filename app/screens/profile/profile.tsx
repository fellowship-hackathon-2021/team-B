import React, { Component } from 'react';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class UserProfileView extends Component {
  state: { bio: string; education: string; technologies: string; };
  constructor(props)  {
    super(props);
    this.state = {
      bio: "",
      education: "",
      technologies: ""
    };
  }
  
  componentDidUpdate() {
    console.log(this.state.bio);
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://pbs.twimg.com/media/A-afLBJCEAAUKVb.jpg'}}/>

                <Text style={styles.name}>  </Text>
                <Text style={styles.userInfo}>berniebearcat@gmail.com </Text>
                <Text style={styles.userInfo}> Class of 2021 </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>              
              <View style={styles.infoContent}>
                <Text style={styles.info}>Bio</Text>
                <textarea onChange= {(e) => {
   this.setState((state, props) => {
  return {bio: e.target.value};
});
}}placeholder= "Update bio"></textarea>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Education</Text>
                <textarea placeholder= "Update Education"></textarea>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Technologies</Text>
                <textarea placeholder= "Update Technologies"></textarea>
            </View>


          </View>
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#40A6D9",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#black",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#ffffff",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#E2A28D",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});
