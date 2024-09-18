import React, { useState } from "react";
import Input from "./Input";

const PropsPractice = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    cpassword: "",
    username: "",
  });

  const handleEvent = (e) => {
    const { name, value } = e.target; // Extract input name and value
    setInputValues({
      ...inputValues,
      [name]: value, // Dynamically update the corresponding input field
    });
  };

  return (
    <div>
      <h2>
        Email:
        <Input
          name="email" // Assign unique name to each input
          value={inputValues.email}
          onChange={handleEvent}
          placeholder={"Email"}
        />
      </h2>
      <h2>
        Password:
        <Input
          name="password" // Assign unique name to each input
          value={inputValues.password}
          onChange={handleEvent}
          placeholder={"Password"}
        />
      </h2>
      <h2>
        Cpassword:
        <Input
          name="cpassword"
          value={inputValues.cpassword}
          onChange={handleEvent}
          placeholder={"CPassword"}
        />
      </h2>
      <h2>
        Username:
        <Input
          name={"username"}
          value={inputValues.username}
          onChange={handleEvent}
          placeholder={"username"}
        />
      </h2>
      {console.log(inputValues, "<<<---- input val")}
    </div>
  );
};

export default PropsPractice;
