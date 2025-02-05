import React from "react";
import UserProfile from "../../components/UserProfile";
const User = () => {
  const users = [
    { username: "Alice Johnson", Admin: "Admin" },
    { username: "Bob Smith", Admin: "User" },
    { username: "Charlie Brown", Admin: "Moderator" },
    { username: "David Lee", Admin: "User" },
    { username: "Ella Fitzgerald", Admin: "Admin" },
    { username: "Frank Ocean", Admin: "User" },
    { username: "Grace Hopper", Admin: "Moderator" },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-6 bg-gray-100 ">
      {users.map((user, index) => (
        <UserProfile key={index} username={user.username} Admin={user.Admin} />
      ))}
    </div>
  );
};

export default User;
