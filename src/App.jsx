import React from "react";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

function App() {
  return (
    <div className="flex gap-16 justify-center min-h-screen items-center">
      <LoginPage></LoginPage>
      <RegisterPage/>
    </div>
  );
}

export default App;
