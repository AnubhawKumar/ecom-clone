import React, { useState } from "react";
import statesInIndia from "../utils/stateContainer";
import "./Login.css";

const LoginForm = ({changeUserData}) => {
  let [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
    newPass: "",
    state: "Bihar",
  });

  let [err, setErr] = useState(false);
  let [errText, setErrText] = useState("");

  const handleInputChange = (e) => {
    setErrText("");
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.name || !value.email || !value.pass || !value.newPass) {
      setErr(true);
      setErrText("Please enter all the fields");
      return;
    } else if (value.name.length < 2) {
      setErr(true);
      setErrText("Name is too short");
      return;
    } else if (!value.email.includes("@")) {
      setErr(true);
      setErrText("Email must contain @");
      return;
    } else if (!value.email.includes(".")) {
      setErr(true);
      setErrText("Email must contain .");
      return;
    } else if (value.pass.length < 4) {
      setErr(true);
      setErrText("Password must contain at least 4 letters");
      return;
    } else if (value.pass !== value.newPass) {
      setErr(true);
      setErrText("Password do not match");
      return;
    }
    setErr(false);
    // Setting the data to local Storage to save our current status 
    localStorage.setItem('user',JSON.stringify(value));
    changeUserData(value);
  };

  return (
    <form>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Name</span>
        </label>
        <input
          className="input"
          type="text"
          name="name"
          onChange={handleInputChange}
          value={value.name}
          required
        />
      </div>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Email</span>
        </label>
        <input
          className="input"
          type="email"
          name="email"
          onChange={handleInputChange}
          value={value.email}
          required
        />
      </div>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Password</span>
        </label>
        <input
          className="input"
          type="password"
          name="pass"
          onChange={handleInputChange}
          value={value.pass}
          required
        />
      </div>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Re Enter Your Password</span>
        </label>
        <input
          className="input"
          type="password"
          name="newPass"
          onChange={handleInputChange}
          value={value.newPass}
          required
        />
      </div>
      <div className="input_group">
        <label className="input_label">
          <span className="label_text">State</span>
        </label>
        <select value={value.state} name="state" onChange={handleInputChange}>
          {statesInIndia.map((state, index) => (
            <option key={index} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
      </div>
      {err ? <div className="err">{errText}</div> : null}
      <button
        type="submit"
        value="Submit"
        className="button button_wide"
        onClick={handleSubmit}
      >
        Create Your Account
      </button>
    </form>
  );
};

export default LoginForm;
