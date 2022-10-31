import { StyleSheet, Image, SafeAreaView, Text, View} from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";

export default function Song({index, imageUrl, songName, artistName, albumName, duration}) {

    return (
        <SafeAreaView style={styles.songComp}>

            <View style={styles.number}>
                <Text style={styles.textStyle}>{index + 1}</Text>
            </View>

            <View style={styles.cover}>
                <Image style={styles.albumImageStyle} source={{uri: imageUrl}}></Image>
            </View>

            <View style={styles.titleAndArtist}>
                <Text style={styles.textStyle} numberOfLines={1}>{songName}</Text>
                <Text style={styles.textStyle} numberOfLines={1}>{artistName}</Text>
            </View>

            <View style={styles.albumName}>
                <Text style={styles.textStyle} numberOfLines={1}> {albumName} </Text>
            </View>

            <View style={styles.length}>
                <Text style={styles.textStyle}> {millisToMinutesAndSeconds(duration)} </Text>
            </View>

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({

    songComp: { 
        flexDirection: 'row',
        // display: 'flex',
    }, 

     number: {
        width: '7%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        color: 'white',
        fontSize: 15
        
    },

    cover: {
        alignItems: 'center',
        // justifyContent: 'center',
        width: '20%',
    },

    titleAndArtist: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
    },

    albumName: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
    },

    albumImageStyle: {
        height: 72,
        width: 72,
        marginBottom: 12
    },

    length: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '20%',
        
    }, 
})