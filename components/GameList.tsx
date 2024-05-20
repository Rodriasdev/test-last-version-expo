import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { GameFindDto } from "../types/GameFind.dto";
import { GameListNavigationProp } from "../types/Params";
import { ScaledSheet } from "react-native-size-matters";

interface Props {
    gameState: GameFindDto[];
}

export const GameList: React.FC<Props> = ({ gameState }) => {

    const navigation = useNavigation<GameListNavigationProp>();

    const handleGamePress = (game: GameFindDto) => {
        navigation.navigate("GameInfo", { game: game });
    };

    return (
        <FlatList
            data={gameState}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleGamePress(item)} key={item.id}>
                    <View style={styles.container}>
                        <Image source={{ uri: item.thumbnail }} style={styles.image} />
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
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