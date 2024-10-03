import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="enter your fullname"
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*******"
      />
      <InputForm
        label="Confirm Password"
        name="Confirm Password"
        type="Password"
        placeholder="*******"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
