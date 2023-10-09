"use client";
import React, { startTransition, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { experimental_useFormState as useFormState } from "react-dom";
import { addUser } from "../actions";
import { getData } from "../dashboard/users/page";
const initialState = {
  username: "",
  email: "",
  age: "",
  address: "",
};
const UserForm = ({ handleDataRefresh }) => {
  const router = useRouter();
  // const [state, formAction] = useFormState(addUser, initialState);
  // console.log(state, "state");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:8000/api/users", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    //   body: JSON.stringify({
    //     username,
    //     email,
    //     age,
    //     address,
    //   }),
    // });

    const { errorMessage, successMessage } = await addUser(initialState, {
      username,
      email,
      age,
      address,
    });

    if (!!errorMessage) {
      return setErrorMessage(errorMessage);
    }

    setUsername("");
    setSuccessMessage(successMessage);
    startTransition(() => {
      router.refresh();
    });

    // const data = await response.json();
  };
  return (
    <>
      {!!successMessage && <h3>{successMessage}</h3>}
      {!!errorMessage && <h3>{errorMessage}</h3>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>

          <input
            id="address"
            name="address"
            type="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
