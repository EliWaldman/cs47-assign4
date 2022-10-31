import { Text, View, StyleSheet, Image } from "react-native";
import { Images } from "../../assets/Themes";

export default function Authentication() {
  
    return (
        <View style={styles.button}>

          <Image source={Images.spotify} style={styles.spotifyLogo}></Image>

          <Text style={styles.text} adjustsFontSizeToFit={true}> CONNECT WITH SPOTIFY </Text> 
        
        </View>
    );
  }


  const styles = StyleSheet.create({
    button: {
      width: '53%',
      height: '24%',
      backgroundColor: '#1DB954',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderRadius: 20,
      padding: 7
    },

    spotifyLogo: {
      resizeMode: 'contain',
      width: '15%',
    },

    text: {
      color: 'white',
    }
  });