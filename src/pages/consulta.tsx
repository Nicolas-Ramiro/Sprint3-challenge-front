import { useState } from "react";
import LogoMindev from "../assets/LogoMindev.png";

const Consulta = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const daysInSeptember = Array.from({ length: 30 }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: 1 }, (_, i) => i);

  return (
    <div className="flex min-h-[70vh] min-w-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-200 p-6 flex flex-col gap-6">
        {/* Botão cadastrar paciente */}
        <button className="!bg-orange-500 text-white text-xl font-semibold py-3 rounded-2xl">
          Cadastrar paciente
        </button>

        <hr className="border-gray-400" />

        {/* Marcar consulta */}
        <div className="flex flex-col gap-3">
          <h2 className="text-center font-semibold text-black">Marcar Consulta</h2>
          <input
            type="text"
            placeholder="Digite a especialidade"
            className="w-full p-3 rounded-2xl bg-orange-500 text-white placeholder-white"
          />
        </div>

        {/* Selecionar data */}
        <div className="flex flex-col gap-3">
          <h2 className="text-center font-semibold text-black">Selecione uma data</h2>
          <div className="bg-orange-500 text-white p-4 rounded-2xl">
            {/* Cabeçalho do calendário */}
            <div className="flex justify-between items-center mb-2">
              <span className="cursor-pointer">&lt;</span>
              <span>Setembro</span>
              <span className="cursor-pointer">&gt;</span>
            </div>

            {/* Dias da semana */}
            <div className="grid grid-cols-7 text-center mb-2 font-semibold">
              <span>D</span>
              <span>S</span>
              <span>T</span>
              <span>Q</span>
              <span>Q</span>
              <span>S</span>
              <span>S</span>
            </div>

            {/* Dias do mês */}
            <div className="grid grid-cols-7 gap-2 text-center ml-4">
              {/* Renderiza os dias vazios */}
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="w-8 h-8"></div>
              ))}
              {/* Renderiza os dias do mês */}
              {daysInSeptember.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition !bg-transparent ${
                    selectedDay === day
                      ? "bg-white text-black font-bold"
                      : "hover:bg-orange-300"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 flex items-center justify-center text-white">
        <div className="text-center">
          <img
            src={LogoMindev}
            alt="Mindev"
            className="mx-auto mb-4 w-40 opacity-80"
          />
          <h1 className="text-3xl font-bold text-orange-600">Mindev</h1>
        </div>
      </main>
    </div>
  );
};

export default Consulta;