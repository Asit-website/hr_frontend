import React, { useState } from "react";
import photo from "../images/loginScreen.png";
import kushel from "../images/kushel.png";
import path from "../images/path.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useMain } from "../../hooks/useMain";


const Auth = (props) => {
  const { login, setUser } = useMain();
  
  const navigate = useNavigate();
  
  var [value, setValue] = useState({
    email: "",
    password: "",
    employeeCode: ""
  });

  const [tab, setTab] = useState(0);

  const adminLogin = (e) => {
    e.preventDefault();
    setTab(1);
  }

  const userLogin = (e) => {
    e.preventDefault();
    setTab(2);
  }

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let ans = await login(value);

    if (ans.success) {
      setUser(ans.user);
       console.log("afsdfdfsdfs" , ans);
      localStorage.setItem("hrms_user", JSON.stringify(ans?.user));
      localStorage.setItem(
        "hrms_token",
        JSON.stringify({
          token: ans.token,
          role: ans.role
          // rememberMe: document.getElementById('remember').checked,
          // expiry: new Date().getTime() + 24 * 60 * 60 * 1000
        })
      );

      props.setAlert("success", ans.message);

      if (ans.user.role === "HR") {
        navigate("/hrDash/profile");
      } else if (ans.user.role === "EMPLOYEE") {
        navigate("/employeeDash/update");
      } else {
        navigate("/adminDash");
      }

    } else {
      props.setAlert("error", ans.message);
    }
  };



  return (
    <div className="auth">

      <div className="login-page">
        
        <div className="login-page2">


         <div className="login_new_div">


          <img className="kushel-logo2" src={kushel} alt="" />


                         <div className="singWrap">
          <h2 className="singin">Sign in </h2>
          <p>to access HRMS Dashboard</p>
                         </div>
          
          <div className="login-buttons flex">
            <button onClick={adminLogin} className="mr-3">Admin Login</button>
            <button onClick={userLogin} className="ml-3">User Login</button>
          </div>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col mt-4 ">
                <label className="custom-field one">
                  <input
                    required
                    name={tab === 1 ? "email" : "employeeCode"}
                    onChange={handleChange}
                    value={tab === 1 ? value.email : value.employeeCode}
                    type={tab === 1 ? "email" : "text"}
                    placeholder=" "
                  />
                  <span className="placeholder">{tab === 1 ? "Email" : "Employee Code"}</span>
                </label>
                <label className="custom-field one">
                  <input
                    required
                    name="password"
                    onChange={handleChange}
                    value={value.password}
                    type="password"
                    placeholder=" "
                  />
                  <span className="placeholder">Password</span>
                </label>
                <NavLink to="/forget">
                  <p className=" text-right  forget">Forgot password?</p>
                </NavLink>
              </div>

              <button>Log in</button>

             
            </form>
          </div>

          </div>
          
        </div>
        
        <div className="login-page3">
          
        </div>
        

        <div className="login-page1">
          <img src={photo} alt="photo" />
        </div>

      </div>
    </div>
  );
};

export default Auth;