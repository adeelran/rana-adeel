import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Details from "./Details";
import Main from "./Main";
const Stack=createNativeStackNavigator();
export default AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}