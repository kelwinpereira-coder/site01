import { Check, AlertCircle, Smartphone, Tv, Laptop } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const problems = [
  {
    icon: Smartphone,
    category: "Celulares",
    items: [
      "Tela quebrada ou trincada",
      "Bateria viciada ou não carrega",
      "Não liga ou reinicia sozinho",
      "Botões não funcionam",
      "Câmera com defeito",
    ],
  },
  {
    icon: Tv,
    category: "TVs",
    items: [
      "Não liga ou fica piscando",
      "Tela escura ou sem imagem",
      "Som não funciona",
      "Linhas na tela",
      "Não conecta no Wi-Fi",
    ],
  },
  {
    icon: Laptop,
    category: "Notebooks",
    items: [
      "Tela quebrada ou escura",
      "Lento ou travando",
      "Bateria não segura carga",
      "Teclado com teclas falhando",
      "Superaquecimento",
    ],
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
            <AlertCircle className="w-4 h-4" />
            Problemas comuns
          </div>
          <h2 className="section-title">
            Seu aparelho está com algum desses problemas?
          </h2>
          <p className="section-subtitle">
            A gente resolve! Confira os defeitos mais comuns que consertamos todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.category}
              className="card-service animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {problem.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {problem.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <WhatsAppButton
                  size="sm"
                  message={`Olá! Preciso de orçamento para conserto de ${problem.category.toLowerCase()}.`}
                  className="w-full justify-center"
                >
                  Orçamento grátis
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
