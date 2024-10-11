import CardProduct from "../components/Fragments/CardProduct";
import { useState, useEffect, useRef, Fragment } from "react";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

// const products = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
//     name: "Robot Toy",
//     price: 1000000,
//     description: `lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
//           consectetur lorem ipsum dolor sit amet consectetur`,
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
//     name: "Robot Toy old",
//     price: 3000000,
//     description: `lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
//           consectetur lorem ipsum dolor sit amet consectetur consectetur lorem ipsum dolor sit amet consectetur`,
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
//     name: "Robot Toy story",
//     price: 2000000,
//     description: `lorem ipsum dolor sit amet consectetur `,
//   },
// ];

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  // ambil data untuk di decode

  // end ambil data

  // End handle logout

  // life cycle pneggunaan didamount dan didupdate
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // Ambil data dari API
  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  });

  // END ambil date
  // menghitung total price
  useEffect(() => {
    // memasukan ke dalam local storage
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  // useRef
  // bisa digunakan berkali kali tetapi dependencie nya sama
  // const CartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCartRef = (id) => {
  //   CartRef.current = [...CartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(CartRef.current));
  // };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="bg-yellow-500 text-white font-bold  justify-end  items-center p-2  h-15 z-10 flex">
        {" "}
        {username}
        <button
          className="bg-blue-500 ml-5 rounded-md p-1  "
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-4/6 flex flex-wrap my-2">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  handleAddToCart={handleAddToCart}
                  id={product.id}
                  price={product.price}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 relative mt-10">
          <div className="fixed">
            <h1 className="text-2xl text-blue-500 font-bold">CART</h1>
            <table className="text-left table-auto border-separate border-spacing-x-6 ">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <tr key={item.id}>
                        <td>{product.title}</td>
                        <td>
                          {" "}
                          {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td>{item.qty}</td>
                        <td>
                          {(product.price * item.qty).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                <tr ref={totalPriceRef}>
                  <td className="font-bold" colSpan={3}>
                    Total Price
                  </td>
                  <td className="font-bold">
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
