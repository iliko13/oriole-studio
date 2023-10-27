import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../hooks/formatCurrency";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const StoreItem = ({ id, name, price, image }: Props) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <section className=" h-[520px] w-[350px] rounded-2xl bg-stone-100">
      <div className="flex items-center justify-center">
        <img
          alt={`${id}`}
          src={image}
          className="aspect-square  h-[350px] rounded-t-2xl object-fill"
        />
      </div>

      <div className="">
        <div className="mb-4 mt-4 flex items-baseline justify-center space-x-40">
          <div className="text-lg font-semibold">{name}</div>
          <div>{formatCurrency(price)}</div>
        </div>
        <div className="mx-auto pb-10 ">
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className=" mx-[20px]  mt-8  w-[310px] rounded-xl bg-blue-600 p-2 text-stone-100 hover:bg-blue-500"
            >
              + Add To Cart
            </button>
          ) : (
            <div className="">
              <div className=" flex items-center justify-center space-x-8 ">
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className=" rounded-lg bg-red-600 px-4 py-2 text-stone-100 hover:bg-red-500"
                >
                  -
                </button>
                <div>
                  <span>{quantity}</span>
                </div>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="rounded-lg bg-green-600 px-4 py-2 text-stone-100 hover:bg-green-500"
                >
                  +
                </button>
              </div>
              <div className=" mt-2 flex items-center justify-center">
                <button
                  onClick={() => removeFromCart(id)}
                  className="rounded-xl bg-red-600 px-6 py-2 text-stone-100 hover:bg-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoreItem;
