import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import registerForPushNotificationsAsync from "../../utils/GetUserNotificationToken";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../apis/users";
const AddUser = () => {
  const [fullName, setFullName] = useState("");
  const [notificationToken, setNotificationToken] = useState("");

  useEffect(() => {
    const getNotificationToken = async () => {
      const notificationToken = await registerForPushNotificationsAsync();
      setNotificationToken(notificationToken);
    };
    getNotificationToken();
  }, []);

  const { mutate } = useMutation({
    mutationKey: ["create user"],
    mutationFn: () => createUser(fullName, notificationToken),
  });
  return (
    <View>
      <Text>Enter your name</Text>
      <TextInput
        placeholder="Enter your name here"
        onChangeText={(value) => {
          setFullName(value);
        }}
      />

      {notificationToken && (
        <Text>Your notification token is: {notificationToken}</Text>
      )}

      <Button title="create user" onPress={mutate} />
    </View>
  );
};

export default AddUser;

const styles = StyleSheet.create({});
