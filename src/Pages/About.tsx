import { motion } from "framer-motion";
import aboutPhoto from "../assets/about-photo.jpeg";
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
import james from "../assets/james.jpg";
import emily from "../assets/emily.jpg";
import sarah from "../assets/sarah.jpg";
import david from "../assets/david.jpg";
import { ClassType } from "../types/types";
import PhotoScroll from "../components/PhotoScroll";

const classes: Array<ClassType> = [
  {
    name: "from collection 'TAMARI'",
    description: "price: 200 Gel",
    image: image1,
  },
  {
    name: "from collection 'EKATERINE'",
    description: "price: 300 Gel",
    image: image2,
  },
  {
    name: "from collection 'EKATERINE'",
    description: "price: 250 Gel",
    image: image3,
  },
  {
    name: "IRMISTUCHA",
    description: "price: 230 Gel",
    image: image4,
  },
  {
    name: "from collection 'EKATERINE'",
    description: "price: 200 Gel",
    image: image5,
  },
  {
    name: "from collection 'EKATERINE'",
    description: "price: 200 Gel",
    image: image6,
  },
  {
    name: "from collection 'EKATERINE'",
    description: "price: 250 Gel",
    image: image7,
  },
  {
    name: "from collection 'EKATERINE'",
    description: "price: 270 Gel",
    image: image8,
  },
  {
    name: "IRMISTUCHA",
    description: "price: 210 Gel",
    image: image9,
  },
  {
    name: "jug with 6 mugs",
    description: "price: 250 Gel",
    image: image10,
  },
  {
    name: "from collection 'TAMARI'",
    description: "price: 230 Gel",
    image: image11,
  },
  {
    name: "from collection 'TAMARI'",
    description: "price: 180 Gel",
    image: image12,
  },
  {
    name: "from collection 'TAMARI'",
    description: "price: 150 Gel",
    image: image13,
  },
  {
    name: "from collection 'TAMARI'",
    description: "price: 220 Gel",
    image: image14,
  },
  {
    name: "from collection 'TAMARI'",
    description: "price: 210 Gel",
    image: image15,
  },
  {
    name: "jug with with 4 mugs",
    description: "price: 250 Gel",
    image: image16,
  },
  {
    name: "from collection 'TAMARI'",
    description: "price: 140 Gel",
    image: image17,
  },
];

const About = () => {
  return (
    <section className="mx-auto w-5/6 select-none overflow-y-auto overflow-x-hidden pb-32 pt-24">
      <div className="justify-between gap-8 md:flex ">
        <div className="md:w-3/5">
          <h1 className="pb-8 text-3xl font-bold">About Us</h1>
          <div className="space-y-6">
            <h1 className="text-xl font-bold">About Our Clay Works</h1>
            <p>
              At Orkol-studio, we are passionate about the artistry and
              craftsmanship of clay. Our journey began with a shared love for
              creating functional and beautiful objects from this versatile and
              ancient material. We have dedicated ourselves to producing a range
              of clay works that encompass both form and function.
            </p>
            <h1 className="text-xl font-bold">Craftsmanship and Creativity</h1>
            <p>
              Each of our clay pieces, whether it's a jug, a mug, or any other
              item, is a testament to our commitment to quality craftsmanship.
              Our skilled artisans take inspiration from both traditional and
              contemporary design, resulting in a unique collection that marries
              the beauty of clay with modern sensibilities.
            </p>
            <h1 className="text-xl font-bold">A Clay Experience</h1>
            <p>
              Our mission is to provide you with a clay experience like no
              other. We believe that the feel of a well-crafted clay mug in your
              hands or the aesthetics of a beautifully designed jug can elevate
              everyday moments. That's why we pour our creativity and expertise
              into every piece we create.
            </p>
            <h1 className="text-xl font-bold">Sustainability Matters</h1>
            <p>
              At Orkol-studio, we care deeply about the environment. Our
              commitment to sustainability is reflected in our choice of
              materials and production processes. We aim to make a positive
              impact by creating pieces that are not only functional and
              beautiful but also eco-friendly.
            </p>
            <h1 className="text-xl font-bold">Explore Our World of Clay</h1>
            <p>
              We invite you to explore our collection of clay works. From the
              comforting warmth of a clay mug to the elegance of a handcrafted
              jug, there's something for every taste. We're excited to share our
              passion for clay with you and help you discover the endless
              possibilities it holds.
            </p>
            <h1 className="text-xl font-bold">Contact Us</h1>
            <p>
              If you have any questions or would like to know more about our
              clay works, don't hesitate to get in touch. Your satisfaction is
              our top priority, and we look forward to assisting you.
            </p>
          </div>
        </div>
        <div className="mt-10 h-auto md:mt-0 md:w-2/5">
          <img alt="about-photo" src={aboutPhoto} className="rounded-lg" />
        </div>
      </div>

      {/* scroll */}
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <PhotoScroll
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>

      {/* history and make */}

      <div className=" grid grid-cols-1 grid-rows-1 gap-8 pt-32 ">
        <div className="text-2xl font-bold">
          <h1>Review:</h1>
        </div>

        <div className="border-2 border-solid border-black p-2">
          <div className="justify-between  md:flex md:py-10">
            <motion.div
              className="md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -70 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="space-y-4 md:ml-20">
                <h3 className="text-lg font-semibold">Sarah:</h3>
                <p>
                  "I can't get enough of Orkol-studio's clay mugs. They're
                  beautifully handcrafted, and every sip of coffee feels like a
                  little luxury. The earthy textures and colors are so unique.
                  I'm a fan!"
                </p>
              </div>
            </motion.div>
            <div className=" mt-10  md:mt-0 md:w-1/5">
              <div className="">
                <img
                  className="h-[250px] w-[232px] border-2 border-dotted border-black object-cover"
                  alt="history-photo"
                  src={sarah}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-solid border-black p-2">
          <div className="justify-between md:flex md:py-10">
            <div className="md:w-1/5">
              <div className="">
                <img
                  className="h-[250px] w-[232px] border-2 border-dotted border-black object-cover"
                  alt="history-photo"
                  src={david}
                />
              </div>
            </div>
            <motion.div
              className="mt-10 md:mt-0 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 70 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="space-y-4 md:mr-20">
                <h3 className="text-lg font-semibold">David:</h3>
                <p>
                  "I ordered a clay jug from Orkol-studio, and it exceeded my
                  expectations. The craftsmanship is impeccable, and it's now a
                  centerpiece in my kitchen. It's not just a jug; it's a work of
                  art."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-2 border-solid border-black p-2">
          <div className="justify-between md:flex md:py-10">
            <motion.div
              className="md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -70 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="space-y-4 md:ml-20">
                <h3 className="text-lg font-semibold">Emily:</h3>
                <p>
                  "I'm a collector of unique tableware, and orkol-studio's clay
                  products have become my latest obsession. The mugs, plates,
                  and bowls have a distinct charm that's hard to resist. They're
                  not just functional; they're conversation pieces!"
                </p>
              </div>
            </motion.div>
            <div className="mt-10 md:mt-0 md:w-1/5">
              <div className="">
                <img
                  className="h-[250px] w-[232px] border-2 border-dotted border-black object-cover"
                  alt="history-photo"
                  src={emily}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 border-solid border-black p-2">
          <div className="justify-between md:flex md:py-10">
            <div className="md:w-1/5">
              <div className="">
                <img
                  className="h-[250px] w-[232px] border-2 border-dotted border-black object-cover"
                  alt="history-photo"
                  src={james}
                />
              </div>
            </div>
            <motion.div
              className="mt-10 md:mt-0 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 70 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="space-y-4 md:mr-20">
                <h3 className="text-lg font-semibold">James:</h3>
                <p>
                  "I love supporting businesses that prioritize sustainability,
                  and Orkol-studio does just that. Their commitment to
                  eco-friendly clay works is commendable. The mugs and jugs I
                  purchased are not only beautiful but also a responsible choice
                  for my daily use."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
