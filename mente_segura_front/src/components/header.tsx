"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMobille, setisMobille] = useState(false);
  const windos = window.innerWidth;
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (windos <= 800) {
      setisMobille(true);
    }
  }, []);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 1],
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY.current) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          lastScrollY.current = currentScrollY;
        } else {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);
  return (
    <header
      ref={headerRef}
      className={`  fixed left-96 translate-x-[170px] justify-center mt-6 w-full  p-5  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      {!isMobille ? (
        <div className="w-96  flex flex-row justify-center">
          {/* <div className=" flex w-full items-center">
            <Image
              src="/logo2.png"
              width={40}
              height={40}
              alt="logo inicial "
            ></Image>
          </div> */}
          <div className=" bg-blue-300 bg-opacity-40 rounded-3xl flex gap-4 items-center">
            <Button
              asChild
              className=" shadow-none rounded-3xl bg-transparent hover:bg-blue-200"
            >
              <Link href="/" className="  font-bold text-white">
                <p className="font-bold text-blue-950"> Pagina inicial</p>
              </Link>
            </Button>

            <Button
              asChild
              className=" shadow-none rounded-3xl bg-transparent hover:bg-blue-200"
            >
              <Link href="/atendimento">
                <p className="text-blue-950 font-bold"> Atendimento</p>
              </Link>
            </Button>
            <Button
              asChild
              className=" shadow-none rounded-3xl bg-transparent hover:bg-blue-200"
            >
              <Link href="cadastro" className="text-white font-bold">
                <p className="text-blue-950 font-bold"> Cadastre-se</p>
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-end  w-full">
          <Button
            asChild
            className="font-bold bg-transparent shadow-none hover:bg-blue-950"
          >
            <Link href="/">pagina inicial</Link>
          </Button>

          <Button
            asChild
            className="font-bold bg-transparent shadow-none hover:bg-blue-950"
          >
            <Link href="/sobre">sobre nós</Link>
          </Button>
          <div></div>
          <Button
            asChild
            className=" shadow-none bg-transparent hover:bg-blue-500"
          >
            <Link href="/cadastro" className="font-bold text-lima">
              {" "}
              Cadastre-se
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
