import { Fragment, useState } from "react";
import Login from "./components/login/Login";
import logo from './images/myntra-logo.png'
import Offer from "./components/Offer/Offer";
import Cart from "./components/Cart/Cart";
import List from "./components/List/List";
import "./App.css";

function App() {
  //  Here I am setting the userData Like if the data is present in my local Storage then
  // have that value from local storage and put it in userData else assign null to userData
  const [userData, setUserData] = useState(
    localStorage.getItem("user") || null
  );

  // The login details is a global data that is why through
  // callback function I am getting those data in my main component

  const changeUserData = (data) => {
    setUserData(data);
    console.log(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserData(null)
  }

  const[theme,setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme==="light"?"dark":"light")
  }
  

  return (
    <div className={`App ${theme}`}>
      {userData ? (
        <Fragment>
          <header>
            <img src ={logo} alt="img-myntra-logo"/>
            <div className="right-header">
              <Offer />
              <Cart />
              <label className="switch">
                <input type="checkbox" onChange={toggleTheme}/>
                <span className="slider round"></span>
              </label>
              <button href="" className="logout-linkButton" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </header>
          <div className="body-container">
              <List />
          </div>
        </Fragment>
      ) : (
        <Login changeUserData={changeUserData} />
      )}
    </div>
  );
}

export default App;
