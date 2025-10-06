import React, { useState, useEffect } from "react";
import Button from "./button";
import { RiArrowUpLine } from "@remixicon/react";

const StartButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll da página
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          type="button"
          variant="secondary"
          size="sm"  
          fullWidth={false}
          rounded={false}
          className="fixed bottom-6 right-6 w-12 h-12 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 z-50 animate-fade-in"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <RiArrowUpLine/>
        </Button>
      )}
    </>
  );
};

export default StartButton;
