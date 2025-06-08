import styles from "@/app/login/login.module.scss"
import image from "@/assets/Group.png"
import RandomImg from "@/components/images/RandomImg";
import Image from "next/image";


export default function Login() {

  return (
    <div className={`${styles.wrapper} flex justify-center items-center h-screen text-black`}>
      <div className="bg-white p-8 rounded-lg shadow-md w-[80%] max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center ">Login</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
          >
            Log In
          </button>
        </form>
      </div>
      <RandomImg/>
    </div>
  );
}
