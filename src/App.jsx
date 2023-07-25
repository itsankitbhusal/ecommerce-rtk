import { useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

const App = () => {
  const { productItems: products } = useSelector((state) => state.products);

  return (
    <>
      <div>
        <div className=" clear-left text-2xl my-4 flex justify-between mx-8">
          <h1>Products</h1>
          <Cart />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
