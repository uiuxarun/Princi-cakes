import React, { useState } from "react";
import "./SignUp.css";
import Button from "../../Button/Button";
import images from "../../constants/images";
import Typewriter from "typewriter-effect";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider , signInAnonymously } from "firebase/auth";
import { app } from '../../firebase';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link , useNavigate} from "react-router-dom";
import { FaLongArrowAltRight } from 'react-icons/fa';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const mapFirebaseErrorCodeToMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "Email is already in use. Please use a different email.";
      case "auth/invalid-email":
        return "Invalid email. Please enter a valid email address.";
      case "auth/wrong-password":
        return "Invalid password. Please enter the correct password.";
      // Add more error code cases and messages as needed
      default:
        return "An error occurred. Please try again later.";
    }
  }

  const signupUser = () => {
    if (!email || !password) {
      toast.error("Please fill in all the fields", {
        autoClose: 2000,
      });
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        toast.error(mapFirebaseErrorCodeToMessage(error.code));
      });
  };

  const signinAnonymously = ()=>{
    signInAnonymously(auth)
     .then(() => {
      navigate("/");
     })
     .catch((error) => {
       // ...
     });
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputFocus = (setter) => {
    setter(true);
  };

  const handleInputBlur = (setter) => {
    setter(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div className="Login_head">
      <div className="left_head">
        <img src={images.logo} alt="/" />
        <Typewriter
          options={{
            strings: ["Hello", "नमस्ते", "اسلم اور تم"],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
        <h5>
          Taste the freshest delights, and enjoy beautiful and delicious treats
          made with care and love.
        </h5>
        <div className="guest" onClick={signinAnonymously}>
          <span>Continue as Guest <FaLongArrowAltRight size={18}/></span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <span className="heading_log">Create an Account<span className="underline"></span></span>
        <label className="label1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => handleInputFocus(setEmailFocused)}
            onBlur={() => handleInputBlur(setEmailFocused)}
            placeholder="Enter email or phone number"
            className={isEmailFocused ? "input-focus" : ""}
            style={{
              backgroundImage: `url(${images.profile})`,
              backgroundPosition: "10px center",
              backgroundRepeat: "no-repeat",
              paddingLeft: "4rem",
            }}
          />
        </label>
        <br />
        <label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => handleInputFocus(setPasswordFocused)}
              onBlur={() => handleInputBlur(setPasswordFocused)}
              placeholder="Enter password"
              className={isPasswordFocused ? "input-focus" : ""}
              style={{
                backgroundImage: `url(${images.lock})`,
                backgroundPosition: "10px center",
                backgroundRepeat: "no-repeat",
                paddingLeft: "4rem",
              }}
            />
            <div className="password-toggle" onClick={handleTogglePassword}>
              <img
                src={showPassword ? images.eyeHide : images.eye}
                alt={showPassword ? "Hide password" : "Show password"}
              />
            </div>
          </div>
        </label>
        <div className="forget_button">
            <Button type="submit" text="Sign In" onClick={signupUser} className="dark btn1" />
        </div>
        <div className="signUp">
          <div className="newUser">
            <p style={{color:'grey'}}>
              Already have an account? &nbsp;<Link to="/">Login</Link>
            </p>
          </div>
          <span>or</span>
          <div className="signUp_Icons">
            <div className="icon" onClick={signInWithGoogle}>
              <img src={images.googleIcon} alt="google" />
              <span>Login with Google</span>
            </div>
          </div>
        </div>
      </form>
      <div className="guest guest_sm" onClick={signinAnonymously}>
          <span>Continue as Guest <FaLongArrowAltRight size={18}/></span>
        </div>
      <ToastContainer style={{fontSize:"1.6rem"}}/>
    </div>
  );
};

export default SignUp;
