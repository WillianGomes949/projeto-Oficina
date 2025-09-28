import React, { useState } from "react";
import Button from "./Button";

export default function Form() {
  // Estado para armazenar todos os dados do formulário em um único objeto
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Função para atualizar o estado quando o usuário digita em qualquer campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    console.log("Dados do formulário enviados:", formData);
    alert("Formulário enviado! Verifique o console para ver os dados.");
    // Aqui você adicionaria a lógica para enviar os dados para uma API
  };

  // Classes de estilo reutilizáveis para os inputs
  const inputStyle =
    "w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow";

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Entre e Contato
          </h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-500">
            Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus.
            Saepe convallis nostra. Ducimus convallis necessitatibus alias,
            bibendum elit nemo.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Linha 1 */}
            <input
              type="text"
              name="name"
              placeholder="Your Name."
              value={formData.name}
              onChange={handleChange}
              className={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email."
              value={formData.email}
              onChange={handleChange}
              className={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number."
              value={formData.phone}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>
          <div>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`${inputStyle} resize-none h-40 `}
            ></textarea>
          </div>
          <Button type="submit" color="blue">Enviar</Button>
        </form>
      </div>
    </section>
  );
}
