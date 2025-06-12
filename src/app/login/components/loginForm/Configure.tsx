"use client";
import SignIn from "@/components/buttons/signIn/SignIn";
import Link from "next/link";
import { useState } from "react";

const Configure = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
      <form className="flex flex-col justify-center gap-2 w-full h-full text-center bg-transparent rounded-3xl">
        <h3 className="mb-3 text-3xl font-extrabold text-dark-grey-900">
          Sign In
        </h3>
        <p className="mb-4 text-grey-700 text-md">
          Enter your email and password
        </p>
        <Link
          href="javascript:void(0)"
          className=" h-[30px] flex items-center justify-center gap-2 w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300"
        >
          <img
            className="h-5 mr-2"
            src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
            alt="google"
          />
          Sign in with Google
        </Link>
        <div className="flex flex-col items-center mb-3">
          <hr className="h-0 border-b border-solid border-grey-500 grow" />
          <p className="mx-4 text-grey-600">or</p>
          <hr className="h-0 border-b border-solid border-grey-500 grow" />
        </div>
        <label
          htmlFor="email"
          className="mb-2 text-sm text-start text-grey-900"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="mail@loopple.com"
          className="flex items-center w-full h-[30px] px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
        />
        <label
          htmlFor="password"
          className="mb-2 text-sm text-start text-grey-900"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter a password"
          className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
        />
        <div className="flex flex-row justify-between mb-8">
          <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBox}
              className="sr-only peer relative"
            />
            <svg
              className="w-4 h-4 text-white peer-checked:block hidden absolute top-0 left-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div className="w-5 h-5 bg-white border-2 rounded-sm border-gray-500 peer-checked:border-0 peer-checked:bg-blue-600 flex items-center justify-center">
              <img
                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                alt="tick"
                className="hidden peer-checked:block"
              />
            </div>
            <span className="ml-3 text-sm font-normal text-gray-900 text-white">
              Keep me logged in
            </span>
          </label>

          <Link
            href="javascript:void(0)"
            className="mr-4 text-sm font-medium text-purple-blue-500"
          >
            Forget password?
          </Link>
        </div>
        <SignIn />
        <p className="text-sm leading-relaxed text-grey-900">
          Not registered yet?{" "}
          <Link href="javascript:void(0)" className="font-bold text-grey-700">
            Create an Account
          </Link>
        </p>
      </form>
  );
};

export default Configure;
