import { createStackNavigator } from "@react-navigation/stack";
import UsersList from "../../screens/users/UsersList";
import AddUser from "../../screens/users/AddUser";
import UserDetails from "../../screens/users/UserDetails";

const Stack = createStackNavigator();

const UserStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User List" component={UsersList} />
      <Stack.Screen name="User Add" component={AddUser} />
      <Stack.Screen name="User Details" component={UserDetails} />
    </Stack.Navigator>
  );
};

export default UserStackNavigation;
