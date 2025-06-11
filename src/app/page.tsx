"use client"
import SignIn from "@/components/buttons/signIn/SignIn";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to the Students Information System</h1>
      <SignIn onSignIn={goToLogin} />
    </div>
  );
}
