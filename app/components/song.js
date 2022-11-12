import 'react-native-gesture-handler';
import { StyleSheet, Image, SafeAreaView, Text, View, Pressable } from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from "react-native-webview"

export default function Song({index, imageUrl, songName, artistName, albumName, duration, navigation, preview_url, external_url}) {

    return (
        <SafeAreaView style={styles.songComp}>

            <Pressable style={styles.playButton} onPress={() => {navigation.navigate("song-preview", {link: preview_url})}}>
                <FontAwesome name="play-circle" size={24} color="#1DB954"/>
            </Pressable>

            <Pressable style={styles.cover} onPress={() => {navigation.navigate("song-preview", {link: external_url})}}>
                <Image style={styles.albumImageStyle} source={{uri: imageUrl}}></Image>
            </Pressable>

            <Pressable style={styles.titleAndArtist} onPress={() => {navigation.navigate("song-preview", {link: external_url})}}>
                <Text style={styles.textStyle} numberOfLines={1}>{songName}</Text>
                <Text style={styles.textStyle} numberOfLines={1}>{artistName}</Text>
            </Pressable>

            <Pressable style={styles.albumName} onPress={() => {navigation.navigate("song-preview", {link: external_url})}}>
                <Text style={styles.textStyle} numberOfLines={1}> {albumName} </Text>
            </Pressable>

            <Pressable style={styles.length} onPress={() => {navigation.navigate("song-preview", {link: external_url})}}>
                <Text style={styles.textStyle}> {millisToMinutesAndSeconds(duration)} </Text>
            </Pressable>

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({

    songComp: { 
        flexDirection: 'row',
    }, 

     playButton: {
        width: '7%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    textStyle: {
        color: 'white',
        fontSize: 15
        
    },

    cover: {
        alignItems: 'center',
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
        height: 60,
        width: 60,
        marginBottom: 12,

    },

    length: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '20%',
        
    }, 
})