import React from "react";
import { ImageBackground, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import { styles } from "./styles"
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";
import { styleContainer } from "../../styles/globalstyle";

export interface IAuthenticate {
    email?: string;
    password?: string;
}




export function AutScreen({ navigation }: MenuStackTypes) {
    const image = require('../../assets/Autscreen.png')
    const logo  = require('../../assets/image2.png')
     
    const[data, setData] = useState<IAuthenticate>();
    async function handleSignIn(){
        if(data?.email && data.password){
            console.log(data)
        }else{
         Alert.alert("Preencha todos os campos!!!");
        }
    }
    function handleRegister (){
       navigation.navigate("Register")
    }
    function handleChange (item: IAuthenticate){
         setData({  ...data, ...item});

    }







    return (
       
        

        <ImageBackground source={image} style={styleContainer.container}>
            <View style={styles.Cadastro}>
                <Text style={styles.Text}>Bem-vindo ao Ourspace</Text>
                <Image  source={logo}>
            </Image>
            </View>
            <View>
                
            </View>
            
            <TouchableOpacity style={styles.Botao2} onPress={() => navigation.push("Regscreen")}>
                <Text style={styles.Text3}>         Entrar          </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Botao} onPress={() => navigation.push("Regscreen")}>
                <Text style={styles.Text2}>    Cadastre-se     </Text>
            </TouchableOpacity>
        </ImageBackground>

    )


}