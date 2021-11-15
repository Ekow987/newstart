import React, { useReducer, useState, useEffect } from "react";
import { View, Platform, Alert } from "react-native";
import { Button, Input } from "native-base";
import { fruitAction } from "../store/actions/fruitActions";
import * as ImagePicker from "expo-image-picker";
import fruitReducer from "../store/fruitReducer/reducer";
import fruits from "../data";

function Create({ navigation }) {
  const [state, dispatch] = useReducer(fruitReducer, fruits);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Sorry, you need to grant us permission");
        }
      }
    })();
  }, []);

  const [newFruit, setNewFruit] = useState({
    image: "add your image here",
    title: "add your title here",
    para: "add your paragraph here",
  });

  const handleImageChange = async (value) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setNewFruit((prev) => ({
        ...prev,
        image: result.uri,
      }));
    }
  };

  const handleTitleChange = (value) => {
    setNewFruit((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleParaPress = (value) => {
    setNewFruit((prev) => ({
      ...prev,
      para: value,
    }));
  };
  const handlePress = () => {
    dispatch(fruitAction.add(newFruit.image, newFruit.title, newFruit.para));
    navigation.navigate("Home");
  };

  return (
    <View>
      <Button variant="outline" onPress={handleImageChange}>
        Select image
      </Button>

      <Input
        value={newFruit.title}
        variant="title"
        placeholder="title"
        onChange={handleTitleChange}
      />
      <Input
        value={newFruit.para}
        variant="paragraph"
        placeholder="paragraph"
        onChange={handleParaPress}
      />
      <Button onPress={handlePress}>Submit</Button>
    </View>
  );
}

export default Create;
