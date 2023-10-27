import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createContext } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

type ContextType = {
  isAboveMediumScreen: boolean;
};

export const PostContext = createContext<ContextType | null>(null);

const App = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <ShoppingCartProvider>
      <PostContext.Provider value={{ isAboveMediumScreen }}>
        <Header />

        <main className="mt-[88px]">
          <Outlet />
        </main>

        <Footer />
      </PostContext.Provider>
    </ShoppingCartProvider>
  );
};

export default App;
