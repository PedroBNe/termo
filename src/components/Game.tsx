"use client";

import React, { useState, useEffect } from "react";

interface GameProps {
  palavraCerta: string;
  input: string;
  resetInput: () => void; // Uma função para resetar o input após cada tentativa
}

export const Game = ({ palavraCerta, input, resetInput }: GameProps) => {
  const [tentativas, setTentativas] = useState<string[][]>([
    ["", "", "", "", ""], // Primeira tentativa
    ["", "", "", "", ""], // Segunda tentativa
    ["", "", "", "", ""], // Terceira tentativa
    ["", "", "", "", ""], // Quarta tentativa
    ["", "", "", "", ""], // Quinta tentativa
    ["", "", "", "", ""], // Sexta tentativa
  ]);
  const [tentativaAtual, setTentativaAtual] = useState<number>(0);
  const [letrasAtuais, setLetrasAtuais] = useState<string[]>(["", "", "", "", ""]);

  // Atualiza as letras da tentativa atual conforme o input
  useEffect(() => {
    if (input.length <= 5) {
      const novaTentativa = [...letrasAtuais];
      for (let i = 0; i < input.length; i++) {
        novaTentativa[i] = input[i].toUpperCase();
      }
      setLetrasAtuais(novaTentativa);
    }
  }, [input]);

  // Submeter a tentativa depois que as letrasAtuais estiverem completamente atualizadas
  useEffect(() => {
    // Somente submeter a tentativa após garantir que `letrasAtuais` foi atualizado
    if (input.length === 5 && letrasAtuais.every((letra) => letra !== "")) {
      const novasTentativas = [...tentativas];
      novasTentativas[tentativaAtual] = [...letrasAtuais]; // Salva as letras da tentativa atual

      setTentativas(novasTentativas); // Atualiza o array de tentativas
      setTentativaAtual((prev) => prev + 1); // Vai para a próxima tentativa
      setLetrasAtuais(["", "", "", "", ""]); // Reseta as letras da tentativa atual
      resetInput(); // Reseta o input
    }
  }, [letrasAtuais]); // Monitorar mudanças em letrasAtuais

  return (
    <div className="boxContainerGame">
      {/* Exibe o valor do input como referência */}
      <div>Input: {input}</div>

      {tentativas.map((tentativa, index) => (
        <div key={index} className="containerGame">
          {tentativa.map((letra, i) => (
            <div
              key={i}
              className={`games editGame ${index === tentativaAtual ? "activeGame" : ""}`}
            >
              {/* Exibe a letra ou deixa o campo vazio */}
              {index === tentativaAtual ? letrasAtuais[i] : letra}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
