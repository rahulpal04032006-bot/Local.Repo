import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Show() {
    if (name === "" || email === "" || password === "") {
      alert("Please fill details");
    } else {
      alert("Register successful");
    }
  }

  return (
    <>
      <h1>Registration Form</h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={Show}>Submit</button>

      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{password}</h2>
    </>
  );
}

export default RegistrationForm;