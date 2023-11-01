import image1 from "../assets/image-1.jpeg";
import image2 from "../assets/image-2.jpeg";
import image3 from "../assets/image-3.jpeg";
import image4 from "../assets/image-4.jpeg";
import image5 from "../assets/image-5.jpeg";
import image6 from "../assets/image-6.jpeg";
import image7 from "../assets/image-7.jpeg";
import image8 from "../assets/image-8.jpeg";
import image9 from "../assets/image-9.jpeg";
import image10 from "../assets/image-10.jpeg";
import image11 from "../assets/image-11.jpeg";
import image12 from "../assets/image-12.jpeg";
import image13 from "../assets/image-13.jpeg";
import image14 from "../assets/image-14.jpeg";
import image15 from "../assets/image-15.jpeg";
import image16 from "../assets/image-16.jpeg";
import image17 from "../assets/image-17.jpeg";
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
    name: "Elithabeth",
    price: 150,
    image: image4,
  },
  {
    id: 5,
    name: "Davit",
    price: 140,
    image: image5,
  },
  {
    id: 6,
    name: "Tamari",
    price: 150,
    image: image6,
  },
  {
    id: 7,
    name: "Tamari",
    price: 150,
    image: image7,
  },
  {
    id: 8,
    name: "Elothabeth",
    price: 140,
    image: image8,
  },
  {
    id: 9,
    name: "Elithabeth",
    price: 200,
    image: image9,
  },
  {
    id: 10,
    name: "Davit",
    price: 170,
    image: image10,
  },
  {
    id: 11,
    name: "Tamari",
    price: 190,
    image: image11,
  },
  {
    id: 12,
    name: "Davit",
    price: 130,
    image: image12,
  },
  {
    id: 13,
    name: "Tamari",
    price: 350,
    image: image13,
  },
  {
    id: 14,
    name: "Giorgi",
    price: 2000,
    image: image14,
  },
  {
    id: 15,
    name: "Tamari",
    price: 250,
    image: image15,
  },
  {
    id: 16,
    name: "Giorgi",
    price: 170,
    image: image16,
  },
  {
    id: 17,
    name: "Tamari",
    price: 100,
    image: image17,
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
