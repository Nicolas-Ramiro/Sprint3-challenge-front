import React from "react";
import LogoMindev from "../assets/LogoMindev.png";
import LogoLinkedin from "../assets/linkedinLogo.webp";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white px-6 sm:px-10 lg:px-20 py-8 sm:py-10 w-full">
      {/* Conteúdo em colunas responsivas */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between items-center lg:items-start gap-8 sm:gap-10 text-center lg:text-left">
        {/* Coluna com a logo */}
        <div className="flex-1 min-w-[200px] flex flex-col items-center lg:items-start">
          <img
            src={LogoMindev}
            alt="Logo Mindev"
            className="h-16 sm:h-20 w-auto mb-4"
          />
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xs">
            Inovando na saúde digital com tecnologia acessível.
          </p>
        </div>

        {/* Coluna contato */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-orange-500 font-semibold text-base sm:text-lg mb-3">
            Contato
          </h3>
          <a
            href="mailto:Mindev@gmail.com"
            className="block text-xs sm:text-sm md:text-base !text-white visited:text-white no-underline hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
          >
            Mindev@gmail.com
          </a>
        </div>

        {/* Coluna redes sociais */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-orange-500 font-semibold text-base sm:text-lg mb-3">
            Redes Sociais
          </h3>
          <div className="space-y-3">
            {[
              {
                name: "Hebert",
                url: "https://www.linkedin.com/in/hebert-lopes-36a3bb12a",
              },
              {
                name: "Marcus",
                url: "https://www.linkedin.com/in/marcus-vin%C3%ADcius-vila-nova-da-silva",
              },
              {
                name: "Nicolas",
                url: "https://www.linkedin.com/in/nicolas-ramiro-4a44bb346",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="flex justify-center lg:justify-start items-center gap-2"
              >
                <img
                  src={LogoLinkedin}
                  alt="LinkedIn"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <a
                  href={person.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-white visited:text-white no-underline hover:underline text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
                  aria-label={`LinkedIn ${person.name}`}
                >
                  {person.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Linha de direitos reservados */}
      <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-4 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Mindev. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;