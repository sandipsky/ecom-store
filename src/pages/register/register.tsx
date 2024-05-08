import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/authcontext";

export default function Register() {
  const { isLoggedIn, registerUser } = useAuth();

  if (isLoggedIn()) {
    return <Navigate to="/" />;
  }
  return (
    <div>Register</div>
  )
}
