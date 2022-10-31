import { StyleSheet, SafeAreaView, Text, Image, Pressable, ImageBackground, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Authentication from "./app/components/authentication";
import SongList from "./app/components/songlist.js";

const AuthButton = ({ authFunction }) => {
  return <Pressable onPress={authFunction}>
    <Authentication/>
  </Pressable>
};


export default function App() {
  
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true); // static line

  let contentDisplayed = null;
  
  if (token) {
    contentDisplayed = <SongList tracks={tracks}></SongList>

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