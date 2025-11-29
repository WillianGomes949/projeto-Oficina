import {
  RiInstagramLine,
  RiMailLine,
  RiMapLine,
  RiPhoneLine,
  RiSnowflakeFill,
  RiTelegramLine,
  RiWhatsappLine,
  RiArrowRightUpLine,
} from "@remixicon/react";
import MyLink from "../ui/myLink";
import IconLink from "../ui/iconLink";

export default function Footer() {
  const services = [
    "Manutenção Preventiva",
    "Diagnóstico Eletrônico",
    "Instalação Completa",
    "Recarga de Gás",
    "Reparo de Compressores"
  ];

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Contato", href: "/contato" },
    { name: "Blog", href: "/blog" }
  ];

  const socialLinks = [
    {
      icon: <RiWhatsappLine size={20} />,
      href: "https://wa.me/5585999999999?text=Queria%20saber%20mais",
      label: "WhatsApp"
    },
    {
      icon: <RiInstagramLine size={20} />,
      href: "https://www.instagram.com/",
      label: "Instagram"
    },
    {
      icon: <RiTelegramLine size={20} />,
      href: "https://web.telegram.org/",
      label: "Telegram"
    }
  ];

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 py-12">
          {/* Brand */}
          <div className="space-y-4">
            <MyLink href="/" className="flex items-center group" aria-label="Logo">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <RiSnowflakeFill className="text-white" size={24} />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-white">ClimaAuto</h1>
                <p className="text-sm text-slate-400">Ar Condicionado Veicular</p>
              </div>
            </MyLink>
            <p className="text-slate-400 leading-relaxed">
              Especialistas em ar condicionado automotivo há mais de 10 anos, 
              oferecendo qualidade e garantia em todos os serviços.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
                    aria-label={service}
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={16} />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <MyLink 
                    href={link.href}
                    aria-label={link.name}
                    className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <RiArrowRightUpLine className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={16} />
                    {link.name}
                  </MyLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-6 text-white">Contato</h4>
              <div className="space-y-4">
                <a 
                  href="tel:11999999999" 
                  aria-label="Telefone"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200">
                    <RiPhoneLine size={18} />
                  </div>
                  <span>(11) 9999-9999</span>
                </a>
                <a 
                  href="mailto:contato@climauto.com.br" 
                  aria-label="Email"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-200">
                    <RiMailLine size={18} />
                  </div>
                  <span>contato@climauto.com.br</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-200">
                    <RiMapLine size={18} />
                  </div>
                  <span>Rua Exemplo, 123 - São Paulo, SP</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-semibold text-white mb-4">Siga-nos</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <IconLink
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-300 hover:scale-105"
                    size="md"
                  >
                    {social.icon}
                  </IconLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; 2024 ClimaAuto - Ar Condicionado Veicular. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Política de Privacidade">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Termos de Uso">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}