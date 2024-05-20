import React from "react";
import { FlatList, Text, View, Image, Dimensions } from "react-native";
import { GameFindDto } from "../types/GameFind.dto";
import { ScaledSheet } from "react-native-size-matters";
import { Link } from "expo-router";
const { width } = Dimensions.get("window");

interface Props {
    gameState: GameFindDto[];
}

const colores = [
    'orange', 'red', 'blue', 'green', 'white',
    'yellow', 'purple', 'pink', 'brown', 'gray', 'cyan',
    'magenta', 'lime', 'maroon', 'navy', 'olive', 'teal',
    'violet', 'indigo', 'gold', 'silver', 'coral', 'salmon',
    'khaki', 'plum', 'orchid', 'turquoise', 'aqua', 'lavender',
    'peach', 'periwinkle', 'crimson', 'azure', 'beige', 'mint',
    'rose', 'apricot', 'amber', 'emerald', 'jade', 'sapphire',
    'ruby', 'charcoal', 'ebony', 'ivory', 'copper', 'bronze'
];


function addedRandomColor(){
    const color = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    return colores[color]
}

export const GameList: React.FC<Props> = ({ gameState }) => {
    return (
        <FlatList
            data={gameState}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Link
                    href={{
                        pathname: "/gameInfo",
                        params: { game: JSON.stringify(item) }
                    }}
                    style={{backgroundColor:addedRandomColor(), color: 'white'}}
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
        marginVertical: '20@ms',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        fontSize: '18@ms',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 30
    },
    image: {
        width: width * 1,
        height: (width * 0.9) * 0.5,
        borderRadius: 10,
        alignSelf:'center'
    },
});
