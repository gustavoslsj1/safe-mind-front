import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserRound } from "lucide-react";

export default function Header() {
  return (
    <header className=" w-full  p-5 flex flex-row justify-between ">
      <div className="w-full">Logo</div>
      <div className="  flex gap-4 items-center">
        <Button
          asChild
          className=" shadow-none bg-transparent hover:bg-blue-500"
        >
          <Link href="/" className="  font-bold text-white">
            Pagina inicial
          </Link>
        </Button>
        <Button
          asChild
          className=" shadow-none bg-transparent hover:bg-blue-500"
        >
          <Link href="/sobre" className="  font-bold text-white">
            Sobre nos
          </Link>
        </Button>
        <Button
          asChild
          className=" shadow-none bg-transparent hover:bg-blue-500"
        >
          <Link href="/login" className=" font-bold text-white">
            Atendimento
          </Link>
        </Button>
        <Button className=" shadow-none bg-transparent hover:bg-blue-500">
          <UserRound />
          <p className="font-bold text-white"> usuario </p>
        </Button>
      </div>
    </header>
  );
}
