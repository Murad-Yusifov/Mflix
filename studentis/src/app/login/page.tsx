import styles from "@/app/login/login.module.scss";
import SignIn from "@/components/buttons/signIn/SignIn";
import RandomImg from "@/components/images/RandomImg";

export default function Login() {
  return (
    <div
      className={`${styles.wrapper} flex justify-center items-center h-screen text-black`}
    >
         <RandomImg
      />
      <div
        className={`${styles.curlyImg} bg-transparent p-8 rounded-lg shadow-md w-[80%] max-w-md`}
      >
        <h1 className="text-2xl font-bold mb-6 text-center ">Login</h1>
        <div className="flex items-center xl:p-10">
        <form className="flex flex-col justify-center items-center gap-2 w-full h-full pb-6 text-center bg-transparent rounded-3xl">
          <h3 className="mb-3 text-3xl font-extrabold text-dark-grey-900">
            Sign In
          </h3>
          <p className="mb-4 text-grey-700 text-md">Enter your email and password</p>
          <a className=" h-[30px] flex items-center justify-center gap-2 w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
            <img
              className="h-5 mr-2"
              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
              alt="google"
            />
            Sign in with Google
          </a>
          <div className="flex flex-col items-center mb-3">
            <hr className="h-0 border-b border-solid border-grey-500 grow" />
            <p className="mx-4 text-grey-600">or</p>
            <hr className="h-0 border-b border-solid border-grey-500 grow" />
          </div>
          <label
            htmlFor="email"
            className="mb-2 text-sm text-start text-grey-900"
          >
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="mail@loopple.com"
            className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
          />
          <label
            htmlFor="password"
            className="mb-2 text-sm text-start text-grey-900"
          >
            Password*
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
                checked
                value=""
                className="sr-only peer"
              />
              <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
                <img
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                  alt="tick"
                />
              </div>
              <span className="ml-3 text-sm font-normal text-grey-900">
                Keep me logged in
              </span>
            </label>
            <a
              href="javascript:void(0)"
              className="mr-4 text-sm font-medium text-purple-blue-500"
            >
              Forget password?
            </a>
          </div>
         <SignIn/>
          <p className="text-sm leading-relaxed text-grey-900">
            Not registered yet?{" "}
            <a href="javascript:void(0)" className="font-bold text-grey-700">
              Create an Account
            </a>
          </p>
        </form>
        </div>
      </div>
     
    </div>
  );
}
