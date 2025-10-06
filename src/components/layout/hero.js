import { RiCheckLine, RiSnowflakeFill } from "@remixicon/react";
import Image from "next/image";
import IconNoLink from "../ui/iconNoLink";
import Button from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/topography.svg"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 flex flex-wrap">
              Ar Condicionado <span className="text-blue-300">Automotivo</span>
              Profissional
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Instalação, Manutenção e Reparo Especializado para seu Veículo
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                <Link href="/contato">Orçamento Grátis</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/servicos">Nossos Serviços</Link>
              </Button>
            </div>

            {/* Features List */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4">
                <IconNoLink color="green">
                  <RiCheckLine />
                </IconNoLink>
                <span className="text-blue-100">Garantia</span>
              </div>
              <div className="flex items-center gap-4">
                <IconNoLink color="green">
                  <RiCheckLine />
                </IconNoLink>
                <span className="text-blue-100">Orçamento Grátis</span>
              </div>
              <div className="flex items-center gap-4">
                <IconNoLink color="green">
                  <RiCheckLine />
                </IconNoLink>
                <span className="text-blue-100">Peças Originais</span>
              </div>
              <div className="flex items-center gap-4">
                <IconNoLink color="green">
                  <RiCheckLine />
                </IconNoLink>
                <span className="text-blue-100">Atendimento Rápido</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform rotate-3">
                <div className="bg-white rounded-xl p-6 transform -rotate-3 shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">
                        <RiSnowflakeFill />
                      </span>
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
