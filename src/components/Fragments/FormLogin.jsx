import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = () => {
    // localStorage.setItem("username", event.target.username.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";

    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };
  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="John Doe"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*******"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-500 ">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
