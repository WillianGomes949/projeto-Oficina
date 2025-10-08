'use client'
import { useState } from 'react';

import { RiMenuLine, RiSnowflakeFill } from '@remixicon/react';
import Button from '../ui/button';
import MyLink from '../ui/myLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <MyLink href="/" className="flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg"><RiSnowflakeFill/></span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-orange-500">ClimaAuto</h1>
              <p className="text-sm text-blue-600">Ar Condicionado Veicular</p>
            </div>
          </MyLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <MyLink href="/" className="text-gray-700 hover:text-blue-600 font-medium">Início</MyLink>
            <MyLink href="/servicos" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</MyLink>
            <MyLink href="/sobre" className="text-gray-700 hover:text-blue-600 font-medium">Sobre</MyLink>
            <MyLink href="/contato" className="text-gray-700 hover:text-blue-600 font-medium">Contato</MyLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MyLink href="https://wa.me/5585999999999?text=Queria%20saber%20mais" target="_blank">
              <Button>
                Orçamento Grátis
              </Button>
            </MyLink>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden" fullWidth={false}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RiMenuLine/>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <MyLink href="/" className="text-gray-700 hover:text-blue-600 font-medium">Início</MyLink>
              <MyLink href="/servicos" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</MyLink>
              <MyLink href="/sobre" className="text-gray-700 hover:text-blue-600 font-medium">Sobre</MyLink>
              <MyLink href="/contato" className="text-gray-700 hover:text-blue-600 font-medium">Contato</MyLink>
              <MyLink href="/contato">
                <Button>
                  Orçamento Grátis
                </Button>
              </MyLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}