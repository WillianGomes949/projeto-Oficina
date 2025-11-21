"use client"
import React, { useState, useEffect } from "react";
import Button from "./button";
import { RiArrowUpLine } from "@remixicon/react";

const StartButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
      isVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
    }`}>
      <Button
        type="button"
        variant="primary"
        size="md"
        fullWidth={false}
        rounded="full"
        className={`
          w-14 h-14 
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-out
          ${isHovered ? 'scale-110' : 'scale-100'}
          bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
        `}
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Voltar ao topo"
      >
        <RiArrowUpLine 
          className={`transition-transform duration-300 ${
            isHovered ? '-translate-y-0.5' : 'translate-y-0'
          }`} 
          size={20} 
        />
      </Button>
      
      {/* Tooltip */}
      <div className={`
        absolute right-full mr-3 top-1/2 transform -translate-y-1/2
        bg-slate-900 text-white text-sm px-3 py-2 rounded-lg
        transition-all duration-300 ease-out
        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}
        whitespace-nowrap
        shadow-lg
      `}>
        Voltar ao topo
        <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2">
          <div className="w-2 h-2 bg-slate-900 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default StartButton;