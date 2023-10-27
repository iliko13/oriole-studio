import image1 from "../assets/image-1.jpeg";
import image2 from "../assets/image-2.jpeg";
import image3 from "../assets/image-3.jpeg";
import image4 from "../assets/image-4.jpeg";
import StoreItem from "../components/StoreItem";

type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const storeItems: Item[] = [
  {
    id: 1,
    name: "Jug",
    price: 150,
    image: image1,
  },
  {
    id: 2,
    name: "Mug",
    price: 200,
    image: image2,
  },
  {
    id: 3,
    name: "Tamari",
    price: 250,
    image: image3,
  },
  {
    id: 4,
    name: "Tamari",
    price: 150,
    image: image4,
  },
];

const Store = () => {
  return (
    <div className="grid place-items-center overflow-y-auto overflow-x-hidden pt-10 md:pt-20">
      <ul className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {storeItems.map((item: Item) => (
          <li key={item.id}>
            <StoreItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
