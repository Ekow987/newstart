import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CreateBtn() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Create");
  };

  return (
    <View>
      <Button
        title={"ADD"}
        onPress={handlePress}
        mr={10}
        color="red"
        style={{
          backgroundColor: "red",
        }}
      />
    </View>
  );
}

export default CreateBtn;
