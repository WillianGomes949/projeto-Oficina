// import {
//   RiFacebookBoxLine,
//   RiInstagramLine,
//   RiMapPinLine,
//   RiPhoneFill,
//   RiWhatsappLine,
// } from "@remixicon/react";
// import IconLink from "../ui/iconLink";
// import Image from "next/image";
// import Button from "../ui/button";
// import MyLink from "../ui/myLink";

// export default function Header() {
//   return (
//     <header>
//       <div className="md:w-[90%] mx-auto items-center">
//         {/* header top */}
//         <div className="flex flex-col md:flex-row md:justify-between p-4 gap-2">
//           <div className="items-center">
//             <p className="text-gray-400 text-xs">
//               Funcionamos de Segunda a Sabado de 9h às 18h |{" "}
//               <MyLink url="#">contato@empresa.com</MyLink>
//             </p>
//           </div>
//           <div className="hidden sm:block md:flex gap-4 justify-end hover:cursor-pointer">
//             <IconLink color="gray">
//               <RiWhatsappLine />
//             </IconLink>
//             <IconLink color="gray">
//               <RiInstagramLine />
//             </IconLink>
//             <IconLink color="gray">
//               <RiFacebookBoxLine />
//             </IconLink>
//           </div>
//         </div>

//         {/* header middle */}
//         <div className="flex flex-col md:flex-row md:justify-between items-center p-4 gap-4">
//           {/* logo */}
//           <div>
//             <Image
//               src="/images/logo.png"
//               alt="Picture of the author"
//               width={100}
//               height={100}
//             />
//           </div>
//           {/* phones */}
//           <div className="flex gap-4 justify-end hover:cursor-pointer font-light text-xs">
//             <div>
//               <div className="flex gap-2 items-center text-gray-400">
//                 <IconLink color="redLine">
//                   <RiMapPinLine />
//                 </IconLink>
//                 <p>
//                   Av. Avenida <br />
//                   Bairro - Fortaleza
//                 </p>
//               </div>
//             </div>
//             <div>
//               <div className="flex gap-2 items-center text-gray-400">
//                 <IconLink color="redLine">
//                   <RiPhoneFill />
//                 </IconLink>
//                 <p>
//                   Entre em contato
//                   <br />
//                   (85) 9 88969588
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* header bottom */}
//         <div className="p-4">
//           <div className="flex justify-between items-center">
//             <nav>
//               <ul>
//                 <li>
//                   <MyLink url="#">início</MyLink>
//                 </li>
//               </ul>
//             </nav>
//             <Button color="blue">peça um orçamento</Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }




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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300">
              Orçamento Grátis
            </button>
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 w-full">
                Orçamento Grátis
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}