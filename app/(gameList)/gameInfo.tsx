import { View,Image,Text } from "react-native"
import React from "react"
import { ScaledSheet } from "react-native-size-matters"
import { useLocalSearchParams } from "expo-router"
import { GameFindDto } from "@/types/GameFind.dto"

export default function GameInfo() {
    // const route = useRoute<GameInfoRouteProp>()
    // const {game}= route.params

    const {game} = useLocalSearchParams()

    if (typeof game !== 'string') {
        throw new Error('error al recibir el objeto')
    }

    const objectGame: GameFindDto = JSON.parse(game)
    return(
        <View style={style.container}>
            <Image style={style.Image} source={{uri:objectGame.thumbnail}}/>
            <View style={style.InfoGame}>
                <View>
                    <Text style={style.Text}>Nombre: </Text>
                </View>
                <View><Text>{objectGame.title}</Text></View>
            </View>
        </View>
    )
}

const style = ScaledSheet.create({
    container: {
        display: 'flex'
    },
    Image:{
        width: '355@ms',
        height: '200@mvs0.3'
    },
    Text:{
        color: 'orange',
        display: 'flex'
    },
    InfoGame:{
        display:'flex'
    }
})