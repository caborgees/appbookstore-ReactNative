import React from 'react';
import { View, Text, Button , Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function irSobre(){
    navigation.navigate('Livro', {} );
  }

  function irCatalogo(){
    navigation.navigate('Catalogo', {} );
  }

 return (
   <View style={styles.Capa}>

       <Image
        style={styles.Titulo}
        source={require('./assets/titulo.png')}
      />

      <TextInput style={styles.BotaoTexto} placeholder="   seuemailaqui@gmail.com" />
      <TextInput style={styles.BotaoTexto} placeholder="   **********" />
      <TouchableOpacity style={styles.BotaoEntrar}  
      onPress={irCatalogo}
        >Entrar </TouchableOpacity>

      <Image
        style={styles.ImagemCapa}
        source={require('./assets/capa.png')}
      />
     
   
       </View>

  );
}

const styles = StyleSheet.create({
  Capa :{
    backgroundColor: '#96BB7C',
    height: 567
},
Titulo :{
  height: 78,
  width: 132,
left: 90,
top: 96
},
BotaoTexto:{
  position:'relative',
  width: 264,
height: 48,
left: 30,
top: 123,
background: 'white',
borderRadius: 30,
marginBottom:20

},
BotaoEntrar:{
  position:'relative',
  width: 264,
height: 48,
left: 30,
top: 123,
color:'white',
background: '#EEBB4D',
borderRadius: 30,
marginBottom:20,
textAlign:'center',
padding: 10

},
ImagemCapa:{
  width: 310,
height: 205,
left: 9,
top: 80

}})