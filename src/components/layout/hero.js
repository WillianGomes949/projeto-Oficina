import { RiCheckLine, RiSnowflakeFill, RiWhatsappFill } from "@remixicon/react";
import Image from "next/image";
import IconNoLink from "../ui/iconNoLink";
import Button from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern - Mais sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
        <Image
          src="/images/topography.svg"
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <RiSnowflakeFill className="text-blue-400" size={20} />
                <span className="text-blue-300 text-sm font-medium">
                  Especialistas em Ar Condicionado Automotivo
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Seu carro com o 
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  {" "}clima{" "}
                </span>
                perfeito
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Instalação, manutenção e reparo especializado. 
                <span className="text-blue-300 font-medium"> Garantia de qualidade</span> e atendimento rápido para seu veículo.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/5585999999999?text=Queria%20saber%20mais" target="_blank">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <RiWhatsappFill className="mr-2" size={20} />
                  Orçamento Grátis
                </Button>
              </Link>
              <Link href="/servicos">
                <Button 
                  variant='secondary'
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Nossos Serviços
                </Button>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {[
                { text: "Garantia Total", icon: <RiCheckLine /> },
                { text: "Orçamento Grátis", icon: <RiCheckLine /> },
                { text: "Peças Originais", icon: <RiCheckLine /> },
                { text: "Atendimento Rápido", icon: <RiCheckLine /> }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-200">
                    <RiCheckLine className="text-green-400" size={16} />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-200">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div className="relative">
              {/* Efeito de brilho sutil */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl" />
              
              {/* Container da imagem */}
              <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <Image
                  src="/images/car2.png"
                  alt="Carro com ar condicionado"
                  width={600}
                  height={600}
                  className="relative z-10 transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}