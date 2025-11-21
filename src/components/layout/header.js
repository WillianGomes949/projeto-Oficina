'use client'
import { useState, useEffect } from 'react';
import { RiMenuLine, RiSnowflakeFill, RiCloseLine, RiWhatsappFill } from '@remixicon/react';
import Button from '../ui/button';
import MyLink from '../ui/myLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <MyLink 
            href="/" 
            className="flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
              <RiSnowflakeFill className="text-white text-lg" />
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                ClimaAuto
              </h1>
              <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors duration-200">
                Ar Condicionado Veicular
              </p>
            </div>
          </MyLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Início' },
              { href: '/servicos', label: 'Serviços' },
              { href: '/sobre', label: 'Sobre' },
              { href: '/contato', label: 'Contato' }
            ].map((item) => (
              <MyLink
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium text-sm rounded-lg hover:bg-slate-50 transition-all duration-200"
              >
                {item.label}
              </MyLink>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <MyLink 
              href="https://wa.me/5585999999999?text=Queria%20saber%20mais" 
              target="_blank"
              className="flex items-center"
            >
              <Button className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-sm hover:shadow-md transition-all duration-300">
                <RiWhatsappFill className="mr-2" size={18} />
                Orçamento Grátis
              </Button>
            </MyLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <RiCloseLine className="text-slate-700" size={24} />
            ) : (
              <RiMenuLine className="text-slate-700" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 pb-4 border-t border-slate-100' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-2 pt-4">
            {[
              { href: '/', label: 'Início' },
              { href: '/servicos', label: 'Serviços' },
              { href: '/sobre', label: 'Sobre' },
              { href: '/contato', label: 'Contato' }
            ].map((item) => (
              <MyLink
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-slate-700 hover:text-blue-600 font-medium rounded-lg hover:bg-slate-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </MyLink>
            ))}
            
            <div className="pt-2">
              <MyLink 
                href="https://wa.me/5585999999999?text=Queria%20saber%20mais" 
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <Button className="w-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                  <RiWhatsappFill className="mr-2" size={18} />
                  Orçamento Grátis
                </Button>
              </MyLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}