import { useNavigate, useLocation } from "react-router-dom";
import LogoMindev from "../assets/LogoMindev.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", path: "/home" },
    { name: "Quem Somos", path: "/quem-somos" },
    { name: "FAQ", path: "/faq" },
    { name: "Proposta", path: "/proposta" },
    { name: "Contato", path: "/contato" },
    { name: "Consulta", path: "/consulta" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-800 h-[120px] flex items-center justify-center z-20 shadow-md">
      {/* Logo */}
      <img
        src={LogoMindev}
        alt="Logo Mindev"
        className="absolute left-10 h-[80px] cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Links */}
      <nav className="flex gap-10">
        {links.map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`text-lg md:text-xl transition-colors ${
              location.pathname === link.path
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"                                                                       
            }`}
          >
            {link.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
