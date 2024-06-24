import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';

  const Calif = () => {
  const [uno, setuno] = useState(0);
  const [dos, setdos] = useState(0);
  const [tres, setTres] = useState(0);
  const [final, setFinal] = useState(0);

  const calcluar = () =>{
    setFinal ((uno+dos+tres)/3)
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.titulok} >   Calificaciones ^ • n • ^  ฅ </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 5,
          margin: 5,
          flex: 1,
        }}>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.textin}>Elemento</Text>
          
               <Text style={styles.textola}>Primer Parcial</Text>
             <Text style={styles.textola}>Segundo Parcial</Text>
            <Text style={styles.textola}>Tercer Parcial</Text>
          
        </View>
  
        <View style={{marginTop:5}}>
          <Text style={styles.textin}>Calificación</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              margin: 5,
              width: 100,
              backgroundColor: 'azure',
              borderRadius: 5,
              height: 30,
               textAlign:"center",
             paddingTop: 6,}}
            placeholder="0"
            onChangeText={(uno) => {
             setuno(Number(uno));
            }}
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              margin: 8,
              width: 100,
              backgroundColor: 'azure',
              borderRadius: 5,
              height: 30,
               textAlign:"center",
  paddingTop: 6,           }}
            placeholder="0"
            onChangeText={(dos) => {
              setdos(Number(dos));
            }}
    
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              margin: 8,
              width: 100,
              backgroundColor: 'azure',
              borderRadius: 5,
              height: 30,
               paddingTop: 6,
                textAlign:"center",
            }}
            placeholder="0"
            onChangeText={(tres) => {
               setTres(Number(tres));
            }}
          />
        
        </View>
      </View>
      
      <View style={{marginTop: 41}}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.87508e8475619c5fff350f4128cf47fc?rik=%2fyO5kvJ1ZqHSMg&pid=ImgRaw&r=0&sres=1&sresct=1',
          }}
          style={{ width: 200, height: 150, resizeMode: 'contain'}}
        />
      </View><View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '95%',
        }}>
        <Button color="#D9D7F1" title="calcular" onPress={()=>{calcluar()}}/>
        <Text style={styles.titul}>Total:       {final}</Text>
      </View>
      <View style={{marginTop:5,}}>
        <Text>Ingrid Yuliana Perez Rodriguez</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'space-between',
    alignItems: 'center',
 
    backgroundColor: '#FFF3F3',
    padding: 8,
  },
   titulok: {
    color: 'white',
    fontSize: 22,
  backgroundColor: '#BACFE1',

    paddingBottom:5,
    margin: 10,
  },
    titul: {
    color: 'white',
    fontSize: 17,
  backgroundColor: '#BACFE1',
    padding: 8,
    alignItems:"center",
  },
  
   textola: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#D3B1C2',
    paddingTop: 6,
    marginTop: 2 ,
    width:145,
    textAlign:"center",
  },
  
   textolaa: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#D3B1C2',
    paddingTop: 6,
    marginTop: 2 ,
    width:45,
    textAlign:"center",
  },
  textla: {
 textAlign:"center",
    marginTop: 2 ,
    color: 'white',
    fontSize: 18,
    backgroundColor: '#C4CBA4',
    paddingTop: 6,
  },
   textin: {
      textAlign:"center",
    color: 'white',
    fontSize: 18,
    backgroundColor: '#C197D2',
    paddingTop: 6,
  },
});
export default Calif;