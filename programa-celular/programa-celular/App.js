import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  Animated
} from 'react-native';
import SpriteSheet from 'rn-sprite-sheet';
import InputSpinner from 'react-native-input-spinner';
import Ani from './components/anima';
import Calif from './components/calif';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';// You can import from local files

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image 
    source={{
      uri:'https://eltinteronoticias.com/uploads/imagen/2019/imagen/12611/principal_normal_Caudillos.jpg'
    }}
    style={{width: 400, height: 200, marginTop: 50}}
    />
    </View>
  );
}
function Animacion({route, navigation}){
const [animacionOpacity] = useState(new Animated.Value(1));

  const opacityAnimacion = () => {
    Animated.timing(animacionOpacity, {
      toValue: 0,
      duration: 1000,
    }).start();
  };
  const opacityAnimacion2 = () => {
    Animated.timing(animacionOpacity, {
      toValue: 1000,
      duration: 2000,
    }).start();
  };

  const opacityStyle = {
    opacity: animacionOpacity,
  };

  return (
    <View style={{backgroundColor:"#D2D3EF", flex:1}}>
         <Text style={{textAlign:'center', fontSize:30}}> Y ahora el michimago desaparecera</Text> 
        <Animated.View style={opacityStyle}>
      <Image
          source={{
            uri: 'https://pbs.twimg.com/media/EWY3tt7WkAAVq9t.jpg',
          }}
style={{height:150, width:200, alignSelf: 'center', marginTop:200}}
        />
      </Animated.View>
      <TouchableOpacity onPress={opacityAnimacion} style={styles.boton}>
       <Text>Desaparecer</Text></TouchableOpacity>
       <TouchableOpacity onPress={opacityAnimacion2} style={styles.boton}>
       <Text>Aparecer</Text></TouchableOpacity>
    </View>
  );
}
function Sprite() {
  return (
    <View style={{ flex: 0.95, justifyContent: 'center', alignItems: 'center' }}>
      <Ani/>
    </View>
  );
}function Cal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calif/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Inicio" component={HomeScreen} options={{
            title: 'Inicio',
            headerStyle: {
           
              shadowColor: '#E7D2EF',
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: .5,
              shadowRadius: 3,
            },
            headerTintColor: 'gray',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

          <Tab.Screen name="Animacion" component={Animacion} options={{
            title: 'Animacion',
            headerStyle: {
              backgroundColor: '#F5D7C6',
              shadowColor: '#E7D2EF',
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: .5,
              shadowRadius: 3,
            },
            headerTintColor: 'ghostwhite',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
          <Tab.Screen name="Sprite" component={Sprite} options={{
            title: 'Sprite',
            headerStyle: {
              backgroundColor: '#F5D7C6',
              shadowColor: '#E7D2EF',
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: .5,
              shadowRadius: 3,
            },
            headerTintColor: 'ghostwhite',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
           <Tab.Screen name="Cal" component={Cal} options={{
            title: 'Calificaciones',
            headerStyle: {
              backgroundColor: '#F5D7C6',
              shadowColor: '#E7D2EF',
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: .5,
              shadowRadius: 3,
            },
            headerTintColor: 'ghostwhite',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
           </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: '#7882A4' ,
    fontWeight: 'light',
    textAlign: 'center',
  },
 boton:{
    backgroundColor:'#D2D3EF',
    shadowColor: '#E7D2EF',
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: .5,
              shadowRadius: 3,
      justifyContent:'center',
    textAlign:'center',
    width:100,
    height:40,
    color:
  'white',
  marginTop:20,
  alignSelf:'center'
  },
});