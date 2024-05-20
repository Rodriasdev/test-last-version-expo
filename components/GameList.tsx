import React from "react";
import { FlatList, Text, View, Image } from "react-native";
import { GameFindDto } from "../types/GameFind.dto";
import { ScaledSheet } from "react-native-size-matters";
import { Link } from "expo-router";


interface Props {
    gameState: GameFindDto[];
}


export const GameList: React.FC<Props> = ({ gameState }) => {

    return (
        <FlatList
            data={gameState}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Link 
                href={{
                    pathname:"/gameInfo",
                    params: {game: JSON.stringify(item)}
                }}
                >
                    <View style={styles.container}>
                        <Image source={{ uri: item.thumbnail }} style={styles.image} />
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                </Link>
            )}
        />
    );
};

const styles = ScaledSheet.create({
    container: {
        marginVertical: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
    },
    image: {
        width: '350@ms',
        height: '200@mvs0.3',
        borderRadius: 10,
    },
});