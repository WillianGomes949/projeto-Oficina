
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">AC</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">ClimaAuto</h3>
                <p className="text-sm text-gray-400">Ar Condicionado Veicular</p>
              </div>
            </div>
            <p className="text-gray-400">
              Especialistas em ar condicionado automotivo há mais de 10 anos, 
              oferecendo qualidade e garantia em todos os serviços.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Manutenção Preventiva</a></li>
              <li><a href="#" className="hover:text-white transition">Diagnóstico Eletrônico</a></li>
              <li><a href="#" className="hover:text-white transition">Instalação Completa</a></li>
              <li><a href="#" className="hover:text-white transition">Recarga de Gás</a></li>
              <li><a href="#" className="hover:text-white transition">Reparo de Compressores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Início</a></li>
              <li><a href="#" className="hover:text-white transition">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition">Serviços</a></li>
              <li><a href="#" className="hover:text-white transition">Contato</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 (11) 9999-9999</p>
              <p>📧 contato@climauto.com.br</p>
              <p>📍 Rua Exemplo, 123 - São Paulo, SP</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                💼
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ClimaAuto - Ar Condicionado Veicular. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}