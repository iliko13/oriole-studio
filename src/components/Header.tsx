import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../App";
import logo from "../assets/logo_transparent.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SignInButton from "./SignInButton";
import ShopButton from "./ShopButton";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Header = () => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const navBarBackground = isTopOfPage ? "" : "bg-orange-100 drop-shadow";
  const { isAboveMediumScreen } = useContext(PostContext) || {
    isAboveMediumScreen: false,
  };
  //Second variant
  // const context = useContext(PostContext);

  // // Check if the context is defined before accessing its properties
  // const isAboveMediumScreen = context?.isAboveMediumScreen || false;
  const { openCart, cartQuantity } = useShoppingCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className=" overscroll-x-none">
      <div
        className={`${navBarBackground} ${flexBetween} fixed top-0 z-50 h-16 w-full md:h-28`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <Link to="/">
              <img alt="logo" src={logo} className=" w-[150px] md:w-[300px]" />
            </Link>
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm font-semibold`}>
                  <HeaderButton>
                    <Link to="/">Home</Link>
                  </HeaderButton>
                  <HeaderButton>
                    <Link to="/store">Store</Link>
                  </HeaderButton>
                  <HeaderButton>
                    <Link to="/about">About</Link>
                  </HeaderButton>
                  <HeaderButton>
                    <Link to="/contact">Contact</Link>
                  </HeaderButton>
                </div>
                {cartQuantity ? (
                  <div>
                    <ShopButton onClick={openCart}>
                      <AiOutlineShoppingCart />
                      <div className="absolute flex  translate-x-6 items-center justify-center rounded-full bg-red-500 px-2 py-1  text-sm text-stone-100">
                        {cartQuantity}
                      </div>
                    </ShopButton>
                  </div>
                ) : null}
                <div>
                  <SignInButton>Sign In</SignInButton>
                </div>
              </div>
            ) : (
              <>
                {cartQuantity ? (
                  <div>
                    <ShopButton onClick={openCart}>
                      <AiOutlineShoppingCart />
                      <div className="absolute flex  translate-x-2 items-center justify-center rounded-full bg-red-500 px-2 py-1 text-sm  text-stone-100 sm:translate-x-6">
                        {cartQuantity}
                      </div>
                    </ShopButton>
                  </div>
                ) : null}
                <button
                  className="rounded-full bg-amber-800 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className=" h-6 w-6 text-white" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* {mobile-version} */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-50 h-full w-[300px] bg-orange-800 drop-shadow-xl">
          <div className="flex justify-end p-9">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-8 w-8 text-stone-100" />
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-12 text-2xl text-stone-100">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Link to="/">Home</Link>
            </button>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Link to="/store">Store</Link>
            </button>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Link to="/about">About</Link>
            </button>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Link to="/contact">Contact</Link>
            </button>
            <button className="mr-2 mt-20  rounded-lg px-10 py-2 text-stone-100 hover:bg-stone-100 hover:text-black">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
