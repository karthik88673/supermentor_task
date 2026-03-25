import { useState } from "react";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {

    setError("");
    setSuccess("");

    const res = await fetch(
      "http://localhost:5000/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (data.message === "Signup Successful") {
      setSuccess(data.message);
    } else {
      setError(data.message);
    }
  };

  return (
    <div>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleSignup}>
        Signup
      </button>

      {error && (
        <p style={{color:"red"}}>
          {error}
        </p>
      )}

      {success && (
        <p style={{color:"green"}}>
          {success}
        </p>
      )}

    </div>
  );
}

export default Signup;