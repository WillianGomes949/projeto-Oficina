import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Link from 'next/link';

export default function Servicos() {
  const servicosDetalhados = [
    {
      icon: "🔧",
      title: "Manutenção Preventiva",
      description: "Serviço completo de manutenção para evitar problemas futuros e garantir o bom funcionamento do seu ar condicionado.",
      detalhes: [
        "Limpeza completa do sistema",
        "Troca de filtro de cabine",
        "Verificação de pressão do gás",
        "Inspeção de correias e polias",
        "Teste de temperatura e performance"
      ],
      preco: "A partir de R$ 150,00",
      tempo: "1-2 horas",
      garantia: "3 meses"
    },
    {
      icon: "🔍",
      title: "Diagnóstico Eletrônico",
      description: "Identificação precisa de problemas utilizando equipamentos de última geração e scanner profissional.",
      detalhes: [
        "Scan completo do sistema eletrônico",
        "Teste de compressão do compressor",
        "Detecção de vazamentos com ultravioleta",
        "Análise de sensores e atuadores",
        "Relatório detalhado do diagnóstico"
      ],
      preco: "R$ 80,00",
      tempo: "30-60 minutos",
      garantia: "Não aplicável"
    },
    {
      icon: "🚗",
      title: "Instalação Completa",
      description: "Instalação de kit completo de ar condicionado em veículos que não possuem o sistema original.",
      detalhes: [
        "Kit completo original/qualidade",
        "Compressor novo",
        "Condensador e evaporador",
        "Todos os componentes necessários",
        "Teste final de funcionamento"
      ],
      preco: "Sob consulta",
      tempo: "1 dia",
      garantia: "12 meses"
    },
    {
      icon: "🔄",
      title: "Recarga de Gás",
      description: "Recarga completa com gás refrigerante R134a de alta qualidade e procedência garantida.",
      detalhes: [
        "Gás R134a puro",
        "Verificação de vazamentos",
        "Limpeza do sistema",
        "Teste de performance",
        "Medição de temperatura final"
      ],
      preco: "A partir de R$ 120,00",
      tempo: "45 minutos",
      garantia: "6 meses"
    },
    {
      icon: "⚡",
      title: "Reparo de Compressores",
      description: "Reparo especializado em compressores de ar condicionado com peças de qualidade.",
      detalhes: [
        "Diagnóstico do compressor",
        "Reparo ou substituição",
        "Troca de embreagem quando necessário",
        "Teste de pressão e vedação",
        "Regulagem do sistema"
      ],
      preco: "Sob consulta",
      tempo: "2-4 horas",
      garantia: "6 meses"
    },
    {
      icon: "🧼",
      title: "Higienização Completa",
      description: "Limpeza e higienização profunda do sistema para eliminar odores e bactérias.",
      detalhes: [
        "Limpeza do evaporador",
        "Higienização dos dutos",
        "Aplicação de bactericida",
        "Troca do filtro de ar",
        "Eliminação de odores"
      ],
      preco: "R$ 90,00",
      tempo: "1 hora",
      garantia: "1 mês"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section Serviços */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Soluções completas em ar condicionado automotivo com qualidade e garantia
          </p>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Serviços Especializados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços para manter o ar condicionado do seu veículo em perfeito estado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicosDetalhados.map((servico, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="text-4xl mb-4">{servico.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{servico.title}</h3>
                  <p className="text-gray-600 mb-4">{servico.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Inclui:</h4>
                    <ul className="space-y-1">
                      {servico.detalhes.map((detalhe, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {detalhe}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-gray-800">Preço</div>
                        <div className="text-blue-600">{servico.preco}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-800">Tempo</div>
                        <div className="text-gray-600">{servico.tempo}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-800">Garantia</div>
                        <div className="text-green-600">{servico.garantia}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4 border-t">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300">
                    Agendar Serviço
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Resolver o Problema do seu Ar Condicionado?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo e agende uma avaliação gratuita do seu veículo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300">
                Solicitar Orçamento
              </button>
            </Link>
            <a href="tel:11999999999">
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300">
                Ligar Agora
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}