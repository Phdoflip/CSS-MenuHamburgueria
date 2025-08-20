import { useState } from "react";
import "./App.css";

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className={`menu${menuAberto ? " menu-aberto" : ""}`}>
      <div
        className="menu-hamburguer"
        onClick={() => setMenuAberto( !menuAberto)}
        aria-label="Abrir menu"
      >
        <span />
        <span />
        <span />
      </div>
      <ul>
        <li>Início</li>
        <li>Serviços</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}