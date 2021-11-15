import React, { useReducer } from "react";
import { View } from "react-native";
import Card from "../lib/Card/card";
import fruitReducer from "../store/fruitReducer/reducer";
import fruits from "../data";
import { fruitAction } from "../store/actions/fruitActions";

function Home({ navigation }) {
  const [state, dispatch] = useReducer(fruitReducer, fruits);

  const handleCardPress = (id) => {
    dispatch(fruitAction.delete(id));
  };

  return (
    <View>
      {state.map((fruit) => (
        <View key={fruit.id}>
          <Card
            navigation={navigation}
            handleCardPress={handleCardPress}
            fruit={fruit}
          />
        </View>
      ))}
    </View>
  );
}

export default Home;
