import { createStackNavigator } from "@react-navigation/stack";
import AgregarHabitos from "../screens/AgregarHabitos"

const Stack = createStackNavigator()

export default function AgregarHabitosStack() {
  return (
    <Stack.Navigator>

         {/* Primera pagina del Stack */}
        <Stack.Screen 
            name="agregar-habitos"
            component={AgregarHabitos}
            // Titulo que aparece en la parte superior
            options={{ title: "Agregar Habitos" }}
        />

    </Stack.Navigator>
  )
}
