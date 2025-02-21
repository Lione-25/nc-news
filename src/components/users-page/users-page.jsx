import { useState, useEffect } from "react";
import UsersList from "./users-list";
import { fetchUsers } from "../../api";

function UsersPage() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then(([usersInfo]) => {
      setIsLoading(false);
      setUsersInfo(usersInfo);
    });
  }, []);

  return (
    <>
      <h1 id="users">Users</h1>
      <h3>
        Click on a user to view their account, or select a user to log in as
      </h3>
      <UsersList usersInfo={usersInfo} isLoading={isLoading} />
    </>
  );
}
export default UsersPage;
