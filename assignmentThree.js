import 'react-native-gesture-handler';
import { webview } from "react-native-webview";
import { StyleSheet, SafeAreaView, Text, Image, Pressable, ImageBackground, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Authentication from "./app/components/authentication";
import SongList from "./app/components/songlist.js";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthButton = ({ authFunction }) => {
  return <Pressable onPress={authFunction}>
    <Authentication/>
  </Pressable>
};


export default function App( {navigation}) {
  
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(tracks); // static line

  let contentDisplayed = null;
  
  if (token) {
    contentDisplayed = <SongList tracks={tracks} navigation = {navigation}></SongList>

  } else {
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth}/>;
  }

  
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
})