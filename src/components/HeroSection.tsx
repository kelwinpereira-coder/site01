import { Smartphone, Tv, Laptop, Clock, Shield, Wrench } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6 animate-fade-in">
            <Clock className="w-4 h-4" />
            <span>Atendimento rápido • Orçamento grátis</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Seu eletrônico quebrou?
            <br />
            <span className="text-white/90">A gente resolve hoje!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Conserto de celulares, TVs e notebooks com <strong>garantia de 90 dias</strong>, preço justo e atendimento no mesmo dia.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <WhatsAppButton size="lg" message="Olá! Preciso de um orçamento para conserto.">
              Peça seu orçamento agora
            </WhatsAppButton>
            <p className="text-white/60 text-sm mt-3">
              Resposta em até 5 minutos
            </p>
          </div>

          {/* Device icons */}
          <div className="flex items-center justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center gap-2 text-white/70">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-xs">Celulares</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white/70">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <Tv className="w-6 h-6" />
              </div>
              <span className="text-xs">TVs</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white/70">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="text-xs">Notebooks</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Garantia de 90 dias</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Entrega no mesmo dia</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Wrench className="w-4 h-4 text-secondary" />
              <span>Técnico especializado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
