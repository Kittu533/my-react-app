import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
    name: "Robot Toy",
    price: "Rp. 1.000.000",
    description: `lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
          consectetur lorem ipsum dolor sit amet consectetur`,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
    name: "Robot Toy old",
    price: "Rp. 3.000.000",
    description: `lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet
          consectetur lorem ipsum dolor sit amet consectetur consectetur lorem ipsum dolor sit amet consectetur`,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
    name: "Robot Toy story",
    price: "Rp. 2.000.000",
    description: `lorem ipsum dolor sit amet consectetur `,
  },
  
];

const ProductPage = () => {
  return (
    <div className="flex justify-center">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
    
  );
};

export default ProductPage;
