import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import { MessageSquare } from "lucide-react";
export default function Escolha() {
  return (
    <div className="flex w-full h-[calc(100%-10%)] items-center justify-center">
      <div className=" h-full w-1/2 flex flex-col justify-center items-start gap-5">
        <div className=" bg-red-200 shadow-md shadow-blue-400 w-full rounded-lg p-10 justify-center items-start gap-1 flex flex-col">
          <TriangleAlert
            className=" absolute left-96 ml-24 top-[355px]"
            color="red "
            size={17}
          />
          <p className="font-bold text-red-700">Emergencia</p>
          <span className="text-sm text-gray-700 opacity-90">
            ligue para 188 suporte imediato
          </span>
          <Button asChild className="mt-6 bg-red-700 hover:bg-red-800">
            <Link href="/emergenci">preciso de ajuda urgente</Link>
          </Button>
        </div>

        <div className="bg-blue-200 w-full shadow-md shadow-blue-400 p-10 gap-1 justify-center items-start rounded-lg  flex flex-col">
          <MessageSquare
            className="absolute left-96 ml-24 mt-[185px] top-96"
            size={17}
          />
          <p className="font-bold">Autoavaliação</p>
          <span className="text-sm text-gray-700 opacity-90">
            peça uma avaliação so seu estado psicologico
          </span>
          <Button asChild className="mt-6">
            <Link href="/login">iniciar autoavaliação</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
