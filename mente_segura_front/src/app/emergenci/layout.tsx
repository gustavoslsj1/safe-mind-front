import {
  SidebarProvider,
  SidebarTrigger,
} from "@/global/components/ui/sidebar";
import { AppSidebar } from "@/global/components/app-sidebar";

import { Button } from "@/global/components/ui/button";

export default function EmergenciLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" pt-3  w-full h-full">
        <SidebarTrigger className=" absolute" />
        <header className=" flex flex-row justify-between pb-5 px-8 w-full border-y-slate-400 border-b-[0.25px]">
          <h1 className=" font-bold font text-2xl text-indigo-600">
            Mente <span className="text-indigo-500">Segura </span>{" "}
          </h1>
          <Button className="font-bold"> sign out </Button>
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}
