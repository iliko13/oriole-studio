import { useContext } from "react";
import { PostContext } from "../App";
import { motion } from "framer-motion";
import image21 from "../assets/image-21.jpeg";
import image20 from "../assets/image-20.jpeg";
import image5 from "../assets/image-5.jpeg";
import image22 from "../assets/image-22.jpeg";
import image23 from "../assets/image-23.jpeg";
import pepsi from "../assets/pepsi.png";
import paypal from "../assets/paypal.png";
import masterCard from "../assets/mastercard.png";

const Home = () => {
  const { isAboveMediumScreen } = useContext(PostContext) || {
    isAboveMediumScreen: false,
  };

  return (
    <section className="theName gap-16  overflow-y-auto overflow-x-hidden py-10 md:h-full md:pb-0">
      <div className="mx-auto mb-10 w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-16 md:mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <h3 className="text-2xl text-orange-900 md:text-5xl">
                Orkol-Studio
              </h3>
              {isAboveMediumScreen && (
                <div className="absolute -left-16 -top-10 -z-10 animate-pulse text-7xl text-stone-200">
                  Orkol-Studio
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -90 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mt-8 text-sm font-semibold">
              Crafting Clay into Art: Where Every Piece Tells a Story
            </p>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          className="mt-10 flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 120 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img alt="main-photo" src={image21} className="rounded-md" />
        </motion.div>
      </div>

      {/* sponsors */}
      {isAboveMediumScreen && (
        <div className="h-[180px] w-full bg-orange-100 py-10">
          <div className="mx-auto  w-5/6">
            <motion.div
              className="  flex items-center justify-between gap-8"
              initial={{ y: 250 }}
              transition={{ delay: 0.3, duration: 1 }}
              animate={{ y: -10 }}
            >
              <img alt="sponsor-photo" src={paypal} className="w-[200px]" />
              <img alt="sponsor-photo" src={pepsi} className="w-[200px]" />
              <img alt="sponsor-photo" src={masterCard} className="w-[200px]" />
            </motion.div>
          </div>
        </div>
      )}

      {/* review */}
      <div className="reviewSection mt-20 space-y-20 md:mx-40">
        <div className="m-6 grid  grid-rows-2 space-y-6 md:flex md:items-center md:justify-center md:space-y-0">
          <motion.div
            className="h-[250px] w-[250px] md:h-[300px] md:w-[600px] md:pr-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              alt="review-photo"
              src={image20}
              className=" aspect-square h-full  rounded-lg"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="md:mx-20">
              Discover the charm of handcrafted clay works at Orkol-studio. Each
              piece is lovingly crafted by skilled artisans, ensuring the
              highest quality and authenticity. Unearth timeless treasures for
              your home and gift-giving needs.
            </p>
          </motion.div>
        </div>
        <div className="m-6 grid  grid-rows-2 space-y-6 md:flex md:items-center md:justify-center md:space-y-0">
          <motion.div
            className="h-[250px] w-[250px] md:h-[300px] md:w-[700px] md:pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              alt="review-photo rounded-lg"
              src={image22}
              className="aspect-square h-full rounded-lg"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="md:mx-20">
              Explore our exquisite range of clay products that will elevate
              your kitchen and dining experience. From beautifully crafted clay
              jugs to unique clay mugs, we offer the perfect blend of aesthetics
              and functionality. Upgrade your kitchenware collection today!
            </p>
          </motion.div>
        </div>
        <div className="m-6 grid  grid-rows-2 space-y-6 md:flex md:items-center md:justify-center md:space-y-0">
          <motion.div
            className="h-[250px] w-[250px] md:h-[300px] md:w-[700px] md:pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              alt="review-photo"
              src={image23}
              className="aspect-square h-full rounded-lg"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="md:mx-20">
              Make a conscious choice for the environment without compromising
              on style. Our eco-friendly clay products are designed to enhance
              your daily life while minimizing your ecological footprint. Choose
              sustainability with a touch of elegance.
            </p>
          </motion.div>
        </div>
        <div className="m-6 grid  grid-rows-2 space-y-6 md:flex md:items-center md:justify-center md:space-y-0">
          <motion.div
            className="h-[250px] w-[250px] md:h-[300px] md:w-[700px] md:pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              alt="review-photo"
              src={image5}
              className="aspect-square h-full rounded-lg"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="md:mx-20">
              Dive into the world of clay artistry with our diverse range of
              clay products. Whether you're an experienced artist or a beginner,
              our clayworks allow you to express your creativity. Unleash your
              inner artisan and explore the possibilities of clay today.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
