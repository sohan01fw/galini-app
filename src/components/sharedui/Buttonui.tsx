"use client";

import { redirect } from "next/navigation";
import { Button } from "../ui/button";

export function GetStartedBtn({ name }: { name: string }) {
  return (
    <Button
      className="rounded-lg  m-1 bg-purple-800 font-semibold hover:bg-purple-600 "
      onClick={() => {
        redirect("/dashboard");
      }}
      size={"lg"}
    >
      {name}
    </Button>
  );
}
