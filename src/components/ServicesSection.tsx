import { Smartphone, Tv, Laptop, Battery, MonitorSmartphone, Cpu, HardDrive, Wifi } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Troca de Tela",
    description: "Telas originais e compatíveis para celulares e notebooks",
    highlight: true,
  },
  {
    icon: Battery,
    title: "Troca de Bateria",
    description: "Baterias novas com garantia de 90 dias",
    highlight: true,
  },
  {
    icon: Cpu,
    title: "Reparo de Placa",
    description: "Conserto de componentes e micro soldagem",
    highlight: false,
  },
  {
    icon: HardDrive,
    title: "Formatação e Limpeza",
    description: "Remoção de vírus e otimização de sistema",
    highlight: false,
  },
  {
    icon: Wifi,
    title: "Reparo de Conectividade",
    description: "Wi-Fi, Bluetooth e conexões que não funcionam",
    highlight: false,
  },
  {
    icon: Tv,
    title: "Conserto de TV",
    description: "Placas, fontes e telas de LED, LCD e Smart TV",
    highlight: true,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Nossos Serviços
          </h2>
          <p className="section-subtitle">
            Trabalhamos com as melhores peças e técnicas para garantir o conserto perfeito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service relative animate-slide-up ${service.highlight ? 'ring-2 ring-primary/20' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Mais procurado
                </div>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
