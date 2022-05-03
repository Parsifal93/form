import LoginForm from "./components/LoginForm/view";
import RegForm from "./components/RegForm/view";
import { Routes, Route, Link } from "react-router-dom";

const Form = () => {
  return (
    <>
      <Link to="login">Sign In</Link>
      <Link to="signup">Sign Up</Link>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<RegForm />} />
      </Routes>
    </>
  );
};

export default Form;
