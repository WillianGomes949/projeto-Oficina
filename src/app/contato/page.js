"use client";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import IconNoLink from "@/components/ui/iconNoLink";
import Maps from "@/components/ui/maps";
import MyLink from "@/components/ui/myLink";
import Button from "@/components/ui/button";
import {
  RiMailLine,
  RiPhoneLine,
  RiTimeLine,
  RiMapPinLine,
  RiWhatsappFill,
  RiSendPlaneLine,
  RiArrowRightLine
} from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";
import TitleSection from "@/components/ui/titleSection";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      servico: "",
      mensagem: "",
    });
    setIsSubmitting(false);
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

  const contactInfo = [
    {
      icon: <RiPhoneLine className="text-blue-500" />,
      title: "Telefone",
      content: "(11) 9999-9999",
      subtitle: "WhatsApp disponível",
      href: "tel:11999999999",
      color: "blue",
      label: "WhatsApp"
    },
    {
      icon: <RiMailLine className="text-green-500" />,
      title: "Email",
      content: "contato@climauto.com.br",
      subtitle: "Respondemos em até 2 horas",
      href: "mailto:contato@climauto.com.br",
      color: "green",
      label: "Email"
    },
    {
      icon: <RiMapPinLine className="text-amber-500" />,
      title: "Endereço",
      content: "Rua das Flores, 123 - Jardim Paulista, São Paulo - SP, 01415-000",
      href: "#mapa",
      color: "orange",
      label: "Mapa"
    },
    {
      icon: <RiTimeLine className="text-purple-500" />,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h | Domingo: Fechado",
      href: "#",
      color: "purple",
      label: "Horário"
    }
  ];

  const faqs = [
    {
      pergunta: "Quanto tempo leva para fazer uma recarga de gás?",
      resposta: "O procedimento completo de recarga de gás leva em média 45 minutos, incluindo verificação de vazamentos e teste de performance.",
    },
    {
      pergunta: "Vocês dão garantia nos serviços?",
      resposta: "Sim, oferecemos garantia de até 12 meses dependendo do serviço realizado. A recarga de gás tem garantia de 6 meses, por exemplo.",
    },
    {
      pergunta: "Preciso agendar horário ou posso chegar sem aviso?",
      resposta: "Recomendamos o agendamento para garantir melhor atendimento, mas também atendemos por ordem de chegada conforme disponibilidade.",
    },
    {
      pergunta: "Vocês emitem nota fiscal?",
      resposta: "Sim, emitimos nota fiscal de todos os serviços realizados e fornecemos laudo técnico quando necessário.",
    },
  ];

  return (
    <>

      <TitleSection
        preTitle=" Entre em"
        titleHighlight=" Contato"
        description=" Estamos prontos para atender você e resolver o problema do ar
              condicionado do seu veículo"
        bgImage="/images/topography.svg"
      >
        {/* CTA Buttons */}
        <MyLink href="https://wa.me/5585999999999?text=Queria%20saber%20mais" target="_blank" aria-label="Falar no WhatsApp">
          <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
            <RiWhatsappFill className="mr-2" size={20} />
            Falar no WhatsApp
          </Button>
        </MyLink>
        <MyLink href="#formulario" aria-label="Enviar Mensagem">
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <RiSendPlaneLine className="mr-2" size={20} />
            Enviar Mensagem
          </Button>
        </MyLink>
      </TitleSection>

      {/* Informações de Contato e Formulário */}
      <section className="py-20 bg-slate-50" id="formulario">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Fale Conosco
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Tem alguma dúvida ou precisa de um orçamento? Entre em contato
                  através dos canais abaixo ou preencha o formulário ao lado.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    aria-label={info.label}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md border border-slate-100 hover:border-slate-200 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-slate-700 text-base mb-1">
                        {info.content}
                      </p>
                      {info.subtitle && (
                        <p className="text-slate-500 text-sm">
                          {info.subtitle}
                        </p>
                      )}
                    </div>
                    <RiArrowRightLine className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Solicite um Orçamento
                </h2>
                <p className="text-slate-600">
                  Preencha o formulário e entraremos em contato em até 2 horas
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-700"
                  >
                    <option value="" className="text-slate-400">Selecione o serviço desejado</option>
                    {servicos.map((servico, index) => (
                      <option key={index} value={servico} className="text-slate-700">
                        {servico}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-slate-400 resize-none"
                    placeholder="Descreva o problema ou serviço desejado..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  loading={isSubmitting}
                  icon={RiSendPlaneLine}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  * Campos obrigatórios. Entraremos em contato em até 2 horas úteis.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços e procedimentos
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {faq.pergunta}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section className="py-20 bg-slate-50" id="mapa">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Nossa Localização
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Venha nos visitar e conheça nossa estrutura completa para o seu veículo
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Maps
                lat={-3.73498}
                lng={-38.52669}
                zoom={15}
                height="400px"
                markerText="ClimaAuto - Ar Condicionado Veicular"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}