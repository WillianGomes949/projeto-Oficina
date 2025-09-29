'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AC</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800">ClimaAuto</h1>
              <p className="text-sm text-blue-600">Ar Condicionado Veicular</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Início</Link>
            <Link href="/servicos" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600 font-medium">Sobre</Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600 font-medium">Contato</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contato">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300">
                Orçamento Grátis
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Início</Link>
              <Link href="/servicos" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</Link>
              <Link href="/sobre" className="text-gray-700 hover:text-blue-600 font-medium">Sobre</Link>
              <Link href="/contato" className="text-gray-700 hover:text-blue-600 font-medium">Contato</Link>
              <Link href="/contato">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 w-full">
                  Orçamento Grátis
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}