import { View,TextInput,Button } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { GameFindDto } from "../types/GameFind.dto";
import React from "react";
import { useState } from "react";

interface Props {
  searchGame: (value:string) =>void;
  oldData: GameFindDto[];
  setGameState: React.Dispatch<React.SetStateAction<GameFindDto[]>>
}

export const GameSearch: React.FC<Props> = ({searchGame, oldData,setGameState}) => {
  const [newGameState,setNewGameState] = useState<string>('')  

  const handleText = (name:string):void =>  {
    setNewGameState(name)
    if(name.length < 1) {
      setGameState(oldData)
    }
  }


  return(
      <View style={styles.buscador}>
          <TextInput onChangeText={handleText} style={styles.textInput} placeholder='Escribe un juego'/>
          <View style={styles.button}>
          <Button onPress={() => searchGame(newGameState)} title='Buscar'/>
          </View>
      </View>
    )
}


const styles = ScaledSheet.create({
    textInput: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#999',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 10,
      width: '200@ms',
      marginStart: 15
    },
    button: {
      width: '100@ms',
      marginStart: 20,
      marginTop: 8
    },
    buscador: {
      flexDirection: 'row'
    }
  });