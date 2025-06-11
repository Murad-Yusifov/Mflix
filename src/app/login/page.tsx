
"use client"
import styles from "@/app/login/login.module.scss";
import dynamic from "next/dynamic";
import Configure from "./components/loginForm/Configure";
const RandomImg = dynamic(() => import("@/components/images/RandomImg"), { ssr: false });

export default function Login() {
  return (
    <div
      className={`${styles.wrapper} flex justify-center items-center h-screen text-white backdrop-blur-3xl`}
    >
         <RandomImg/>
      <div
        className={`${styles.curlyImg} bg-transparent p-8 rounded-lg shadow-md w-[80%] max-w-md`}
      >
        <h1 className="text-2xl font-bold mb-6 text-center ">Login</h1>

        <Configure/>
        
        
      </div>
     
    </div>
  );
}
