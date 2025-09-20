import React from "react";
import LogoMindev from "../assets/LogoMindev.png";
import LogoLinkedin from "../assets/linkedinLogo.webp";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white px-10 lg:px-20 py-10 w-full">
      <div className="flex flex-wrap justify-between items-start gap-10">
        {/* Coluna com a logo */}
        <div className="flex-1 min-w-[200px] flex flex-col items-start">
          <img
            src={LogoMindev}
            alt="Logo Mindev"
            className="h-20 w-auto mb-4"
          />
          <p className="text-sm md:text-base text-gray-300">
            Inovando na saúde digital com tecnologia acessível.
          </p>
        </div>

        {/* Coluna contato */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-orange-500 font-semibold text-lg mb-3">Contato</h3>
          <a
            href="mailto:Mindev@gmail.com"
            className="block text-sm md:text-base text-white visited:text-white no-underline hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
          >
            Mindev@gmail.com
          </a>
        </div>

        {/* Coluna redes sociais */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-orange-500 font-semibold text-lg mb-3">
            Redes Sociais
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <img src={LogoLinkedin} alt="LinkedIn" className="w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/hebert-lopes-36a3bb12a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white visited:text-white no-underline hover:underline text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
                aria-label="LinkedIn Hebert"
              >
                Hebert
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img src={LogoLinkedin} alt="LinkedIn" className="w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/marcus-vin%C3%ADcius-vila-nova-da-silva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white visited:text-white no-underline hover:underline text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
                aria-label="LinkedIn Marcus"
              >
                Marcus
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img src={LogoLinkedin} alt="LinkedIn" className="w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/nicolas-ramiro-4a44bb346"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white visited:text-white no-underline hover:underline text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
                aria-label="LinkedIn Nicolas"
              >
                Nicolas
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Linha de direitos reservados */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mindev. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
