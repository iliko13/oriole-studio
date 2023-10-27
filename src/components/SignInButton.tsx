type Props = {
  children: React.ReactNode;
};

const SignInButton = ({ children }: Props) => {
  return (
    <button className="rounded-lg bg-amber-800 px-10 py-2 text-stone-100 hover:bg-red-500">
      {children}
    </button>
  );
};

export default SignInButton;
