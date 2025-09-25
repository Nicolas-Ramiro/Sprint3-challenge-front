import React from "react";

export default function Proposta() {
  return (
    <main className="min-h-[70vh] min-w-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white pt-32 pb-20 px-6">
      <div className="w-full flex flex-col gap-10 items-center">
        {/* Card Proposta */}
        <section className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify w-[500px]">
          <h3 className="text-orange-500 font-bold text-2xl mb-4 text-center">
            Proposta
          </h3>
          <p className="text-base leading-relaxed">
            A MindDev propõe uma solução inclusiva para facilitar o acesso à
            saúde digital, especialmente para pacientes com deficiência física
            ou baixa familiaridade com tecnologia. A proposta envolve um chatbot
            assistido por voz aliado a uma consultoria completa.
          </p>
        </section>

        {/* Linha com dois cards lado a lado */}
        <div className="w-full flex flex-col md:flex-row gap-10 justify-center">
          {/* Card Tecnologia Utilizada */}
          <section className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify w-[500px]">
            <h3 className="text-orange-500 font-bold text-xl mb-4 text-center">
              Tecnologia Utilizada
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong>Watson Assistant com IA:</strong> Integrado ao WhatsApp
                para interação por mensagens de voz.
              </li>
              <li>
                <strong>Speech-to-Text (STT):</strong> Transforma fala em texto
                para o chatbot entender.
              </li>
              <li>
                <strong>Text-to-Speech (TTS):</strong> Respostas em áudio para
                facilitar a compreensão.
              </li>
            </ul>
          </section>

          {/* Card Etapas da Consultoria */}
          <section className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify w-[500px]">
            <h3 className="text-orange-500 font-bold text-xl mb-4 text-center">
              Etapas da Consultoria
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong>Pesquisa de Campo:</strong> Levantamento dos desafios
                enfrentados pelos pacientes do IMREA.
              </li>
              <li>
                <strong>Mapeamento de Processos:</strong> Análise da jornada do
                paciente para identificar pontos críticos.
              </li>
              <li>
                <strong>Documentos IS THIS e TO BE:</strong> Descrição do
                cenário atual e do cenário ideal com propostas de melhoria.
              </li>
              <li>
                <strong>Reformulação do Sistema:</strong> Melhoria da interface
                e navegação, com foco na acessibilidade.
              </li>
            </ul>
          </section>

          {/* Card Funcionalidades */}
        <section className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify w-[500px]">
          <h3 className="text-orange-500 font-bold text-xl mb-4 text-center">
            Funcionalidades Principais
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
            <li>Confirmação e reagendamento de consultas por voz.</li>
            <li>Fornecimento de informações sobre serviços.</li>
            <li>Atendimento personalizado com memorização de contexto.</li>
          </ul>
        </section>
        </div>
      </div>
    </main>
  );
}