// import { useRoute } from "@react-navigation/native"
// import { View,Image,Text } from "react-native"
// import { GameInfoRouteProp } from "@/types/Params"
// import React from "react"
// import { ScaledSheet } from "react-native-size-matters"

// export default function GameInfo() {
//     const route = useRoute<GameInfoRouteProp>()
//     const {game}= route.params
    
//     return(
//         <View style={style.container}>
//             <Image style={style.Image} source={{uri:game.thumbnail}}/>
//             <View style={style.InfoGame}>
//                 <View>
//                     <Text style={style.Text}>Nombre: </Text>
//                 </View>
//                 <View><Text>{game.title}</Text></View>
//             </View>
//         </View>
//     )
// }

// const style = ScaledSheet.create({
//     container: {
//         display: 'flex'
//     },
//     Image:{
//         width: '355@ms',
//         height: '200@mvs0.3'
//     },
//     Text:{
//         color: 'orange',
//         display: 'flex'
//     },
//     InfoGame:{
//         display:'flex'
//     }
// })