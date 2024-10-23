import { createStackNavigator } from "@react-navigation/stack";
import ModificarHabitos from "../screens/ModificarHabitos";

const Stack = createStackNavigator()

export default function ModificarHabitosStack() {
  return (
    <Stack.Navigator>

         {/* Primera pagina del Stack */}
        <Stack.Screen 
            // Es el nombre que se utiliza para navegar a esta pantalla
            name="modificar-habitos"
            component={ModificarHabitos}
            // Titulo que aparece en la parte superior
            options={{ title: "Modificar Habitos" }}
        />

    </Stack.Navigator>
  )
}
