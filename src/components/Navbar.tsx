"use client";

import Image from "next/image"
import Girassol from "@/public/girassol.png"
import Statics from "@/public/statics.svg"
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export const Navbar = () => {

  let [isOpen, setIsOpen] = useState(false);
  let [isStatics, setIsStatics] = useState(false);

  return (
    <nav className="flex w-full justify-around items-center p-2">
      <div className="flex justify-center items-center">
        <button onClick={() => setIsOpen(true)} className="border-solid border-[2px] border-[#B7AEB4] p-1 rounded-md">
          <Image src={Girassol} alt="Logo" width={35} height={35} />
        </button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white p-6 rounded text-black">
              <p>É o seguinte minha gatinha, você precisa</p>
              <p>descobrir a palavra certa em 6 tentativas.</p>
              <p>Depois de cada tentativa, as peças mostram</p>
              <p>o quão perto você está da solução.</p>
              <div className="flex justify-center items-center m-2">
                <button onClick={() => setIsOpen(false)} className="border-black border-solid border rounded-md p-2">Fechar</button>
              </div>
            </div>
          </div>
        </Dialog>
      </div >
      <div>TER AMO</div>
      <div className="">
        <button onClick={() => setIsStatics(true)} className="border-solid border-[2px] border-[#B7AEB4] p-1 rounded-md">
          <Image src={Statics} alt="Logo" width={30} height={30} />
        </button>
        <Dialog open={isStatics} onClose={() => setIsStatics(false)}>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white p-6 rounded text-black">

              <p className="text-center font-bold">Statistica</p>

              <div className="m-4">
                <div>
                  <div>100% Linda</div>
                </div>
                <div>
                  <div>100% Gostosa</div>
                </div>
                <div>
                  <div>100% Divertida</div>
                </div>
              </div>

              <div className="flex justify-center items-center m-2">
                <button onClick={() => setIsStatics(false)} className="border-black border-solid border rounded-md p-2">Fechar</button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </nav >
  )
}