import { BiCartAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const trimTitle = (title) => {
    if (title.length > 60) {
      return title.slice(0, 50) + "...";
    } else {
      return title;
    }
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="rounded-lg overflow-hidden w-80 h-full grid place-items-center border hover:shadow-xl transition-all">
        <img
          draggable="false"
          src={product.image}
          alt={product.title}
          className=" mt-4 mix-blend-multiply grid place-items-center h-64 w-64 object-contain"
        />
        <div className="p-4 w-full">
          <p className="font-semibold text-gray-600 text-xs uppercase">
            {product.category}
          </p>
          <p
            title={product.title}
            className="text-gray-900 leading-5 h-10 w-full"
          >
            {trimTitle(product.title)}
          </p>
          <p className="font-semibold text-gray-600 text-lg">
            ${product.price}
          </p>
        </div>
        <div className=" w-full">
          <button
            className="bg-blue-700 text-white w-full py-2 hover:bg-blue-900 transition-all flex justify-center gap-4 items-center"
            onClick={() => handleAddToCart(product)}
          >
            {" "}
            <BiCartAdd className=" text-xl" />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
