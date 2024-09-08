"use client"

import { Game } from "@/components/Game";
import Teclado from "@/components/Teclado";
import { useState } from "react";

export default function Primeira() {

  const [input, setInput] = useState<string>("");

  // Função chamada quando uma tecla é clicada no teclado virtual
  const handleKeyClick = (key: string) => {
    if (input.length < 5) {
      setInput((prev) => prev + key); // Adiciona a tecla clicada ao input
    }
  };

  // Função chamada quando o backspace é clicado no teclado virtual
  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1)); // Remove o último caractere do input
  };

  // Função passada para o componente Game para resetar o input
  const resetInput = () => {
    setInput(""); // Limpa o input
  };

  return (
    <div>
      <Game palavraCerta="LINDA" input={input} caminho="/palavras/quarta" resetInput={resetInput} />
      <Teclado
        handleKeyClick={handleKeyClick}
        handleBackspace={handleBackspace}
      />
    </div>
  )
}