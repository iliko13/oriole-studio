import { storeItems } from "../Pages/Store";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../hooks/formatCurrency";

type Props = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: Props) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className=" mx-2 grid place-items-end items-center justify-between gap-2 border-2 border-double border-orange-700 sm:flex	">
      <div className="flex  items-center justify-center">
        <img src={item.image} className="ms:mx-4 m-2 aspect-square h-[140px]" />
        <div className="row-auto grid gap-4 sm:gap-6">
          <div className="text-lg font-semibold">
            {item.name}
            {quantity > 1 && (
              <span className="text-sm text-stone-500">x{quantity}</span>
            )}
          </div>
          <div>{formatCurrency(item.price)}</div>
        </div>
      </div>

      <div className="mb-2 mr-10 flex items-center">
        <div>{formatCurrency(item.price * quantity)}</div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-2 rounded-sm bg-stone-100 px-3 py-1 outline outline-2 outline-red-500 hover:bg-red-500 hover:text-white"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
