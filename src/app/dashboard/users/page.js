import UserForm from "@/app/components/UserForm";
import DeleteButton from "@/app/components/DeleteButton";

async function getData() {
  const res = await fetch("http://localhost:8000/api/users", {
    method: "GET",
    "Content-Type": "application/json",
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UsersPage() {
  const data = await getData();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            key={user["_id"]}
          >
            <li>{user?.username}</li>
            <DeleteButton userID={user["_id"]} />
          </div>
        ))}
      </ul>
      <div>
        <UserForm />
      </div>
    </>
  );
}
