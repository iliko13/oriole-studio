import { AiFillYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo_transparent.png";

const Footer = () => {
  return (
    <footer className=" mt-20 bg-orange-100 py-8">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="basis-1/2 md:mt-0 ">
          <img alt="logo" src={logo} className="w-[150px] " />
          <p className="my-5">
            Connect with Orkol-Studio: Follow us on social media for the latest
            updates and artistic insights.
          </p>
          <p>&copy; All Rights Reserved</p>
        </div>
        <div className="mt-16  grid basis-1/4 columns-1 md:mt-0">
          <div className="flex items-center justify-start space-x-4 md:text-3xl">
            <div className="text-blue-500 hover:text-blue-600">
              <Link to="">
                <AiFillFacebook />
              </Link>
            </div>
            <div className="text-red-500 hover:text-red-600">
              <Link to="">
                <AiFillYoutube />
              </Link>
            </div>
            <div className="text-green-500 hover:text-green-600">
              <Link to="">
                <AiOutlineWhatsApp />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold">Contact Us</h4>
            <p>+(995) 557-214-154</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
