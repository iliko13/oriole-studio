type Props = {
  children: React.ReactNode;
};

const HeaderButton = ({ children }: Props) => {
  return (
    <button className="rounded-md border-b-2 border-amber-700 px-6 py-2 transition-all duration-300 hover:bg-amber-800 hover:text-stone-100">
      {children}
    </button>
  );
};

export default HeaderButton;

import React from "react";
