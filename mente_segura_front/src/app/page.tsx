"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Shield,
  Sparkles,
  Users,
  Brain,
  Headphones,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  function FeatureCard({ icon, title, description }: any) {
    return (
      <Card className="border-blue-200 bg-blue-100 shadow-md">
        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
          {icon}
          <CardTitle className="text-lg font-semibold text-blue-950">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    );
  }

  function CommitmentCard({ icon, title, description }: any) {
    return (
      <Card className="border-blue-200 bg-blue-100 shadow-md">
        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
          {icon}
          <CardTitle className="text-lg font-semibold text-blue-950">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="  mt-36 flex flex-col justify-between h-full items-center  w-full ">
      <div className=" flex flex-col max-w-screen-lg items-center">
        {" "}
        <div className=" gap-24 mt-32 h-full flex flex-row justify-center items-center">
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="logo inicial "
          ></Image>
          <Card className=" shadow-none border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-950">
                Nossa Missão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                O Mente Segura nasceu da necessidade urgente de tornar o cuidado
                com a saúde mental mais acessível, imediato e menos intimidante.
                Nossa missão é proporcionar um espaço seguro e acolhedor onde as
                pessoas possam buscar ajuda, seja em momentos de crise ou para
                cuidados preventivos de saúde mental.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-row justify-start gap-14 mt-20   w-full">
          {" "}
          <Button
            asChild
            className="  bg-blue-200 hover:bg-blue-300 rounded-full font-serif py-6 px-14 transition-all text-xl duration-400"
          >
            <Link href="/atendimento">
              <p className="text-blue-950 font-bold">começar a usar</p>
            </Link>
          </Button>
          <Button
            asChild
            className="  bg-blue-200 hover:bg-blue-300 rounded-full font-serif py-6 px-14 transition-all text-xl duration-400"
          >
            <Link href="/atendimento">
              <p className="text-blue-950 font-bold">saiba mais</p>
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-32 py-12 px-4 sm:px-6 lg:px-8 font-inter">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-950 text-center mb-8">
            Sobre o Mente Segura
          </h1>

          <section className=" mt-28 mb-12"></section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              O Que Fazemos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Brain className="w-8 h-8 text-blue-950" />}
                title="Avaliação de Saúde Mental"
                description="Oferecemos uma avaliação inicial através de um chat com IA, ajudando a identificar possíveis preocupações de saúde mental."
              />
              <FeatureCard
                icon={<Headphones className="w-8 h-8 text-blue-950" />}
                title="Suporte Imediato"
                description="Disponibilizamos recursos de emergência e suporte imediato para momentos de crise."
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-blue-950" />}
                title="Conexão com Profissionais"
                description="Facilitamos o contato com psicólogos e outros profissionais de saúde mental qualificados."
              />
              <FeatureCard
                icon={<Sparkles className="w-8 h-8 text-blue-950" />}
                title="Recursos de Autoajuda"
                description="Fornecemos uma variedade de recursos e ferramentas para o autocuidado e bem-estar mental."
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-950">
                  Nossa Abordagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No Mente Segura, acreditamos que a tecnologia pode ser uma
                  poderosa aliada na promoção da saúde mental. Nossa plataforma
                  combina inteligência artificial com expertise humana para
                  oferecer:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Avaliações iniciais rápidas e acessíveis</li>
                  <li>Suporte 24/7 para situações de emergência</li>
                  <li>
                    Encaminhamento personalizado para profissionais de saúde
                    mental
                  </li>
                  <li>
                    Recursos educativos e de autoajuda baseados em evidências
                    científicas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Nosso Compromisso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CommitmentCard
                icon={<Heart className="w-8 h-8 text-red-500" />}
                title="Cuidado Compassivo"
                description="Tratamos cada usuário com empatia e respeito, reconhecendo a coragem necessária para buscar ajuda."
              />
              <CommitmentCard
                icon={<Shield className="w-8 h-8 text-green-500" />}
                title="Privacidade e Segurança"
                description="Protegemos rigorosamente a privacidade e os dados dos nossos usuários, criando um ambiente seguro e confiável."
              />
            </div>
          </section>

          <Card className="mt-12 border-blue-200 bg-blue-100 shadow-lg">
            <CardContent className="pt-6">
              <p className="text-gray-700 text-center">
                No Mente Segura, estamos comprometidos em fazer a diferença na
                vida das pessoas, um passo de cada vez. Juntos, podemos
                construir um mundo onde o cuidado com a saúde mental é
                acessível, compreendido e valorizado por todos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
