import {
  RiMailSendLine,
  RiMapLine,
  RiPhoneFill,
  RiTimeLine,
  RiArrowRightLine,
} from "@remixicon/react";
import IconNoLink from "../ui/iconNoLink";

export default function Contact() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Entre em{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Contato
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Pronto para resolver o problema do ar condicionado do seu veículo? 
                Fale conosco agora mesmo.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: <RiPhoneFill className="text-blue-400" />,
                  title: "Telefone",
                  content: "(11) 9999-9999",
                  href: "tel:11999999999"
                },
                {
                  icon: <RiMailSendLine className="text-green-400" />,
                  title: "Email",
                  content: "contato@climauto.com.br",
                  href: "mailto:contato@climauto.com.br"
                },
                {
                  icon: <RiMapLine className="text-amber-400" />,
                  title: "Endereço",
                  content: "Rua Exemplo, 123 - São Paulo, SP",
                  href: "#"
                },
                {
                  icon: <RiTimeLine className="text-purple-400" />,
                  title: "Horário de Funcionamento",
                  content: "Seg - Sex: 8h às 18h | Sáb: 8h às 12h",
                  href: "#"
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-300">
                      {item.content}
                    </p>
                  </div>
                  <RiArrowRightLine className="text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Solicite um Orçamento
              </h3>
              <p className="text-slate-300">
                Preencha o formulário e entraremos em contato em até 2 horas
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Seu Telefone"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" aria-label=''>
                  <option className="text-slate-300">Selecione o Serviço</option>
                  <option className="text-slate-900">Manutenção Preventiva</option>
                  <option className="text-slate-900">Diagnóstico Eletrônico</option>
                  <option className="text-slate-900">Instalação Completa</option>
                  <option className="text-slate-900">Recarga de Gás</option>
                  <option className="text-slate-900">Outro</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Descreva o problema ou serviço desejado..."
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}