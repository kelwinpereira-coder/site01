import WhatsAppButton from "./WhatsAppButton";
import { Clock, Shield, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="hero-gradient py-16 md:py-20">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Não perca mais tempo com aparelho quebrado!
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Peça seu orçamento agora mesmo e tenha seu eletrônico funcionando hoje.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
            <Zap className="w-4 h-4" />
            Orçamento grátis
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
            <Clock className="w-4 h-4" />
            Resposta em 5 min
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
            <Shield className="w-4 h-4" />
            Garantia de 90 dias
          </div>
        </div>

        <WhatsAppButton size="lg" message="Olá! Quero solicitar um orçamento para conserto.">
          Chamar no WhatsApp agora
        </WhatsAppButton>
      </div>
    </section>
  );
};

export default CTASection;
