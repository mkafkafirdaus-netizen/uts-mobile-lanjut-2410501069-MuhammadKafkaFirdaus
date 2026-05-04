import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={HomeScreen}
        options={{ title: "Category" }}   
      />

      <Stack.Screen
        name="RecipeDetail"
        component={DetailScreen}
        options={{ title: "Recipe" }}
      />
    </Stack.Navigator>
  );
}