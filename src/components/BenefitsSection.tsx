import { Shield, Clock, BadgeCheck, Banknote, MapPin, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Garantia de 90 dias",
    description: "Todos os consertos têm garantia. Se der problema, a gente resolve sem custo.",
  },
  {
    icon: Clock,
    title: "Entrega rápida",
    description: "Maioria dos consertos prontos no mesmo dia ou em até 24 horas.",
  },
  {
    icon: BadgeCheck,
    title: "Técnico especializado",
    description: "Profissional com anos de experiência e certificação em eletrônicos.",
  },
  {
    icon: Banknote,
    title: "Preço justo",
    description: "Orçamento grátis e sem surpresas. Você só paga se aprovar.",
  },
  {
    icon: MapPin,
    title: "Atendimento local",
    description: "Fácil acesso, estacionamento próximo e atendimento personalizado.",
  },
  {
    icon: Headphones,
    title: "Suporte pós-venda",
    description: "Qualquer dúvida após o conserto, estamos à disposição.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Por que escolher a gente?
          </h2>
          <p className="section-subtitle">
            Nosso compromisso é entregar seu aparelho funcionando perfeitamente, com rapidez e segurança.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex gap-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
