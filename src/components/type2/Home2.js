import React from "react";

import Login2 from "./Login2";
import { CookiesProvider, useCookies } from "react-cookie";

function Home2() {
  const [cookies, setCookie] = useCookies(["user"]);

  function handleLogin(user) {
    setCookie("user", user, { path: "/home2" });
  }

  return (
    <CookiesProvider>
      <div>
        {cookies.user ? (
          <h1>Home page </h1>
        ) : (
          <Login2 onLogin={handleLogin} />
        )}
      </div>
    </CookiesProvider>
  );
}

export default Home2;