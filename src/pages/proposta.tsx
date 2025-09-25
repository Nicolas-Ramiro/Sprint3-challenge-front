import React from "react";

export default function Proposta() {
  return (
    <main className="min-h-[70vh] min-w-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white pt-32 pb-20 px-6">
      <div className="w-full flex flex-col gap-10 items-center">
        {/* Card Proposta */}
        <section className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify w-full max-w-[500px]">
          <h3 className="text-orange-500 font-bold text-2xl mb-4 text-center">
            Proposta
          </h3>
          <p className="text-base leading-relaxed">
            A solução da Mindev foi desenvolvida para enfrentar as barreiras
            tecnológicas que dificultam o acesso à saúde digital, especialmente
            para pacientes com deficiência física ou com dificuldades no uso de
            dispositivos móveis. O sistema foca em uma jornada do paciente mais
            fluida, que integra ferramentas para agendamento e comunicação, com
            o objetivo de reduzir a taxa de absenteísmo nas teleconsultas.
          </p>
        </section>

        {/* Grid Responsivo */}
        <div
          className="
            flex flex-col gap-10 w-full items-center
            !lg:grid !lg:grid-cols-2 !lg:gap-10 !lg:max-w-6xl
            xl:flex xl:flex-row xl:justify-center xl:max-w-none
          "
        >
          {/* Chatbot Assistido por Voz */}
          <section className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify w-full max-w-[500px]">
            <h3 className="text-orange-500 font-bold text-xl mb-4 text-center">
              Chatbot Assistido por Voz
            </h3>
            <p className="text-base leading-relaxed">
              O chatbot, desenvolvido na plataforma Watson Assistant, utiliza
              inteligência artificial para interpretar as intenções dos usuários
              e responder de forma precisa e personalizada. A tecnologia de
              reconhecimento de fala (Speech-to-Text) transforma a fala dos
              pacientes em texto, permitindo que o chatbot entenda comandos e
              solicitações. Já a tecnologia Text-to-Speech converte a resposta
              do chatbot para áudio, tornando a informação acessível a todos.
            </p>
          </section>

          {/* Funcionalidades do chatbot */}
          <section className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify w-full max-w-[500px]">
            <h3 className="text-orange-500 font-bold text-xl mb-4 text-center">
              Funcionalidades do chatbot
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>
                <strong>Confirmação de Consultas:</strong> O chatbot pode
                confirmar agendamentos de forma rápida e simples, usando apenas
                a voz.
              </li>
              <li>
                <strong>Reagendamento de Consultas:</strong> Se o paciente
                precisar alterar o horário, o procedimento pode ser feito de
                maneira ágil, sem a necessidade de intervenção humana.
              </li>
              <li>
                <strong>Obtenção de Informações:</strong> O sistema fornece
                informações sobre serviços e procedimentos de forma direta por
                voz.
              </li>
              <li>
                <strong>Memorização de Contexto:</strong> O sistema lembra
                informações da conversa para oferecer um atendimento
                personalizado e contínuo, com base no histórico de interações.
              </li>
            </ul>
          </section>

          {/* Plataforma de agendamento */}
          <section className="border-2 border-orange-500 rounded-xl p-6 flex flex-col items-center text-justify w-full max-w-[500px]">
            <h3 className="text-orange-500 font-bold text-xl mb-4 text-center">
              Plataforma de agendamento
            </h3>
            <p className="text-base leading-relaxed">
              Além do chatbot, a Mindev propõe a criação de uma tela de
              agendamento de consultas para ser integrada aos sistemas já
              utilizados internamente. Essa plataforma permite que pacientes ou
              acompanhantes agendem consultas, e posteriormente, consultem as
              informações de seus agendamentos. A solução também gera um banco
              de dados para a equipe administrativa, facilitando a organização
              das atividades e o acompanhamento dos agendamentos.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
