import { useState } from "react";
import { useNavigate } from "react-router";
import { ImVideoCamera } from "react-icons/im";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  async function signup() {
    try {
      if (
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        alert("Fields cannot be empty");
        return;
      }
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_PROD_URL}/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigation("/login");
      } else {
        setErrors(data.errors);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div className="SignUp">
      <div className="page-container">
        <div className="form-section">
          <div className="logo">
            <ImVideoCamera />
            <div>Afro-Cinema</div>
          </div>
          <p>Sign up for an account.</p>
          <div className="dont-have">
            <div>Already an account?</div>
            <div className="button" onClick={() => navigation("/login")}>
              Login
            </div>
          </div>
          <div className="form-div">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="username"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            <label htmlFor="email">Email</label>
            <br />

            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label htmlFor="password">Password:</label>
            <br />

            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <br />

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />

            <button
              className="submit"
              onClick={loading ? console.log() : signup}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
