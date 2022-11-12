import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Text, SafeAreaView, StyleSheet, View, FlatList, Image } from "react-native";
import Song from "./song";
import { Images } from "../../assets/Themes";

export default function SongList ({tracks, navigation}) {

    //the outline/structure of the data that's put into each separate song component below (from left to right of the song)
    const renderSongItem = ({item, index}) => {
        return <Song 
        //number of song
        index={index}
        //album pic
        imageUrl={item.album.images[1].url}
        //song title
        songName={item.name}
        //artist title
        artistName={item.artists[0].name}
        //album title
        albumName={item.album.name}
        //song length
        duration={item.duration_ms}
        //nav
        navigation={navigation}
        
        external_url={item.external_urls.spotify}
        
        preview_url={item.preview_url}
        />
    }
    return (
        <SafeAreaView>
            <View style={styles.header}>

                <Image style={styles.spotifyLogo} source={require('../../assets/spotify-logo.png')}></Image>
                <Text style={styles.text} adjustsFontSizeToFit={true}> My top tracks </Text>

            </View>


            <FlatList
                data={tracks}
                renderItem={(item) => renderSongItem(item)}
                keyExtractor={(item, index) => index} >
            </FlatList>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '8%',
        flexDirection: 'row',
        padding: 8,
    },

    spotifyLogo: {
        height: 32,
        width: 32,
    },

    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    
  })
  