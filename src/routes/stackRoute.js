import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home";
import Details from "../Details/details";
import Create from "../home/create";
import CreateButton from "../lib/Card/createBtn";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Create"
      screenOptions={{
        headerTitleAlign: "left",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <CreateButton />,
        }}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="Create"
        children={({ navigation }) => <Create navigation={navigation} />}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
