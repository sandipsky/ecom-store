import { useAuth } from "../../auth/authcontext";

export default function Home() {
  const { logout, user } = useAuth();

  return (
    <>
      <div className="text-3xl font-bold underline">home {user?.username}</div>
      <button onClick={() => logout()}>Logout</button>
    </>

  )
}
