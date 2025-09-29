// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative h-96 md:h-screen overflow-hidden">
//       {/* Imagem de background */}
//       <Image
//         src="/images/car.png" // ou URL externa
//         alt="Background hero"
//         fill
//         className="object-cover filter grayscale "
//         priority
//       />
//       <div className="absolute inset-0 bg-blue-950/80"></div>

//       {/* Conteúdo sobre a imagem */}
//       <div className="relative flex items-center justify-center h-full w-full max-w-screen-xl mx-auto">
//         <div className="text-center text-white w-[90%] bg-amber-500">
//           <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4">
//             <h1 className="text-4xl font-bold">Seu Título</h1>
//             <p className="mt-4 text-xl">Subtítulo ou descrição</p>

//             <Image
//               src="/images/carview.png" // ou URL externa
//               alt="Background hero"
//               width={600}
//               height={600}
//               className="lg:absolute -top-50 right-0"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/topography.svg" // ou URL externa
          alt="Background hero"
          fill
          className="object-cover filter grayscale "
          priority
        />
        
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ar Condicionado <span className="text-blue-300">Automotivo</span>{" "}
              Profissional
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Instalação, Manutenção e Reparo Especializado para seu Veículo
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
                Nossos Serviços
              </button>
            </div>

            {/* Features List */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-blue-100">Garantia</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-blue-100">Orçamento Grátis</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-blue-100">Peças Originais</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-blue-100">Atendimento Rápido</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform rotate-3">
                <div className="bg-white rounded-xl p-6 transform -rotate-3 shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">❄️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Serviço Express
                    </h3>
                    <p className="text-gray-600">Manutenção em até 2 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
