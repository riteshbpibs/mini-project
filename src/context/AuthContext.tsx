import { deleteLocalStorage } from "helpers/utils";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface AuthContextType {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  login: false,
  setLogin: () => {},
  userName: "",
  setUserName: () => {},
  handleLogout: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogout = useCallback(() => {
    deleteLocalStorage("username");
    deleteLocalStorage("login");

    setLogin(false);
    setUserName("");
    window.history.replaceState({}, "", "/");
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, setLogin, userName, setUserName, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
