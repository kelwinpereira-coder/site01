import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    service: "Troca de tela - iPhone",
    text: "Meu celular caiu e a tela estourou. Em menos de 2 horas já estava pronto e funcionando perfeito! Preço justo e atendimento nota 10.",
    rating: 5,
  },
  {
    name: "João Silva",
    service: "Conserto de TV Samsung",
    text: "A TV não ligava mais, pensei que tinha perdido. O técnico identificou o problema rápido e o conserto ficou muito mais barato que comprar uma nova.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    service: "Notebook travando",
    text: "Meu notebook estava muito lento. Fizeram uma limpeza completa e troca do HD por SSD. Parece um computador novo! Super recomendo.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            O que nossos clientes dizem
          </h2>
          <p className="section-subtitle">
            Centenas de clientes satisfeitos com nosso trabalho. Veja alguns depoimentos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-6 shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
