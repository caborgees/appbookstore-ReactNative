import React from 'react';
import { View, Text, Button , StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function Home() {
  const navigation = useNavigation();

  function irHome(){
    navigation.navigate('Home', {} );
  }

  function irLivro(){
    navigation.navigate('Livro', {} );
  }

 return (
   <ScrollView>
   <View>
     <View style={{background: '#E0F0D5'}}>
<Ionicons name="md-arrow-back" size={22} color="white"
style={{margin: 5}} />

      <Text style={{color: 'gray', fontWeight: 'bold'}}>Recomendados</Text>
<View style={{ flex: 1,flexDirection: 'row'}}>
    
    
    <TouchableOpacity onPress={irLivro}>
      <Image
        style={styles.ImagemRecomendados}
        source={require('./assets/recomendado1.png')}

      /> 
      </TouchableOpacity>

      
       <Image
        style={styles.ImagemRecomendados}
        source={require('./assets/recomendado2.png')}
      />
     </View>
     <Text style={{color: 'gray', fontWeight: 'bold'}}> Explore </Text>
     
    <View style={{flex:1, flexDirection: 'row', marginBottom: 40
}}> 
     <View style={styles.Caixa}>
      <Image
        style={styles.CapaLivro}
        source={require('./assets/livro2.png')}
      />
      <Text style={styles.NomeLivro}> Cuide-se</Text>
      <Text style = {styles.Autor}> Catia Bazzan</Text>
      </View>

      <View style={styles.Caixa}>
      <Image
        style={styles.CapaLivro}
        source={require('./assets/livro1.png')}
      />
      <Text style={styles.NomeLivro}> A guerra dos Fae</Text>
      <Text style = {styles.Autor}> Catia Bazzan</Text>
      </View>
      </View> 

      <View style={{flex:1, flexDirection: 'row', marginBottom: 40}}> 
     <View style={styles.Caixa}>
      <Image
        style={styles.CapaLivro}
        source={require('./assets/livro3.png')}
      />
      <Text style={styles.NomeLivro}> Malala</Text>
      <Text style = {styles.Autor}> Catia Bazzan</Text>
      </View>

      <View style={styles.Caixa}>
      <Image
        style={styles.CapaLivro}
        source={require('./assets/livro4.png')}
      />
      <Text style={styles.NomeLivro}> Naturalmente Bruxa</Text>
      <Text style = {styles.Autor}> Catia Bazzan</Text>
      </View>
      </View> 

      <View style={{flex:1, flexDirection: 'row', marginBottom: 40}}> 
     <View style={styles.Caixa}>
      <Image
        style={styles.CapaLivro}
        source={require('./assets/livro5.png')}
      />
      <Text style={styles.NomeLivro}> Me poupe</Text>
      <Text style = {styles.Autor}> Catia Bazzan</Text>
      </View>

      <View style={styles.Caixa}>
      <Image
        style={styles.CapaLivro}
        source={require('./assets/livro6.png')}
      />
      <Text style={styles.NomeLivro}> Ganhei uma vida</Text>
      <Text style = {styles.Autor}> Catia Bazzan</Text>
      </View>
      </View> 

      <View style={{flex:1, flexDirection: 'row', marginBottom: 40}}> 
     <View style={styles.Caixa}>
      <Image
        style={styles.CapaLivro}
        source={require('./assets/livro7.png')}
      />
      <Text style={styles.NomeLivro}> O melhor de mim</Text>
      <Text style = {styles.Autor}> Catia Bazzan</Text>
      </View>

      <View style={styles.Caixa}>
      <Image
        style={styles.CapaLivro}
        source={require('./assets/livro8.png')}
      />
      <Text style={styles.NomeLivro}>O poder do Habito</Text>
      <Text style = {styles.Autor}> Catia Bazzan</Text>
      </View>
      </View> 
      
      
    </View>
     
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  ImagemRecomendados:{
  width:130,
  height: 205,
  margin: 10

},
Caixa:{
  width:138,
  height: 120,
  background: '#EEBB4D',
borderRadius: 20,
top: 30,
margin: 10,

},
CapaLivro:{
width:100,
height:130,
left: 20,
bottom: 15

},
NomeLivro:{
  textAlign: 'center',
  color: '#3F4441',
  fontSize: 14, 
  fontWeight: 'bold',

},
Autor:{
  fontSize: 12,
  textAlign: 'center',
  color:'3F4441'
}
})