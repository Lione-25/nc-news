import { useContext } from "react";
import NavBar from "./nav-bar";
import { UserAccount } from "../../contexts/user-account";

function Header() {
  const { loggedInUser } = useContext(UserAccount);
  return (
    <>
      <NavBar />
      <p> {loggedInUser ? `Logged in as ${loggedInUser}` : "Not logged in"}</p>
    </>
  );
}
export default Header;
