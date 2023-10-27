type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const ShopButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="relative rounded-full  p-2 text-xl text-amber-700 outline hover:bg-amber-700 hover:text-stone-200   hover:outline-none sm:p-4 sm:text-2xl"
    >
      {children}
    </button>
  );
};

export default ShopButton;
