export default function Services() {
  const services = [
    {
      icon: "🔧",
      title: "Manutenção Preventiva",
      description: "Limpeza e verificação completa do sistema para evitar problemas futuros",
      features: ["Limpeza de componentes", "Verificação de pressão", "Troca de filtros"]
    },
    {
      icon: "🔍",
      title: "Diagnóstico Eletrônico",
      description: "Identificação precisa de problemas com equipamentos modernos",
      features: ["Scanner profissional", "Teste de compressão", "Análise de vazamentos"]
    },
    {
      icon: "🚗",
      title: "Instalação Completa",
      description: "Instalação de ar condicionado em veículos que não possuem o sistema",
      features: ["Kit completo", "Compressor novo", "Garantia de 1 ano"]
    },
    {
      icon: "🔄",
      title: "Recarga de Gás",
      description: "Recarga com gás refrigerante de qualidade e procedência",
      features: ["Gás R134a", "Procedimento seguro", "Teste de eficiência"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em ar condicionado automotivo com qualidade e garantia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}