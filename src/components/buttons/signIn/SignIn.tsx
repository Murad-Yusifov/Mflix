import { NextPage } from "next";



interface SignInProps {
  onSignIn?: ()=>void
}

const SignIn: NextPage<SignInProps> = ({ onSignIn }) => {
  return (
    <div>
      <button
        onClick={onSignIn}
        className="w-full h-[35px] px-6 py-5 mb-5 text-sm font-bold leading-none text-xl text-white transition duration-300 md:w-96 rounded-2xl bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 cursor-pointer"
        aria-label="Sign In"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
