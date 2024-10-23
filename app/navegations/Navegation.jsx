import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import AgregarHabitosStack from "./AgregarHabitosStack";
import ModificarHabitosStack from "./ModificarHabitosStack";
import HabitosActualesStack from "./HabitosActualesStack";

const Tab = createBottomTabNavigator();

export default function Navegation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#00a680",
          tabBarInactiveTintColor: "#001848",
          tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
        })}
      >

        <Tab.Screen
          name="agregar-habito-main"
          component={AgregarHabitosStack}
          options={{ title: "Agregar Hábitos" }}
        />

        <Tab.Screen
          name="habitos-actuales-main"
          component={HabitosActualesStack}
          options={{ title: "Hábitos Actuales" }}
        />

        <Tab.Screen
          name="modificar-habitos-main"
          component={ModificarHabitosStack}
          options={{ title: "Modificar Hábitos" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  switch (route.name) {
    case "habitos-actuales-main":
      iconName = "check";
      break;
    case "agregar-habito-main":
      iconName = "add-circle";
      break;
    case "modificar-habitos-main":
      iconName = "edit";
      break;
    default:
      iconName = "help";
      break;
  }

  return <Icon type="material" name={iconName} color={color} size={size} />;
}
