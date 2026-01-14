import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsAppButton from "./WhatsAppButton";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Olá! Me chamo ${formData.name}.\nTelefone: ${formData.phone}\n${formData.message ? `Mensagem: ${formData.message}` : "Gostaria de solicitar um orçamento."}`
    );
    
    window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp!",
      description: "Você será atendido em instantes.",
    });

    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="section-title text-left">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos prontos para resolver seu problema. Fale com a gente pelo WhatsApp ou preencha o formulário.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Localização</h4>
                  <p className="text-muted-foreground">Rua Exemplo, 123 - Centro<br />São Paulo, SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">Seg a Sex: 8h às 18h<br />Sábado: 8h às 13h</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <WhatsAppButton size="lg" message="Olá! Gostaria de solicitar um orçamento.">
                Chamar no WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Preencha para orçamento rápido
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background"
                  maxLength={100}
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Seu WhatsApp *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                  maxLength={20}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Descreva o problema (opcional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background resize-none"
                  rows={4}
                  maxLength={500}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar e chamar no WhatsApp
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você será redirecionado para o WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
