import "react-native-gesture-handler";
import * as firebase from "firebase";
import styled from "styled-components/native"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,FlatList } from 'react-native';

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import colors from "./assets/colors.js"
import Home from "./Screens/HomeScreen.js"
import TodoList from "./Screens/TodoList.js"
import CustomizedList from "./Screens/CustomizedList.js"

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen
     name="Home"
     component={Home}
      

     />
    <Stack.Screen
     name="TodoList"
     component={TodoList}
     options={(props)=>{
     
       
       return (
         {title:props.route.params.title,
           headerStyle:{
             
             backgroundColor:props.route.params.color,
           }
         }
         )
     }}

     />
    <Stack.Screen
     name="CustomizedList"
     component={CustomizedList}
     options={({route})=>{
       return (
         
         {
          title:route.params.title?`Edit ${route.params.title}` :
          "Create new List",
           headerStyle:{
             backgroundColor:route.params.color?route.params.color:colors.background,
             
           }
       
         }
         )
     }} 

     />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyD8rnAkDUrPbGEp04Ye8T1_CEliVYPLNhs",
  authDomain: "fire-todo-app-240d0.firebaseapp.com",
  projectId: "fire-todo-app-240d0",
  storageBucket: "fire-todo-app-240d0.appspot.com",
  messagingSenderId: "319033642297",
  appId: "1:319033642297:web:6b7c932d283cf7c331ece8",
  measurementId: "G-JP62JT4VVW"
};

firebase.initializedApp(firebaseConfig)