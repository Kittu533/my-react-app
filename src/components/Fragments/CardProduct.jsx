const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="mt-11 w-full max-w-sm flex flex-col">
      <a
        href="#"
        className="group relative  overflow-hidden flex flex-col h-full mx-6 "
      >
        {children}
      </a>
    </div>
  );
};
const Header = (props) => {
  const { image } = props;
  return (
    <div className="relative border border-gray-100 bg-white p-6">
      <img
        src={image}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />
    </div>
  );
};
const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="">
      <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium ">
        {" "}
        New{" "}
      </span>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>

      <p className="mt-1.5 text-sm text-gray-700">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart ,id } = props;
  return (
    <div className="mt-auto flex items-center justify-between">
      <div className="">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </div>
      <button
        onClick={() => handleAddToCart (id)}
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
