import React from 'react';
import {View, Button} from "react-native";

function createBtn({navigation}) {

    const handlePress = () => {
        navigation.navigate("Create");
      };
    return (
        <View>
        <Button
        title={"ADD"}
        onPress={handlePress}
        mr={10}
        color={"red.700"}
        style={{
          backgroundColor: "red",
        }}
         
 />

        </View>
       
    );
}

export default createBtn;