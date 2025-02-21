import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAccount } from "../../contexts/user-account";

function UsersList({ usersInfo, isLoading }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);

  const location = useLocation();
  const redirect_to = new URLSearchParams(location.search).get("redirect_to");

  const navigate = useNavigate();

  return (
    <>
      <div className="articles-list">
        {isLoading && <h2>...Loading Users</h2>}
        {usersInfo.map((user) => {
          return (
            <div key={user.username} className="article-item">
              <Link
                to={`/user/${user.username}`}
                className="article-item-img-title"
              >
                <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
                <h2>{user.username}</h2>
              </Link>
              {loggedInUser === user.username ? (
                <button
                  onClick={() => {
                    setLoggedInUser("");
                  }}
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    setLoggedInUser(user.username);
                    navigate(redirect_to);
                  }}
                >
                  Log in as {user.username}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default UsersList;
