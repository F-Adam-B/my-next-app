"use server";
import connectMongo, { disconnectMongo } from "./utils/connectMongo";

import User from "./models/models";

const addUser = async (prevState, formData) => {
  await connectMongo();
  console.log("CONNECTED TO MONGO");
  try {
    const userExists = await User.exists({ username: formData?.username });
    if (userExists) {
      return { errorMessage: `Username ${formData.username} already exists` };
    } else {
      const newUser = new User(formData);
      await newUser.save();
      return { successMessage: `User successfully added!!` };
    }
  } catch (error) {
    console.error("FAILED TO CONNECT TO MONGO", error);
    throw error; // throw the error to be handled by the caller
  }
};

const removeUser = async (userID) => {
  try {
    await connectMongo();
    console.log("CONNECTED TO MONGO");
    await User.findByIdAndRemove(userID)
      .then((req, res) => {
        console.log("CONNECTED TO MONGO");
        console.log(`User with ID ${userID} removed!`);
        disconnectMongo();
      })
      .catch((error) => {
        console.log(error, `Error removing user with ID ${userID}`);
        disconnectMongo();
      });
  } catch (error) {
    console.error("FAILED TO CONNECT TO MONGO", error);
  }
};

export { addUser, removeUser };
