import {
  RiInstagramLine,
  RiMailLine,
  RiMapLine,
  RiPhoneLine,
  RiSnowflakeFill,
  RiTelegramLine,
  RiWhatsappLine,
} from "@remixicon/react";
import MyLink from "../ui/myLink";
import IconNoLink from "../ui/iconNoLink";
import IconLink from "../ui/iconLink";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <MyLink href="/" className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  <RiSnowflakeFill />
                </span>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-orange-500">ClimaAuto</h1>
                <p className="text-sm text-blue-600">
                  Ar Condicionado Veicular
                </p>
              </div>
            </MyLink>
            <p className="text-gray-400">
              Especialistas em ar condicionado automotivo há mais de 10 anos,
              oferecendo qualidade e garantia em todos os serviços.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Manutenção Preventiva
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Diagnóstico Eletrônico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Instalação Completa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Recarga de Gás
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Reparo de Compressores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex gap-4">
                <IconNoLink size="sm" color="gray">
                  <RiPhoneLine />
                </IconNoLink>
                <p> (11) 9999-9999</p>
              </div>
              <div className="flex gap-4">
                <IconNoLink size="sm" color="gray">
                  <RiMailLine />
                </IconNoLink>
                <p>contato@climauto.com.br</p>
              </div>
              <div className="flex gap-4">
                <IconNoLink size="sm" color="gray">
                  <RiMapLine />
                </IconNoLink>
                <p>Rua Exemplo, 123 - São Paulo, SP</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <IconLink color="gray" size="md" href="https://wa.me/5585999999999?text=Queria%20saber%20mais" target="_blank">
                <RiWhatsappLine />
              </IconLink>
              <IconLink color="gray" size="md" href="https://www.instagram.com/" target="_blank">
                <RiInstagramLine />
              </IconLink>
              <IconLink color="gray" size="md" href="https://web.telegram.org/" target="_blank">
                <RiTelegramLine />
              </IconLink>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 ClimaAuto - Ar Condicionado Veicular. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
