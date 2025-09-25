import { useState } from "react"
import LogoMindev from "../assets/LogoMindev.png"
import CadastroPacienteForm from "../components/forms/cadastroPacienteForm"
import AgendamentoConsulta from "../components/forms/agendamentoConsulta"

const Consulta = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [specialty, setSpecialty] = useState("")
  const [showAgendamento, setShowAgendamento] = useState(false)

  const daysInSeptember = Array.from({ length: 30 }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: 1 }, (_, i) => i)

  const handleAgendamento = (day: number) => {
    setSelectedDay(day)
    if (specialty.trim() !== "") {
      setShowAgendamento(true)
      setShowForm(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-[70vh] min-w-screen overflow-x-hidden bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 pt-14 md:pt-0">
        {/* Sidebar */}
        <aside className="w-full md:min-w-[250px] md:w-1/4 bg-gray-200 p-6 flex flex-col gap-6">
        {/* Botão cadastrar paciente */}
        <button
          onClick={() => {
            setShowForm(true)
            setShowAgendamento(false)
          }}
          className="!bg-orange-500 text-white text-xl font-semibold py-3 rounded-2xl"
        >
          Cadastrar paciente
        </button>

        <hr className="border-gray-400" />

        {/* Marcar consulta */}
        <div className="flex flex-col gap-3">
          <h2 className="text-center font-semibold text-black">Marcar Consulta</h2>
          <input
            type="text"
            placeholder="Digite a especialidade"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
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
            <div className="grid grid-cols-7 gap-2 text-center">
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="w-8 h-8"></div>
              ))}
              {daysInSeptember.map((day) => (
                <button
                  key={day}
                  onClick={() => handleAgendamento(day)}
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
        <main className="flex-1 flex items-center justify-center text-white p-6">
            {!showForm && !showAgendamento && (
                <div className="flex items-center justify-center gap-4">
                    <img src={LogoMindev} alt="Mindev" className="w-20 opacity-80" />
                    <h1 className="text-3xl font-bold text-orange-600">Mindev</h1>
                </div>
            )}

            {showForm && <CadastroPacienteForm />}
            {showAgendamento && <AgendamentoConsulta />}
        </main>
    </div>
  )
}

export default Consulta