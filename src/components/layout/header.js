import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiMapPinLine,
  RiPhoneFill,
  RiWhatsappLine,
} from "@remixicon/react";
import IconLink from "../ui/iconLink";
import Image from "next/image";
import Button from "../ui/button";

export default function Header() {
  return (
    <header>
      <div className="max-w-5xl mx-auto">
        {/* header top */}
        <div className="flex flex-col md:flex-row md:justify-between p-4 gap-2">
          <div className="items-center">
            <p className="text-gray-400 text-xs">
              Funcionamos de Segunda a Sabado de 9h às 18h |{" "}
              <a
                href="#"
                className="font-medium transition-colors duration-150 hover:text-blue-600"
              >
                contato@empresa.com
              </a>
            </p>
          </div>
          <div className="flex gap-4 justify-end hover:cursor-pointer">
            <IconLink color="green">
              <RiWhatsappLine />
            </IconLink>
            <IconLink color="red">
              <RiInstagramLine />
            </IconLink>
            <IconLink color="blue">
              <RiFacebookBoxLine />
            </IconLink>
          </div>
        </div>

        {/* header middle */}
        <div className="flex flex-col md:flex-row md:justify-between items-center p-4 gap-4">
          {/* logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
          {/* phones */}
          <div className="flex gap-4 justify-end hover:cursor-pointer font-light text-xs">
            <div>
              <div className="flex gap-2 items-center text-gray-400">
                <IconLink color="redLine">
                  <RiMapPinLine />
                </IconLink>
                <p>
                  Av. Avenida <br />
                  Bairro - Fortaleza
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center text-gray-400">
                <IconLink color="redLine">
                  <RiPhoneFill />
                </IconLink>
                <p>
                  Entre em contato
                  <br />
                  (85) 9 88969588
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* header bottom */}
        <div className="p-4">
          <div className="flex justify-between">
            <nav>
              <ul>
                <li>
                  <a
                    href="#"
                    className="transition-colors duration-150 hover:text-blue-600"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </nav>
            <Button color="blue">peça um orçamento</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
