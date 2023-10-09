"use client";
import React, { startTransition } from "react";
import { useRouter } from "next/navigation";

import { removeUser } from "../actions";
const DeleteButton = ({ userID }) => {
  const router = useRouter();
  const handleDelete = async (e) => {
    e.preventDefault();

    await removeUser(userID);
    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default DeleteButton;
