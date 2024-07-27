import { createStackNavigator } from "@react-navigation/stack";
import Notifications from "../../screens/notifications/Notifications";

const Stack = createStackNavigator();
const NotificationsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default NotificationsNavigation;
