
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {Image, StyleSheet, View} from 'react-native';
import React from 'react';


const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bgImg}>

        <Image source={require("../assets/images/bg.png")} />
      </View>
      <View style={styles.contentContainer}>
        <Text
          style={styles.textHeading}
        >FOOD
          KART</Text>

        <Image style={styles.img} source={require('../assets/images/bg.png')} />

      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

    position: "absolute",
    top: 0,
    right: 0
  },
  textHeading: {
    fontFamily: "OpenSans-Regular",
    fontSize: 40,
    fontWeight: "bold",
    color: "#FA4A0C",
    textAlign: "center"
  }
})

    position: 'absolute',
    top: 100,
    right: 100,
  },
});

