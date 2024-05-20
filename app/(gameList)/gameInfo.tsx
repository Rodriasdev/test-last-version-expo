import { View,Image,Text, Dimensions } from "react-native"
import React from "react"
import { ScaledSheet } from "react-native-size-matters"
import { useLocalSearchParams } from "expo-router"
import { GameFindDto } from "@/types/GameFind.dto"
const {width} = Dimensions.get('window')
import { Link } from "expo-router"

export default function GameInfo() {

    const {game} = useLocalSearchParams()

    if (typeof game !== 'string') {
        throw new Error('error al recibir el objeto')
    }

    const objectGame: GameFindDto = JSON.parse(game)
    return(
        <View style={style.container}>
            <Image style={style.Image} source={{uri:objectGame.thumbnail}}/>
            <View style={style.InfoGame}>
                    <Text style={style.Text}>Nombre: </Text>
                    <Text style={style.DataGame}>{objectGame.title}</Text>
            </View>
            <View style={style.InfoGame}>
                    <Text style={style.Text}>Descripción: </Text>
                    <Text style={style.DataGame}>{objectGame.short_description}</Text>
            </View>
            <View style={style.InfoGame}>
                    <Text style={style.Text}>Género: </Text>
                    <Text style={style.DataGame}>{objectGame.genre}</Text>
            </View>
            <View style={style.InfoGame}>
                    <Text style={style.Text}>Plataforma: </Text>
                    <Text style={style.DataGame}>{objectGame.platform}</Text>
            </View>
            <View style={style.InfoGame}>
                    <Text style={style.Text}>Distribuidores: </Text>
                    <Text style={style.DataGame}>{objectGame.publisher}</Text>
            </View>
            <View style={style.InfoGame}>
                    <Text style={style.Text}>Desarroladores: </Text>
                    <Text style={style.DataGame}>{objectGame.developer}</Text>
            </View>
            <View style={style.InfoGame}>
                    <Text style={style.Text}>Fecha de lanzamiento: </Text>
                    <Text style={style.DataGame}>{objectGame.release_date}</Text>
            </View>
            <View>
                    <Link style={style.link} href={objectGame.freetogame_profile_url}>Ver perfil en FreeToGame</Link>
            </View>
            <View>
                    <Link style={style.link} href={objectGame.game_url}>Descargar el juego</Link>
            </View>
        </View>
    )
}

const style = ScaledSheet.create({
    container: {
        display: 'flex'
    },
    Image:{
        width: width * 1,
        height: width * 0.5
    },
    Text:{
        color: 'orange',
        display: 'flex',
        fontSize: 17
    },
    DataGame: {
        fontSize: 17
    },
    InfoGame:{
        flexDirection:'row',
        marginTop: 10,
        marginHorizontal: 10,
        width: width * 0.75,
        marginVertical: 10
    },
    link: {
        width: width,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'orange',
        marginVertical: 10
    }
})