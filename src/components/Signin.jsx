import { useContext } from "react";

import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

function Signin(){
    const{handleSignIn}=useContext(DataContext);
  return (
    <form
      onSubmit={handleSignIn}
      className="signIn container d-flex flex-column gap-3 p-2"
    >
      <h2 className="display-6 text-secondary text-center">Sign In</h2>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="userName">Email</label>
        <input
          type="email"
          className="form-control"
          id="userName"
          placeholder="User Name"
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex justify-content-between gap-1 px-1">
        <Link
          className="btn-outline-danger"
          to="forgot"
          style={{ color: 'red' }}
        >
          Forgot Password
        </Link>
        <Link
          className="btn-outline-primary"
          to="signup"
          style={{ color: 'red' }}
        >
          Sign Up
        </Link>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Signin;