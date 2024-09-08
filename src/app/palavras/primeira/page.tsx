"use client"

import { Game } from "@/components/Game";
import Teclado from "@/components/Teclado";
import { useState } from "react";

export default function Primeira() {

  const [input, setInput] = useState("");

  // Função para atualizar o input a partir do Teclado
  const handleKeyClick = (key: string) => {
    setInput((prevInput) => prevInput + key);
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div>
      <Game palavraCerta="TESTE" input={input} />
      <Teclado
        handleKeyClick={handleKeyClick}
        handleBackspace={handleBackspace}
      />
    </div>
  )
}