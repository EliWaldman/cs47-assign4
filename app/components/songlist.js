import { Text, SafeAreaView, StyleSheet, View, FlatList, Image } from "react-native";
import Song from "./song";
import { Images } from "../../assets/Themes";

export default function SongList ({tracks}) {


    //the outline of the data that's put into each separate song component below (from left to right of the song)
    const renderSongItem = ({item, index}) => {
        return <Song 
        index={index}
        imageUrl={item.album.images[1].url}
        songName={item.name}
        artistName={item.artists[0].name}
        albumName={item.album.name}
        duration={item.duration_ms}
        />
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>

                <Image style={styles.spotifyLogo} source={require('../../assets/spotify-logo.png')}></Image>
                <Text style={styles.text} adjustsFontSizeToFit={true}> Dawn FM </Text>

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
        height: 50,
        width: 50,
    },

    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    
  })
  