import instance from "../index.js";

exports.getAllUsers = async () => {
  const { data } = await instance.get("/users");
  return data;
};

exports.createUser = async (fullName, notification_token) => {
  const { data } = await instance.post("/users", {
    full_name: fullName,
    notification_token: notification_token,
  });
  return data;
};

exports.sendNotification = async (_id, title, body) => {
  const { data } = await instance.post(
    `/notifications/sendNotification/${_id}`,
    {
      title: title,
      body: body,
    }
  );
  return data;
};

exports.getOneUser = async (_id) => {
  console.log("hello");
  const { data } = await instance.get(`/users/${_id}`);

  return data;
};
