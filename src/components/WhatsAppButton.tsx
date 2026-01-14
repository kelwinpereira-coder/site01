import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  floating?: boolean;
  message?: string;
  phone?: string;
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const WhatsAppButton = ({
  floating = false,
  message = "Olá! Gostaria de solicitar um orçamento para conserto.",
  phone = "5511999999999",
  children,
  className = "",
  size = "md",
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  };

  if (floating) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <div className="whatsapp-button flex items-center justify-center w-16 h-16 rounded-full">
          <MessageCircle className="w-7 h-7" fill="currentColor" />
        </div>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button inline-flex items-center justify-center rounded-lg ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" fill="currentColor" />
      {children || "Peça seu orçamento"}
    </a>
  );
};

export default WhatsAppButton;
