import React, { Suspense, useEffect } from "react";

import Header from "./components/Header";
import RoutesComponent from "./routes/routes";
import { useAuthContext } from "context/AuthContext";
import { getLocalStorage, setLocalStorage } from "helpers/utils";

function App() {
  const { setLogin, setUserName, handleLogout } = useAuthContext();

  useEffect(() => {
    authentication();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authentication = () => {
    const preDefinedUsers = [
      {
        username: "demo@example.com",
        password: "password123",
      },
      {
        username: "test@user.com",
        password: "testpass",
      },
    ];

    const localUsers = getLocalStorage("users");
    if (!localUsers) {
      setLocalStorage("users", JSON.stringify(preDefinedUsers));
    }

    if (getLocalStorage("login") && getLocalStorage("username")) {
      const username = getLocalStorage("username")!;

      setLogin(true);
      setUserName(username);
    } else {
      handleLogout();
    }
  };

  return (
    <div className="">
      <Header />

      <Suspense fallback={""}>
        <RoutesComponent />
      </Suspense>
    </div>
  );
}

export default App;
