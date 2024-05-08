import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/authcontext";

export default function Login() {
  const { isLoggedIn, loginUser } = useAuth();

  if (isLoggedIn()) {
    return <Navigate to="/" />;
  }

  function handleLogin() {
    const user = {
      username: "sandip",
      password: "asd"
    }
    loginUser(user);
  }

  return (
    <div>
      <h1>Login</h1> 
      <button onClick={() => handleLogin()}>Login Now</button>
    </div>

  )
}
