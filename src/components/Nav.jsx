import { useState } from "react";
import { ImVideoCamera } from "react-icons/im";
import { useNavigate } from "react-router";

function Nav() {
  const navigation = useNavigate();
  const token = localStorage.getItem("token");
  function logout() {
    localStorage.clear("token");
    navigation(0);
  }
  return (
    <div className="Nav">
      <div className="section-one">
        <div id="menu-id" className="menu-stuff"></div>

        <div className="logo">
          <ImVideoCamera />
          <div>Afro-Cinema</div>
        </div>

        <div className="nav-options">
          {token !== null ? (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <button
                className="login-btn"
                onClick={() => navigation("/login")}
              >
                Login
              </button>
              <button
                className="signup-btn"
                onClick={() => navigation("/signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
      <div className="section-two"></div>
    </div>
  );
}

export default Nav;
