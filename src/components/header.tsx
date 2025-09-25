import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react"; // ícones hamburguer e fechar
import LogoMindev from "../assets/LogoMindev.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Quem Somos", path: "/quem-somos" },
    { name: "FAQ", path: "/faq" },
    { name: "Proposta", path: "/proposta" },
    { name: "Contato", path: "/contato" },
    { name: "Consulta", path: "/consulta" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-800 flex items-center justify-center z-20 shadow-md">
      {/* Container */}
      <div className="flex flex-col items-center justify-center py-4 md:flex-row md:justify-between md:h-[120px] md:px-10">
        {/* Logo */}
        <img
          src={LogoMindev}
          alt="Logo Mindev"
          className="h-[70px] cursor-pointer mb-3 md:mb-0"
          onClick={() => navigate("/")}
        />

        {/* Menu hamburguer (mobile) */}
        <button
          className="md:hidden flex items-center justify-center w-15 h-15 text-white !bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Links desktop */}
        <nav className="hidden md:flex gap-10">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`text-lg md:text-xl transition-colors !bg-transparent ${
                location.pathname === link.path
                  ? "text-orange-500 font-semibold"
                  : "text-white hover:text-orange-400"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Sidebar (mobile) */}
      <nav
        className={`fixed top-0 left-0 h-full w-2/3 bg-neutral-900 shadow-lg transform transition-transform duration-300 z-30 md:hidden flex flex-col items-center pt-24 gap-6 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <button
            key={link.path}
            onClick={() => {
              navigate(link.path);
              setIsOpen(false);
            }}
            className={`text-lg transition-colors !bg-transparent ${
              location.pathname === link.path
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}