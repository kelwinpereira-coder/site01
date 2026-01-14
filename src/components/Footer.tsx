import { Wrench, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80">
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-background text-lg">TechRepair</span>
                <span className="text-xs text-background/60 block -mt-1">Assistência Técnica</span>
              </div>
            </div>
            <p className="text-background/60 max-w-md">
              Conserto de celulares, TVs e notebooks com qualidade, garantia e preço justo. Seu aparelho em boas mãos.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua Exemplo, 123 - Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>WhatsApp disponível</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-background mb-4">Horário</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Seg a Sex: 8h às 18h</span>
              </li>
              <li className="pl-6">Sábado: 8h às 13h</li>
              <li className="pl-6">Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/40">
          <p>© {currentYear} TechRepair Assistência Técnica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
