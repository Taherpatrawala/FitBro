import axios from "axios";
import { createContext, useState, useEffect } from "react";

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
  const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["authorization"] = `${token}`;
  }

  const fetchUser = async () => {
    const { data: response } = await axios.get("http://localhost:8080/auth/me");

    if (response.data && response.data.user) {
      setUser({
        data: {
          id: response.data.user.id,
          email: response.data.user.email,
        },
        loading: false,
        error: null,
      });
    } else if (response.data && response.data.errors.length) {
      setUser({
        data: null,
        loading: false,
        error: response.data.errors[0].msg,
      });
    }

    console.log("Context " + response);
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setUser({
        data: null,
        loading: false,
        error: null,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
