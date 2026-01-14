import { Wrench, Phone } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Wrench className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-foreground text-lg">TechRepair</span>
            <span className="text-xs text-muted-foreground block -mt-1">Assistência Técnica</span>
          </div>
        </a>

        {/* Contact */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+5511999999999"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            (11) 99999-9999
          </a>
          <WhatsAppButton size="sm" message="Olá! Preciso de um orçamento.">
            WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
