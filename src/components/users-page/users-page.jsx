import { useState, useEffect } from "react";
import UsersList from "./users-list";
import { fetchUsers } from "../../api";

function UsersPage() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then(([usersInfo]) => {
        setIsLoading(false);
        setUsersInfo(usersInfo);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="users-pg">
      <h1 id="users">Users</h1>
      <h3>
        Click on a user to view their account, or select a user to log in as
      </h3>
      <UsersList
        usersInfo={usersInfo}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}
export default UsersPage;
