import React from "react";

interface GameProps {
  palavraCerta: string;
  input: string;
}

export const Game = ({ palavraCerta, input }: GameProps) => {

  return (
    <div className="boxContainerGame">
      <div className="containerGame">
        <div className="games editGame activeGame"></div>
        <div className="games editGame"></div>
        <div className="games editGame"></div>
        <div className="games editGame"></div>
        <div className="games editGame"></div>
      </div>
      <div className="containerGame">
        <div className="games "></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
      </div>
      <div className="containerGame">
        <div className="games "></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
      </div>
      <div className="containerGame">
        <div className="games "></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
      </div>
      <div className="containerGame">
        <div className="games "></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
      </div>
      <div className="containerGame">
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
        <div className="games"></div>
      </div>
    </div>
  )
}