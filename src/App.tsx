import React, { useEffect } from "react";

import Header from "./components/Header";
import RoutesComponent from "./routes/routes";
import { getLocalStorage } from "helpers/utils";
import { useAuthContext } from "context/AuthContext";

function App() {
  const { setLogin, setUserName } = useAuthContext();

  useEffect(() => {
    authentication();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authentication = () => {
    if (getLocalStorage("login") && getLocalStorage("username")) {
      const username = getLocalStorage("username")!;

      setLogin(true);
      setUserName(username);
    } else {
      setLogin(false);
      setUserName("");
    }
  };

  return (
    <div className="">
      <Header />

      <RoutesComponent />
    </div>
  );
}

export default App;
