import { XMarkIcon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../hooks/formatCurrency";
import { storeItems } from "../Pages/Store";

const ShoppingCart = () => {
  const { isOpen, setIsOpen, cartItems } = useShoppingCart();

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 right-0 z-50 h-full w-[300px] bg-stone-100 drop-shadow-xl sm:w-[600px]">
          <div className="flex justify-end p-9">
            <button onClick={() => setIsOpen(!isOpen)}>
              <XMarkIcon className="h-8 w-8 text-black" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="flex justify-end py-8 pr-10 text-xl">
              Total:
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0),
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
