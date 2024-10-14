import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="mt-11 w-full max-w-sm flex flex-col">
      <div className="group relative  overflow-hidden flex flex-col h-full mx-6 ">
        {children}
      </div>
    </div>
  );
};
const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <div className="relative border border-gray-100 bg-white p-6">
        <img
          src={image}
          alt=""
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
      </div>
    </Link>
  );
};
const Body = (props) => {
  const { children, name } = props;
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div className="">
      <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium ">
        {" "}
        New{" "}
      </span>
      <h3
        className={`mt-4 text-lg font-medium text-gray-900 && ${
          isDarkMode && "text-white"
        }`}
      >
        {name.substring(0, 20)}...
      </h3>

      <p
        className={`mt-4 text-lg font-medium text-gray-900 && ${
          isDarkMode && "text-white"
        }`}
      >
        {children.substring(0, 100)}...
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  const { isDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`mt-auto flex items-center justify-between ${
        isDarkMode && "text-white"
      }`}
    >
      <div className="">
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </div>
      <button
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
        className="rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
