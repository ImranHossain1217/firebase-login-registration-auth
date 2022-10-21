import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-2xl" to="/">
          Unique
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        {user?.email ? (
          <button onClick={handleSignOut} className="btn btn-sm">
            Log Out
          </button>
        ) : (
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            Log In
          </Link>
        )}
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
      </div>
      {user?.email && <p>Wellcome, {user.email}</p>}
    </div>
  );
};

export default Header;
