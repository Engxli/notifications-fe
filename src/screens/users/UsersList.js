import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllUsers, sendNotification } from "../../apis/users";
import { useNavigation } from "@react-navigation/native";
const UsersList = () => {
  const navigation = useNavigation();

  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });

  const { mutate } = useMutation({
    mutationKey: ["notificaiton"],
    mutationFn: (_id) => sendNotification(_id),
  });

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text>UsersList</Text>
      <Button
        title="Add user"
        onPress={() => navigation.navigate("User Add")}
      />
      <Button title="Refresh" onPress={refetch} />
      <View style={{ gap: 20, paddingTop: 20 }}>
        {data?.map((user) => {
          return (
            <TouchableOpacity
              key={user._id}
              onPress={() => {
                navigation.navigate("User Details", { _id: user._id });
              }}
              style={{
                borderWidth: 2,
                borderColor: "black",
                padding: 10,
                borderRadius: 22,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "red",
                  position: "absolute",
                  top: -15,
                  right: -15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>
                  {user.notifications.length}
                </Text>
              </View>
              <Text>Full name: {user.full_name}</Text>
              <Text>Token: {JSON.stringify(user.notification_token)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default UsersList;

const styles = StyleSheet.create({});
