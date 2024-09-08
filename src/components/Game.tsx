"use client";

import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

interface GameProps {
  palavraCerta: string;
  input: string;
  caminho: string; // Caminho para a próxima palavra
  resetInput: () => void; // Uma função para resetar o input após cada tentativa
}

export const Game = ({ palavraCerta, input, caminho, resetInput }: GameProps) => {

  const [tentativas, setTentativas] = useState<string[][]>([
    ["", "", "", "", ""], // Primeira tentativa
    ["", "", "", "", ""], // Segunda tentativa
    ["", "", "", "", ""], // Terceira tentativa
    ["", "", "", "", ""], // Quarta tentativa
    ["", "", "", "", ""], // Quinta tentativa
    ["", "", "", "", ""], // Sexta tentativa
  ]);
  const [feedback, setFeedback] = useState<string[][]>([
    ["", "", "", "", ""], // Feedback da primeira tentativa
    ["", "", "", "", ""], // Feedback da segunda tentativa
    ["", "", "", "", ""], // Feedback da terceira tentativa
    ["", "", "", "", ""], // Feedback da quarta tentativa
    ["", "", "", "", ""], // Feedback da quinta tentativa
    ["", "", "", "", ""], // Feedback da sexta tentativa
  ]);

  const [tentativaAtual, setTentativaAtual] = useState<number>(0);
  const [letrasAtuais, setLetrasAtuais] = useState<string[]>(["", "", "", "", ""]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o estado do modal

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

  // Função para verificar a tentativa com a palavraCerta e gerar feedback
  const verificarTentativa = () => {
    const novaTentativa = [...letrasAtuais];
    const novoFeedback = ["", "", "", "", ""]; // Feedback para a tentativa atual

    // Percorre as letras da tentativa e compara com a palavra correta
    for (let i = 0; i < 5; i++) {
      if (novaTentativa[i] === palavraCerta[i].toUpperCase()) {
        // Letra correta e na posição correta
        novoFeedback[i] = "green";
      } else if (palavraCerta.toUpperCase().includes(novaTentativa[i])) {
        // Letra correta, mas na posição errada
        novoFeedback[i] = "yellow";
      } else {
        // Letra incorreta
        novoFeedback[i] = "grey";
      }
    }

    // Se o jogador acertou todas as letras, abre o modal
    if (novaTentativa.join("") === palavraCerta.toUpperCase()) {
      setIsModalOpen(true); // Abre o modal de vitória
    }

    // Atualiza o feedback no estado
    const novoFeedbackGeral = [...feedback];
    novoFeedbackGeral[tentativaAtual] = novoFeedback;
    setFeedback(novoFeedbackGeral);
  };

  // Submeter a tentativa depois que as letrasAtuais estiverem completamente atualizadas
  useEffect(() => {
    if (input.length === 5 && letrasAtuais.every((letra) => letra !== "")) {
      const novasTentativas = [...tentativas];
      novasTentativas[tentativaAtual] = [...letrasAtuais]; // Salva as letras da tentativa atual

      setTentativas(novasTentativas); // Atualiza o array de tentativas

      verificarTentativa(); // Verifica a tentativa contra a palavra correta

      setTentativaAtual((prev) => prev + 1); // Vai para a próxima tentativa
      setLetrasAtuais(["", "", "", "", ""]); // Reseta as letras da tentativa atual
      resetInput(); // Reseta o input
    }
  }, [letrasAtuais]); // Monitorar mudanças em letrasAtuais

  return (
    <div className="boxContainerGame">

      {tentativas.map((tentativa, index) => (
        <div key={index} className="containerGame">
          {tentativa.map((letra, i) => (
            <div
              key={i}
              className={`games editGame ${index === tentativaAtual ? "activeGame" : ""}`}
              style={{ backgroundColor: feedback[index][i] || "transparent" }} // Adiciona feedback de cor
            >
              {/* Exibe a letra ou deixa o campo vazio */}
              {index === tentativaAtual ? letrasAtuais[i] : letra}
            </div>
          ))}
        </div>
      ))}

      {/* Modal de vitória */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Dialog.Panel className="bg-white p-6 rounded shadow-lg text-black">
            <Dialog.Title className="text-lg font-bold">Parabéns meu amorzinho!</Dialog.Title>
            <Link className="mr-4 rounded-xl bg-black text-white font-bold p-4" href={caminho}>Próxima palavra</Link>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Fechar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
