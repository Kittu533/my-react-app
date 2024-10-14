import CardProduct from "../components/Fragments/CardProduct";
import { useState, useEffect, Fragment, useContext } from "react";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/tableCard";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

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
  const { isDarkMode} = useContext(DarkMode);
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useLogin();
  // Handle logout

  // ambil data untuk di decode

  // end ambil data

  // End handle logout

  // life cycle pneggunaan didamount dan didupdate
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  // Ambil data dari API
  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  });

  // END ambil date
  // menghitung total price

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };
  // useRef
  // bisa digunakan berkali kali tetapi dependencie nya sama
  // const CartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCartRef = (id) => {
  //   CartRef.current = [...CartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(CartRef.current));
  // };

  return (
    <Fragment>
      <Navbar />
      <div className={`flex justify-center ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-4/6 flex flex-wrap my-2">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer id={product.id} price={product.price} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 relative mt-10">
          <div className="fixed">
            <h1 className="text-2xl text-blue-500 font-bold">CART</h1>
            <TableCart products={products} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
