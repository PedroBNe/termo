import { useState } from "react";

export default function Teclado() {
  const [input, setInput] = useState("");

  const handleKeyClick = (key: any) => {
    setInput(input + key);
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div>
      <div className="keyboard">

        <div className="row">
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
            <button key={key} onClick={() => handleKeyClick(key)}>
              {key}
            </button>
          ))}
        </div>
        <div className="row">
          <button onClick={handleBackspace} className="del">Del</button>
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
            <button key={key} onClick={() => handleKeyClick(key)}>
              {key}
            </button>
          ))}
        </div>
        <div className="row">
          {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
            <button key={key} onClick={() => handleKeyClick(key)}>
              {key}
            </button>
          ))}
        </div>
      </div>
      <style jsx>{`
        .keyboard {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .row {
          display: flex;
          margin-bottom: 5px;
        }
        button {
          margin: 2px;
          padding: 10px;
          font-size: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f0f0f0;
          cursor: pointer;
        }
        button:active {
          background-color: #ddd;
        }

        input {
          width: 100%;
          max-width: 300px;
          padding: 10px;
          font-size: 18px;
          margin-bottom: 10px;
        }

        @media (max-width: 480px) {
          button {
            padding: 10px;
            font-size: 16px;
            margin: 3px;
            min-width: 10px;
            max-width: 30px;
            color: red
          }
          input {
            font-size: 18px;
            padding: 10px;
          }
        }

        .del{
          padding: 0px;
          margin: 0px;
        }
      `}</style>
    </div>
  );
}
