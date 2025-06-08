"use client"
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to the Students Information System</h1>
      <button
        onClick={goToLogin}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Go to the login page
      </button>
    </div>
  );
}
