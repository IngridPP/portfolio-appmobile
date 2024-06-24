import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';
import InputSpinner from 'react-native-input-spinner';

  const Ani = () => {
  const [loopSprite, setLoop] = useState(true);
  const [resetSprite, setReset] = useState(true);
  const [fpsSprite, setFps] = useState(5);

  const valoresFPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const linkAni = (type) => {
    this.link.play({
      type,
      fps: Number(fpsSprite),
      loop: loopSprite,
      resetAfterFinish: resetSprite,
    });
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.contAni}>
         <SpriteSheet
          ref={(ref) => {
            this.link = ref;
          }}
          frameHeight={100}
          frameWidth={100}
          width={80}
          height={80}
           marginLeft= {200}
          source={require('./balaso.png')}
          columns={8}
          rows={8}
          imageStyle={{ marginTop: 1, resizeMode: 'cover'}}
          animations={{
            correr: [
           
              1,
              2,
              9,
              10,
                      
            ],
          corde: [
          16,17,18,19,20,21,22,23,
            ],
           coriz: [
          24,26,27,28,29,30,31,
            ],
            dis: [
             32,33,34,35,36,
            ],
             dis2: [
            40,41,42,43,44,
            ],
          }}
        /><Text>⠀⠀⠀⠀⠀⠀⠀⠀</Text>
   </View>

       
<View style= {styles.row}>
 
       
            
        <View style={styles.contBoton}>
        <Text style={{ borderWidth:1, borderStyle:'dashed', marginBottom:5, width:90, borderRadius:5, textAlign:'center', color: 'gray', fontSize:20,}}>Chica</Text>
          <TouchableOpacity onPress={() => linkAni('correr')}   style={{ backgroundColor: '#D9D7F1', marginBottom:5, width:90, borderRadius:10 }}>
        <Text style={{ fontSize: 16, color: '#fff', textAlign:'center', }}>Cubrirse</Text>
      </TouchableOpacity> 
          <TouchableOpacity onPress={() => linkAni('corde')}   style={{ backgroundColor: '#D9D7F1', marginBottom:5, width:90, borderRadius:10 }}>
        <Text style={{ fontSize: 16, color: '#fff', textAlign:'center', }}>Lado Izquierdo</Text>
      </TouchableOpacity> 
       <TouchableOpacity onPress={() => linkAni('coriz')}   style={{ backgroundColor: '#D9D7F1', marginBottom:5, width:90 , borderRadius:10}}>
        <Text style={{ fontSize: 16, color: '#fff', textAlign:'center', }}>Lado Derecho</Text>
      </TouchableOpacity> 
       <TouchableOpacity onPress={() => linkAni('dis')}   style={{ backgroundColor: '#D9D7F1', marginBottom:5, width:90 , borderRadius:10}}>
        <Text style={{ fontSize: 16, color: '#fff', textAlign:'center', }}>Disparo Izquierdo</Text>
      </TouchableOpacity>  
         </View>  
         </View>
      
            <View style={[ styles.borde]}>
       <View>
          <Image
            style={styles.imagen}
            source={require('./sticker.png')}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Text style={{ borderWidth:1, borderStyle:'dashed', width:90, borderRadius:5, textAlign:'center', color: 'gray', fontSize:20}}>Loop</Text>
            <Switch
              trackColor={{ false: '#FA848F', true: '#85FAA0' }}
              onValueChange={(loopSprite) => {
                setLoop((previousState) => !previousState);
              }}
              value={loopSprite}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ borderWidth:1, borderStyle:'dashed', marginBottom:5, width:90, borderRadius:5, textAlign:'center', color: 'gray', fontSize:20}}>FPS</Text>
            <InputSpinner
              max={24}
              min={1}
              step={1}
              skin="modern"
              style={{width:40, height:10}}
              colorMax={'#f04048'}
              colorMin={'#40c5f4'}
              value={16}
              onChange={(num) => {
                console.log(num);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ borderWidth:1, borderStyle:'dashed', marginBottom:5, width:90, borderRadius:5, textAlign:'center', color: 'gray', fontSize:20}}>Reset</Text>
            <Switch
              trackColor={{ false: '#FA848F', true: '#85FAA0' }}
              onValueChange={(resetSprite) => {
                setReset((previousState) => !previousState);
              }}
              value={resetSprite}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingHorizontal: 70,
    paddingBottom: 160,
    flex: 2,
    backgroundColor: 'lightsteelblue',
  },
  contAni: { flexDirection: 'row', padding: 15, margin: 5 ,marginBottom:20, backgroundColor: 'gray',},
   contAni2: { flexDirection: 'row', padding: 5, margin: 5 , marginTop:20},
  borde: { borderWidth: 1, borderRadius: 10, marginLeft: 20, marginTop: 10, borderStyle:'dashed'},
    contBoton: {
    flex:1.0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection:'column',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
   marginLeft:10,
    borderStyle:'dashed',
       width:70,
          backgroundColor: 'white',
            backgroundColor: 'lightsteelblue',
  },
  row:{
    flexDirection:'row',
      backgroundColor: 'lightsteelblue',
  },
  contBoton2: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection:'column',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginLeft:10,
    borderStyle:'dashed',
     width:70,
          backgroundColor: 'white',
  },
  imagen: {
    width: 50,
    height: 50,
    marginTop: -30,
    marginLeft: -30,
  },
    button: {
    height: 50,
    width: 30,
      marginTop:8,
  },
});
export default Ani;