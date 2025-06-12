
"use client"
import styles from "@/app/login/login.module.scss";
import dynamic from "next/dynamic";
const RandomImg = dynamic(() => import("@/components/images/RandomImg"), { ssr: false });

export default function Login() {
  return (
    <div
      className={`${styles.wrapper} flex justify-center items-center p-4 h-screen text-white backdrop-blur-3xl`}
    >
         <RandomImg/>
      <div
        className={`${styles.curlyImg} bg-transparent p-8 rounded-lg shadow-2xl w-[80%] max-w-md`}
      >
        <h1 className="text-xl font-bold mb-6 text-center ">Login</h1>
        
        
      </div>
     
    </div>
  );
}
