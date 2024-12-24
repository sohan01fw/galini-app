"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";

export function HomeBtn({ sizes }: { sizes: string | any }) {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const handleLogin = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/auth/login");
    }
  };
  return (
    <Button
      className="rounded-lg  m-1 bg-purple-800 font-semibold hover:bg-purple-600 "
      onClick={handleLogin}
      size={sizes}
    >
      {isSignedIn ? "Dashboard" : "Get Started"}
    </Button>
  );
}
