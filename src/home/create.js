import React, { useReducer, useState } from 'react';
import {View} from "react-native";
import { Button, Input } from "native-base";
import fruit from '../data';
import {fruitAction} from '../store/actions/fruitActions';
import fruitReducer from '../store/fruitReducer/reducer';


function create() {

    const [state , dispatch] = useReducer(fruitReducer , fruit);
 
    const [newFruit , setNewFruit] = useState({
      image:"add your image here",
      title:"add your title here",
      para: "add your paragraph here",
    });

    const handleImageChange = (value)=>{
        setNewFruit((prev)=>({
            ...prev,
            image:value,
        }));
    }
 const handleTitleChange = (value)=>{
     setNewFruit((prev)=>({
         ...prev,
         title : value,

     }));
 }

 const handleParaPress = (value)=>{
     setNewFruit((prev)=>({
         ...prev,
         para:value,

     }));
 }
 const handlePress =()=>{
  dispatch(fruitAction.add(newFruit.image , newFruit.title , newFruit.para));
  navigation.navigate('home');
 }


    return (
    <View>
    <Input 
    value={newFruit.image}
    variant="Images"
    placeholder="Images" 
    onChange={handleImageChange}
    />
    <Input 
    value={newFruit.title}
    variant="title" 
    placeholder="title" 
    onChange={ handleTitleChange}/>
    <Input 
    value={newFruit.para}
    variant="paragraph" 
    placeholder="paragraph" 
    onChange={ handleParaPress}/>
    <Button onPress={handlePress}>Submit</Button>
    </View>
    );
}

export default create;