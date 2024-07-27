import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserStackNavigation from "./users/UserStackNavigation";
import NotificationsNavigation from "./notifications/NotificationsNavigation";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="users navigations" component={UserStackNavigation} />
      <Tab.Screen
        name="notificationss navigation"
        component={NotificationsNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
