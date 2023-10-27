import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import image23 from "../assets/image-23.jpeg";

const Contact = () => {
  const inputStyle = `mb-5 w-full rounded-lg bg-red-400 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section className="mx-auto w-5/6 overflow-y-auto overflow-x-hidden pb-32 pt-24">
      <motion.div>
        {/* header */}
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
          <h1 className="text-5xl font-extrabold">
            <span className=" text-red-500">Contact Us</span> to acquire our
            products
          </h1>
          <p className="my-5">
            Our 'Contact Us' section is your gateway to discovering the finest
            clay products. Whether you have inquiries, require assistance, or
            wish to place an order, our dedicated team is just a message away.
            We take pride in offering a range of high-quality clay creations,
            and we're eager to assist you on your journey to experience the
            beauty and versatility of our clay products.
          </p>
        </motion.div>

        {/* form and image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/your@email.com"
              method="POST"
            >
              <input
                className={`${inputStyle} focus:outline-none`}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 20 })}
              />
              {errors.name && (
                <p className="mt-1 text-red-400">
                  {errors.name.type === "required" && "This filed is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 20 character."}
                </p>
              )}

              <input
                className={`${inputStyle} focus:outline-none`}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-400">
                  {errors.email.type === "required" &&
                    "This filed is required."}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}

              <textarea
                className={`${inputStyle} focus:outline-none`}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-red-400">
                  {errors.message.type === "required" &&
                    "This filed is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 character."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-red-500 px-20 py-3 text-white transition duration-500 hover:bg-red-600"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full ">
              <img
                className="w-full rounded-lg"
                alt="contact-photo"
                src={image23}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
