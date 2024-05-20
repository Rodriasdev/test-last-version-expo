import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GameFindDto } from "./GameFind.dto";
import {useRouter } from 'expo-router'

export type RootStackParamList = {
    GameList: undefined;
    GameInfo : {game:GameFindDto};
}

export type GameListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GameList'>;
export type GameInfoRouteProp = RouteProp<RootStackParamList, 'GameInfo'>;