import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/authcontext";

export default function Register() {
  const { isLoggedIn, registerUser } = useAuth();

  if (isLoggedIn()) {
    return <Navigate to="/" />;
  }

  function handleRegister() {
    const user = {
      username: "sandip",
      password: "asd"
    }
    registerUser(user);
  }

  return (
    <>
      <div>Register</div>
      <button onClick={() => handleRegister()}>Login Now</button>
    </>

  )
}
