"use client";

import { redirect } from "next/navigation";
import { Button } from "../ui/button";

export function GetStartedBtn() {
  return (
    <Button
      className=" rounded-2xl m-1 bg-purple-700 font-semibold hover:bg-purple-600 "
      onClick={() => {
        redirect("/dashboard");
      }}
    >
      Get Started
    </Button>
  );
}
