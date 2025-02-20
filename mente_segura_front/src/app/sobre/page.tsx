import {
  Heart,
  Shield,
  Sparkles,
  Users,
  Brain,
  Headphones,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  function FeatureCard({ icon, title, description }: any) {
    return (
      <Card className="border-blue-200 shadow-md">
        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
          {icon}
          <CardTitle className="text-lg font-semibold text-blue-700">
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
      <Card className="border-blue-200 shadow-md">
        <CardHeader className="flex flex-row items-center space-x-4 pb-2">
          {icon}
          <CardTitle className="text-lg font-semibold text-blue-700">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
          Sobre o Mente Segura
        </h1>

        <section className="mb-12">
          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">
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
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            O Que Fazemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-blue-600" />}
              title="Avaliação de Saúde Mental"
              description="Oferecemos uma avaliação inicial através de um chat com IA, ajudando a identificar possíveis preocupações de saúde mental."
            />
            <FeatureCard
              icon={<Headphones className="w-8 h-8 text-blue-600" />}
              title="Suporte Imediato"
              description="Disponibilizamos recursos de emergência e suporte imediato para momentos de crise."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="Conexão com Profissionais"
              description="Facilitamos o contato com psicólogos e outros profissionais de saúde mental qualificados."
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-blue-600" />}
              title="Recursos de Autoajuda"
              description="Fornecemos uma variedade de recursos e ferramentas para o autocuidado e bem-estar mental."
            />
          </div>
        </section>

        <section className="mb-12">
          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">
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
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
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

        <Card className="mt-12 border-blue-200 shadow-lg">
          <CardContent className="pt-6">
            <p className="text-gray-700 text-center">
              No Mente Segura, estamos comprometidos em fazer a diferença na
              vida das pessoas, um passo de cada vez. Juntos, podemos construir
              um mundo onde o cuidado com a saúde mental é acessível,
              compreendido e valorizado por todos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
