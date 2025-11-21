"use client";
import React, { useState } from "react";
import Button from "../ui/button";
import { RiMailSendLine, RiCheckboxCircleLine } from "@remixicon/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Dados do formulário enviados:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const inputStyle = `
    w-full px-4 py-3 
    bg-slate-50 border border-slate-200 
    rounded-xl 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    transition-all duration-200
    placeholder-slate-400
    hover:border-slate-300
  `;

  if (isSubmitted) {
    return (
      <div className="rounded-2xl p-8 text-center border border-green-200 bg-green-50">
        <RiCheckboxCircleLine className="mx-auto text-green-500 mb-4" size={48} />
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
        <p className="text-slate-600">Entraremos em contato em breve.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Envie sua Mensagem
        </h3>
        <p className="text-slate-600">
          Preencha o formulário abaixo e entraremos em contato o mais rápido possível.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyle}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyle}
            />
          </div>
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Seu telefone"
            value={formData.phone}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Sua mensagem..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputStyle} resize-none`}
          />
        </div>

        <Button
          type="submit"
          loading={isSubmitting}
          icon={RiMailSendLine}
          className="w-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </div>
  );
}