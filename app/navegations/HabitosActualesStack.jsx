import { createStackNavigator } from "@react-navigation/stack";
import HabitosActuales from "../screens/HabitosActuales";

const Stack = createStackNavigator()

export default function HabitosActualesStack() {
  return (
    <Stack.Navigator>

         {/* Primera pagina del Stack */}
        <Stack.Screen 
            name="habitos-actuales"
            component={HabitosActuales}
            // Titulo que aparece en la parte superior
            options={{ title: "Habitos Actuales" }}
        />

    </Stack.Navigator>
  )
}
