import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const { isDarkMode, setDarkMode } = useContext(DarkMode);
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-yellow-500 text-white font-bold  justify-end  items-center p-2  h-15 z-10 flex">
      {" "}
      {username}
      <Button
        className="bg-blue-500 ml-5 rounded-md p-1  "
        onClick={handleLogout}
      >
        Logout
      </Button>
      <div className="flex items-center bg-white mr-4 text-yellow-500 p-2 rounded-md ml-5">
        item : {totalCart} | Price : $ {total}
      </div>
      <Button
        className=" right-2 top-2 m bg-blue-700 p-2 text-white rounded-md"
        onClick={() => setDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
