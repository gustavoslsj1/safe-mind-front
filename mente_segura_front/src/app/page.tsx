"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" gap-24  flex flex-col justify-center items-center  w-full h-[calc(100%-10%)]">
      <h1 className=" text-white text-6xl font-serif  ">Mente Segura </h1>
      <Button
        asChild
        className=" bg-slate-700  font-serif p-10 transition-all text-xl duration-400"
      >
        <Link href="/escolha">começar a usar</Link>
      </Button>
    </div>
  );
}
