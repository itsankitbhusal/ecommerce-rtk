import { useSelector } from "react-redux";
import { BiCartAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { setModalOpen, removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.carts);
  const isCartOpen = useSelector((state) => state.carts.modalOpen);

  const handleCartClick = () => {
    dispatch(setModalOpen(!isCartOpen));
  };
  const handleCartRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      <div
        onClick={handleCartClick}
        className="flex gap-2 justify-center items-center bg-blue-200 px-4 py-2 rounded-sm hover:bg-blue-300 hover:cursor-pointer"
      >
        <BiCartAdd />
        {cartItems?.length}
      </div>
        {/* cart open modal */}
        {isCartOpen && (
          <div className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-1/2 h-1/2 rounded-lg overflow-y-auto">
              <div className="flex justify-between items-center px-4 py-2 border-b">
                <h1 className="text-xl font-semibold">Cart</h1>
                <button
                  onClick={handleCartClick}
                  className="text-xl font-semibold p-2 rounded-full transition-all hover:bg-blue-300"
                >
                  <MdOutlineClose />
                </button>
              </div>
              <div className="px-4 py-2">
                {cartItems?.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center my-2"
                  >
                    <div className="flex gap-2 items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain"
                      />
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => handleCartRemove(item)}
                        className="text-xl p-2 rounded-full font-semibold hover:bg-blue-300"
                      >
                        <MdOutlineClose />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Cart;
