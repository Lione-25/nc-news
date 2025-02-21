import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAccount } from "../../contexts/UserAccount";

function UsersList({ usersInfo, isLoading }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);
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
