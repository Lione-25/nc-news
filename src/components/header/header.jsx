import { useContext } from "react";
import NavBar from "./nav-bar";
import { UserAccount } from "../../contexts/user-account";
import logo from "../../../public/favicon.png";
import { Link } from "react-router-dom";
import ThemeToggle from "./theme-toggle";

function Header() {
  const { loggedInUser } = useContext(UserAccount);
  return (
    <>
      <div className="title">
        <img src={logo} alt="Northcoders News logo" />
        <p>Northcoders News</p>
      </div>

      <NavBar />
      <Link className="login-link" to="/users">
        {loggedInUser ? `Logged in as ${loggedInUser}` : "Log In"}
      </Link>
      <ThemeToggle />
    </>
  );
}
export default Header;
