import React from "react";
import { View, Text, Image, StyleSheet, Button, Pressable } from "react-native";
import { images } from "../../assets";

function Card({ fruit, navigation, handleCardPress }) {
  const handleNavigation = () => {
    navigation.navigate("Details");
  };

  return (
    <View>
      <View style={styles.card} key={fruit.id}>
        <Pressable onPress={() => handleCardPress(fruit.id)}>
          <Image style={styles.cardImg} source={images[fruit.img]} />
        </Pressable>

        <View style={styles.cardContent}>
          <Text style={styles.title}>{fruit.title}</Text>
          <Text style={styles.para}>{fruit.para}</Text>
        </View>

        <Button onPress={handleNavigation} title={"Press me"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    borderWidth: 2,
    borderColor: "green",
    margin: "auto",
    borderRadius: 5,
    marginBottom: 10,
    elevation: 10,
    shadowOffset: 10,
    shadowColor: "silver",
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 3,
    },
  },
  cardImg: {
    height: 320,
    width: 200,
  },
  cardContent: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderTopColor: "red",
    borderTopWidth: 1,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  para: {
    fontFamily: "Poppins",
    paddingBottom: 10,
  },
});

export default Card;
