import Image from "next/image";
import logo from "@/assets/logo/logo2.png";
import sideImage from "@/assets/loginPage/image.png";
import google from "@/assets/loginPage/authLogos/google.png";
import { FaFacebook } from "react-icons/fa";
import SignIn from "../SignIn/SignIn";
import Check from "../checkBox/Check";

const LoginPage = () => {
  return (
    <div className=" w-7/8 justify-center pl-80 md::w-full flex bg-dark ">
      {/* left side onSubmit={formik.handleSubmit} */}
      <form className="w-full sm:w-4/8 flex justify-center items-center ">
        <div
          className="w-full sm:w-[480px] h-[450px] bg-[#1F2937] text-white rounded-2xl flex flex-col justify-around "
          style={{ padding: "25px" }}
        >
          <div className="flex items-center gap-2 ">
            <Image src={logo} alt="logo" width={30} height={30} />
            <span>(SIS)</span>
          </div>
          <span className="text-xl sm:">Welcome back</span>
          <p className="text-[10px] sm:text-sm">
            Start your website in seconds. Don’t have an account?{" "}
            <span className="text-blue-400 cursor-pointer">Sign up</span>.
          </p>
          <div className="flex-col gap-4 sm:flex flex-row justify-around  ">
            {/* email */}
            <div className="w-full sm:w-3/8 flex flex-col gap-0.5">
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="email"
                placeholder="name@student.com"
                className="border-none text-sm bg-[#374151] rounded-md h-[30px] "
                style={{ paddingLeft: "10px" }}
              />
            </div>
            {/* password */}
            <div className="w-full sm:w-3/8 flex flex-col gap-0.5 ">
              <label htmlFor="email">password</label>
              <input
                id="password "
                type="password"
                placeholder="••••••••"
                className="border-none bg-[#374151] text-sm rounded-md pl-0.5 h-[30px]"
                style={{ paddingLeft: "10px" }}
              />
            </div>
          </div>
          <div className="h-[35px]  sm:h-[20px] flex justify-around items-center text-gray-100  ">
            <hr className="w-3/8" />
            <span className="">or</span>
            <hr className="w-3/8" />
          </div>
          {/* checkbox */}
          <Check />

          {/* auth */}
          <div className="w-full h-3/8 flex flex-col gap-4 justify-evenly">
            {/* firebase auth */}
            <div className="w-full h-[30px] flex justify-center items-center gap-2 border rounded-md border-gray-400 cursor-pointer  hover:bg-gray-200  duration-500 group">
              <Image
                src={google}
                alt="google"
                width={18}
                height={18}
                className="h-5 mr-2 "
              />

              <span className="group-hover:text-black">
                Sign in with Google
              </span>
            </div>
            {/* width facebook */}
            <div className="w-full h-[30px] flex justify-center items-center gap-2 border rounded-md border-gray-400 cursor-pointer hover:bg-gray-200  duration-500 group">
              <FaFacebook className="text-blue-500 text-xl rounded-full" />
              <span className="group-hover:text-black">
                Sign in with Facebook
              </span>
            </div>
            <SignIn />
          </div>
        </div>
      </form>
      {/* right side */}
      <div className="hidden sm: w-3/8 md:flex w-4/8 justify-center items-center">
        <Image src={sideImage} alt="left" className="w-3/4 h-3/4" />
      </div>
    </div>
  );
};

export default LoginPage;
