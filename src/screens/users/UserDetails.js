import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRoute } from "@react-navigation/native";
import { getOneUser, sendNotification } from "../../apis/users";
const UserDetails = () => {
  const [notificationInfo, setNotificationInfo] = useState({
    title: "",
    body: "",
  });
  const routes = useRoute();
  const { _id } = routes.params;

  const { data, refetch } = useQuery({
    queryKey: ["user", _id || ""],
    queryFn: () => getOneUser(_id),
  });

  const { mutate } = useMutation({
    mutationFn: () =>
      sendNotification(_id, notificationInfo.title, notificationInfo.body),
  });

  return (
    <View style={{ padding: 20 }}>
      <Text>Fullname: {data?.full_name}</Text>
      <Text>Token: {data?.notification_token}</Text>
      <TextInput
        placeholder="Title"
        onChangeText={(value) => {
          setNotificationInfo({ ...notificationInfo, title: value });
        }}
      />
      <TextInput
        placeholder="Body"
        onChangeText={(value) => {
          setNotificationInfo({ ...notificationInfo, body: value });
        }}
      />
      <Button
        onPress={mutate}
        title="Send"
        disabled={!notificationInfo.title || !notificationInfo.body}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Notifications: {data?.notifications.length}</Text>
        <Button title="Refresh" onPress={refetch} />
      </View>
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        {data?.notifications?.map((notificaiton) => {
          return (
            <View
              key={notificaiton._id}
              style={{
                borderWidth: 2,
                borderRadius: 22,
                borderColor: "black",
                padding: 20,
              }}
            >
              <Text>Title: {notificaiton.title}</Text>
              <Text>Body: {notificaiton.body}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({});
