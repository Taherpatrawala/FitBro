import axios from "axios";
import { createContext, useState } from "react";

interface User {
  data: {
    id: number;
    email: string;
  } | null;
  error: string | null;
  loading: boolean;
}

const UserContext = createContext<
  [User, React.Dispatch<React.SetStateAction<User>>]
>([
  {
    data: null,
    error: null,
    loading: true,
  },
  () => {},
]);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    data: null,
    loading: true,
    error: null,
  });
};

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["authorization"] = `${token}`;
}
