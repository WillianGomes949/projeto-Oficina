import {
  RiMailSendLine,
  RiMapLine,
  RiPhoneFill,
  RiTimeLine,
} from "@remixicon/react";
import IconNoLink from "../ui/iconNoLink";

export default function Contact() {
  return (
    <>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-xl text-gray-300 mb-8">
                Pronto para resolver o problema do ar condicionado do seu
                veículo? Fale conosco agora mesmo.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <IconNoLink size="md">
                    <span>
                      <RiPhoneFill />
                    </span>
                  </IconNoLink>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-300">(11) 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <IconNoLink size="md">
                    <span>
                      <RiMailSendLine />
                    </span>
                  </IconNoLink>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">contato@climauto.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <IconNoLink size="md">
                    <span>
                      <RiMapLine />
                    </span>
                  </IconNoLink>
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-300">
                      Rua Exemplo, 123 - São Paulo, SP
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <IconNoLink size="md">
                    <span>
                      <RiTimeLine />
                    </span>
                  </IconNoLink>
                  <div>
                    <h4 className="font-semibold">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-gray-300">
                      Seg - Sex: 8h às 18h | Sáb: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Solicite um Orçamento
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Seu Telefone"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Selecione o Serviço</option>
                  <option>Manutenção Preventiva</option>
                  <option>Diagnóstico Eletrônico</option>
                  <option>Instalação Completa</option>
                  <option>Recarga de Gás</option>
                  <option>Outro</option>
                </select>
                <textarea
                  placeholder="Descreva o problema ou serviço desejado..."
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition duration-300"
                >
                  Enviar Solicitação
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
