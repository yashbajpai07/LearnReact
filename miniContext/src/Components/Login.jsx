import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [name, setName] = React.useState("");
  const [lastname, setLastName] = React.useState("");

  const {setUser}=useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({name,lastname})

  };
  return (
    <>
      <h2> LOgin Page</h2>
      <input
        type="text"
        placeholder="Firstname"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="LastName"
        id="name"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Login;
