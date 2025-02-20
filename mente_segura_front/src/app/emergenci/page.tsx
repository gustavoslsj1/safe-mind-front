"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PhoneCall, MessageSquare, HeartPulse, Shield } from "lucide-react";

export default function emergenci() {
  const [showResources, setShowResources] = useState(false);
  function EmergencyResource({
    icon,
    title,
    description,
    action,
    actionText,
  }: any) {
    return (
      <Card className="border-red-200 shadow-md">
        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
          {icon}
          <CardTitle className="text-lg font-semibold text-red-700">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <Button
            className="w-full bg-red-100 text-red-700 hover:bg-red-200"
            onClick={action}
          >
            {actionText}
          </Button>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-red-700 text-center mb-8">
          Suporte de Emergência
        </h1>

        <Card className="mb-8 border-red-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-red-600">
              Você não está sozinho
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Se você está em uma crise ou tendo pensamentos suicidas, por
              favor, saiba que há ajuda disponível. Você é importante e sua vida
              tem valor.
            </p>
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={() => setShowResources(!showResources)}
            >
              {showResources
                ? "Ocultar Recursos"
                : "Mostrar Recursos de Emergência"}
            </Button>
          </CardContent>
        </Card>

        {showResources && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EmergencyResource
              icon={<PhoneCall className="h-6 w-6 text-red-600" />}
              title="Linha de Vida"
              description="Ligue 188 para falar com um conselheiro treinado agora mesmo."
              action={() => {}}
              actionText="Ligar Agora"
            />
            <EmergencyResource
              icon={<MessageSquare className="h-6 w-6 text-red-600" />}
              title="Chat de Crise"
              description="Converse por texto com um conselheiro de crise."
              action={() => {}}
              actionText="Iniciar Chat"
            />
            <EmergencyResource
              icon={<HeartPulse className="h-6 w-6 text-red-600" />}
              title="Exercícios de Respiração"
              description="Técnicas simples para acalmar sua mente e corpo."
              action={() => {}}
              actionText="Ver Exercícios"
            />
            <EmergencyResource
              icon={<Shield className="h-6 w-6 text-red-600" />}
              title="Plano de Segurança"
              description="Crie um plano personalizado para momentos de crise."
              action={() => {}}
              actionText="Criar Plano"
            />
          </div>
        )}

        <Card className="mt-8 border-red-200 shadow-lg">
          <CardContent className="pt-6">
            <p className="text-gray-700 text-center">
              Lembre-se: Esta situação é temporária. Com o suporte adequado,
              você pode superar este momento difícil.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
