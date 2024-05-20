import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { GameSearch } from '@/components/GameSearch';
import { GameList } from '@/components/GameList';
import { GameFindDto } from '@/types/GameFind.dto';

export default function Games() {
  const [gameState,setGameState] = useState<Array<GameFindDto>>([])
  const [oldData, setOldData] = useState<Array<GameFindDto>>([])

  useEffect(() => {
    (
      async () => {
        const response = await fetch('https://www.freetogame.com/api/games')

        const data = await response.json()
        
        setGameState(data)
        setOldData(data)
      }
    )()
  },[])

  const searchGame = (title:string):void => { 
    const data = gameState.filter(game => game.title.toLocaleLowerCase() == title.toLocaleLowerCase())

    setGameState(data)
  }


  return (
    <View style={styles.container}>
      <GameSearch searchGame={searchGame}  oldData={oldData} setGameState={setGameState}/>
      <GameList gameState={gameState}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});