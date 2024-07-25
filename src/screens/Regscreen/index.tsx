import React from "react";
import {ImageBackground, Text, TouchableOpacity, View, Image} from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import {MenuStackTypes} from "../../navigation/MenuStack.navigation";
import { styles } from "./styles"

export function Regscreen({navigation}: MenuStackTypes) {
    const image = require('../../assets/Autscreen.png')
 return (
 
 <ImageBackground source={image} style={styleContainer.container}>
      <View>
        <Text style={styles.Text}> Cadastre-se </Text>
      </View>

      <TouchableOpacity style={styles.Botao2} onPress={() => navigation.push("Regscreen")}>
                <Text style={styles.Text3}>         Salvar          </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Botao} onPress={() => navigation.push("AutScreen")}>
                <Text style={styles.Text2}>         Voltar           </Text>
            </TouchableOpacity>

 </ImageBackground>
      
 )

}