"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/global/components/ui/alert-dialog";
import { Button } from "@/global/components/ui/button";
import Login from "./login/page";
import { redirect } from "next/navigation";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  function loginPage() {
    redirect("/login");
  }
  function emergenciPage() {
    redirect("emergenci");
  }

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>SEJA BEM-VINDO </AlertDialogTitle>
          <AlertDialogDescription>
            Caso seja algo urgente, escolha "Emergência". Caso contrário,
            selecione a opção convencional.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={loginPage}>
            convencional
          </AlertDialogCancel>
          <AlertDialogAction className="bg-red-900" onClick={emergenciPage}>
            Emergência
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
