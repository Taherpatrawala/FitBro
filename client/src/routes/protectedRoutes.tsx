import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../components/context/context";

const ProtectedRoutes = () => {
  const [logState] = useContext(UserContext);

  if (logState.loading) return <div>Loading...</div>;

  return logState.data ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
