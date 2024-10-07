
import { Image, StyleSheet, Text, View } from 'react-native'





const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bgImg}>
        <Image source={require("../assets/images/bg.png")} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.textHeading}>FOOD KART</Text>
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

  bgImg: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  }

});

