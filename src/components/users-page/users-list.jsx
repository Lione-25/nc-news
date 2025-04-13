import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAccount } from "../../contexts/user-account";
import LoadingOverlay from "../loading-overlay";

function UsersList({ usersInfo, isLoading, isError }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);

  const location = useLocation();
  const redirect_to = new URLSearchParams(location.search).get("redirect_to");

  const navigate = useNavigate();

  return (
    <>
      <div className="users-list">
        {isLoading && <LoadingOverlay />}
        {isError && (
          <h2 className="error-msg">
            Unable to load users. Please try again later.
          </h2>
        )}
        {usersInfo.map((user) => {
          return (
            <div key={user.username} className="user bold-btn">
              <Link to={`/user/${user.username}`}>
                <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
                <div className="username-container">
                  <h2>{user.username}</h2>
                </div>
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
