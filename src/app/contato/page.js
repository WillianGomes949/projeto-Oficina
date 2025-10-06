"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import IconNoLink from "@/components/ui/iconNoLink";
import Maps from "@/components/ui/maps";
import MyLink from "@/components/ui/myLink";
import { RiMailLine, RiPhoneLine, RiTimeLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      servico: "",
      mensagem: "",
    });
  };

  const servicos = [
    "Manutenção Preventiva",
    "Diagnóstico Eletrônico",
    "Instalação Completa",
    "Recarga de Gás",
    "Reparo de Compressores",
    "Higienização Completa",
    "Outro",
  ];

  return (
    <>
      <Header />

      {/* Hero Section Contato */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/topography.svg" // ou URL externa
            alt="Background hero"
            fill
            className="object-cover filter grayscale "
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos prontos para atender você e resolver o problema do ar
            condicionado do seu veículo
          </p>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Fale Conosco
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tem alguma dúvida ou precisa de um orçamento? Entre em contato
                através dos canais abaixo ou preencha o formulário ao lado.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <IconNoLink size="lg" color="red">
                    <RiPhoneLine />
                  </IconNoLink>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Telefone
                    </h3>
                    <p className="text-gray-600 text-lg">(11) 9999-9999</p>
                    <MyLink
                      href="https://wa.me/5585999999999?text=Queria%20saber%20mais"
                      target="_blank"
                    >
                      WhatsApp disponível
                    </MyLink>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <IconNoLink size="lg" color="green">
                    <RiMailLine />
                  </IconNoLink>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 text-lg">
                      contato@climauto.com.br
                    </p>
                    <p className="text-gray-500">Respondemos em até 2 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <IconNoLink size="lg">
                    <RiPhoneLine />
                  </IconNoLink>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Endereço
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Rua das Flores, 123 - Jardim Paulista
                      <br />
                      São Paulo - SP, 01415-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <IconNoLink size="lg" color="gray">
                    <RiTimeLine />
                  </IconNoLink>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Formulário de Contato */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Solicite um Orçamento
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione o serviço desejado</option>
                    {servicos.map((servico, index) => (
                      <option key={index} value={servico}>
                        {servico}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descreva o problema ou serviço desejado..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg transition duration-300"
                >
                  Enviar Mensagem
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Entraremos em contato em até 2 horas
                  úteis.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e procedimentos
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                pergunta: "Quanto tempo leva para fazer uma recarga de gás?",
                resposta:
                  "O procedimento completo de recarga de gás leva em média 45 minutos, incluindo verificação de vazamentos e teste de performance.",
              },
              {
                pergunta: "Vocês dão garantia nos serviços?",
                resposta:
                  "Sim, oferecemos garantia de até 12 meses dependendo do serviço realizado. A recarga de gás tem garantia de 6 meses, por exemplo.",
              },
              {
                pergunta: "Preciso agendar horário ou posso chegar sem aviso?",
                resposta:
                  "Recomendamos o agendamento para garantir melhor atendimento, mas também atendemos por ordem de chegada conforme disponibilidade.",
              },
              {
                pergunta: "Vocês emitem nota fiscal?",
                resposta:
                  "Sim, emitimos nota fiscal de todos os serviços realizados e fornecemos laudo técnico quando necessário.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {faq.pergunta}
                </h3>
                <p className="text-gray-600">{faq.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mapa */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Nossa Localização
          </h3>
          <div className="rounded-lg h-auto flex items-center justify-center w-auto">
            <Maps lat={-3.73498} lng={-38.52669} zoom={120} className="mb-4" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
