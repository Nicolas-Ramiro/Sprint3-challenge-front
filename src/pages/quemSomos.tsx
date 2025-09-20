import React from "react";
import Nicolas from "../assets/Nicolas.jpg";
import Hebert from "../assets/Hebert.png";
import Marcus from "../assets/Marcus.jpg";

const QuemSomos: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-900 text-white py-20 px-6">
        {/* Título Founders */}
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">
            FOUNDERS
        </h2>

        {/* Founders */}
        <div className="flex flex-wrap justify-center gap-20">
            {/* Founder 1 */}
            <div className="flex flex-col items-center text-center max-w-[350px]">
                <img
                    src={Hebert}
                    alt="Hebert Lopes dos Santos"
                    className="w-40 h-40 rounded-full object-cover mb-5 shadow-lg"
                />
                <p className="font-bold text-orange-500">Hebert Lopes dos Santos</p>
                <p className="text-justify md:text-lg leading-relaxed">
                    Hebert traz para a MindDev sua vasta experiência em vendas, combinando conhecimento técnico com habilidades comerciais para ampliar o alcance das soluções desenvolvidas. Seu talento para entender o mercado e criar conexões estratégicas é fundamental para transformar ideias em oportunidades reais.
                </p>
                <p className="textmd">RM: 563192<br />1TDSR</p>
                <a href="https://github.com/hebertlps" className="text-blue-400 hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/in/hebert-lopes-36a3bb12a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-400 hover:underline">LinkedIn</a>
            </div>

            {/* Founder 2 */}
            <div className="flex flex-col items-center text-center max-w-[350px]">
                <img
                    src={Marcus}
                    alt="Marcus Vinícius Vila Nova da Silva"
                    className="w-40 h-40 rounded-full object-cover mb-5 shadow-lg"
                />
                <p className="font-bold text-orange-500">Marcus Vinícius Vila Nova da Silva</p>
                <p className="text-justify md:text-lg leading-relaxed">
                    Marcus é um líder e gerente de projetos dedicado, que conduz a MindDev com visão clara e foco na entrega de resultados. Sua capacidade de organizar equipes, alinhar objetivos e motivar pessoas garante que cada projeto seja executado com excelência e eficiência.
                </p>
                <p className="text-md">RM: 558771<br />1TDSR</p>
                <a href="#https://github.com/marcusvilanova" className="text-blue-400 hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/in/marcus-vin%C3%ADcius-vila-nova-da-silva?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-400 hover:underline">LinkedIn</a>
            </div>

            {/* Founder 3 */}
            <div className="flex flex-col items-center text-center max-w-[350px]">
                <img
                    src={Nicolas}
                    alt="Nicolas Monteiro Ramiro"
                    className="w-40 h-40 rounded-full object-cover mb-5 shadow-lg"
                  />
                  <p className="font-bold text-orange-500">Nicolas Monteiro Ramiro</p>
                  <p className="text-justify md:text-lg leading-relaxed">
                        Nicolas é o especialista em códigos da MindDev, reconhecido por sua habilidade excepcional em desenvolvimento de software. Ele transforma desafios complexos em soluções digitais robustas e inovadoras, elevando a qualidade técnica dos projetos e garantindo a funcionalidade que o usuário espera.
                    </p>
                  <p className="text-md">RM: 562380<br />1TDSR</p>
                  <a href="https://github.com/Nicolas-Ramiro/" className="text-blue-400 hover:underline">GitHub</a>
                  <a href="https://www.linkedin.com/in/nicolas-ramiro-4a44bb346" className="text-blue-400 hover:underline">LinkedIn</a>
            </div>
        </div>

        {/* Pilares */}
        <h2 className="text-3xl font-bold text-center my-16">Nossos Pilares</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify">
                <h3 className="text-orange-500 font-bold text-xl mb-4 text-center">
                    Missão
                </h3>
                <p className="text-sm">
                    Transformar a saúde digital, criando soluções tecnológicas inovadoras,
                    acessíveis e profundamente humanas, que coloquem o paciente no centro
                    da experiência, descomplicando o acesso e a navegação no sistema de saúde.
                </p>
            </div>

            {/* Visão */}
            <div className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify">
                <h3 className="text-orange-500 font-bold text-xl mb-4 text-center">
                    Visão
                </h3>
                <p className="text-sm">
                    Ser a líder global em consultoria tecnológica para a saúde, reconhecida
                    pela criação de soluções disruptivas e pela construção de uma jornada
                    de cuidados mais eficiente, acessível e humana, impactando positivamente
                    milhões de vidas.
                </p>
            </div>

            {/* Valores */}
            <div className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center">
                <h3 className="text-orange-500 font-bold text-xl mb-4 text-center">
                    Valores
                </h3>
                <ul className="list-disc list-inside text-sm text-left">
                    <li>Inovação com propósito</li>
                    <li>Foco em impacto real</li>
                    <li>Parceria e escuta ativa</li>
                    <li>Excelência com ética</li>
                    <li>Diversidade e inclusão</li>
                </ul>
            </div>
        </div>
    </section>
  );
};

export default QuemSomos;
