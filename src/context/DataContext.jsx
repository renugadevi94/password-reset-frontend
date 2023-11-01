import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

import api from "../api";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [cPassword, setcPassword] = useState("");
  let [resetToken, setResetToken] = useState("");
  const navigate = useNavigate();
 
  //   iam not handle the login page code because this task is reset task 
  
  const handleSignIn = (e) => {
    e.preventDefault();
    
  };

  //signup
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      username,
      password,
    };
    let DBdata = await api.get("/users");
    DBdata = DBdata.data;
    DBdata = DBdata.find((item) => item.email === userData.email);
    if (!DBdata) {
      if (password === cPassword) {
        try {
          await api.post("/users/signup", userData);
        } catch (error) {
          console.error(error);
        }
        setEmail("");
        setUsername("");
        setPassword("");
        setcPassword("");
        navigate("/created");
      } else {
        alert("password mismatch");
      }
    } else {
      alert("email already Exist");
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    const forgotEmail = email.trim();
    let DBdata = await api.get("/users");
    DBdata = DBdata.data;
    DBdata = DBdata.find((item) => item.email.toString() === forgotEmail);
    if (DBdata) {
      api.put("/users/forgot", { email: forgotEmail });
      setEmail("");
      navigate("/mail");
    } else {
      alert("Email Id not registered");
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    console.log("Reset Token in handleReset:", resetToken);
    if (password === cPassword) {
      api.patch(`/users/reset/${resetToken}`, { password: password });
      setPassword("");
      setcPassword("");
      navigate("/password");
    } else {
      alert("password not matching");
    }
    console.log(resetToken);
  };
return(
    <DataContext.Provider
    value={{
        email, 
        setEmail,
        username,
         setUsername,
        password, 
        setPassword,
        cPassword, 
        setcPassword,
        resetToken, 
        setResetToken,
        handleSignIn,
        handleSignUp,
        handleForgot,
        handleReset
    }}
    >
        {children}
    </DataContext.Provider>
)
};
export default DataContext;