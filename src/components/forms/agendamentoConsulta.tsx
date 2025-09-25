import { useState } from "react"

type Atendimento = "presencial" | "teleatendimento"

interface HorarioConsulta {
  id: number
  horario: string
  local: string
  sala: string
}

const horarios: HorarioConsulta[] = [
  { id: 1, horario: "08:00", local: "Hospital das Clínicas FMUSP", sala: "1" },
  { id: 2, horario: "08:30", local: "Hospital das Clínicas FMUSP", sala: "2" },
  { id: 3, horario: "09:00", local: "Hospital das Clínicas FMUSP", sala: "3" },
  { id: 4, horario: "09:30", local: "Hospital das Clínicas FMUSP", sala: "4" },
]

const AgendamentoConsulta = () => {
  const [selecionados, setSelecionados] = useState<Record<number, Atendimento>>({})

  const handleSelect = (id: number, tipo: Atendimento) => {
    setSelecionados((prev) => ({ ...prev, [id]: tipo }))
  }

  return (
    <div className="w-full bg-gray-500 text-white rounded-lg p-4">
      {horarios.map((h) => {
        const tipo = selecionados[h.id] || "presencial"
        return (
          <div
            key={h.id}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 items-center border-b border-gray-400 py-3"
          >
            {/* Radiobutton Presencial */}
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name={`atendimento-${h.id}`}
                checked={tipo === "presencial"}
                onChange={() => handleSelect(h.id, "presencial")}
              />
              Presencial
            </label>

            {/* Radiobutton Teleatendimento */}
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name={`atendimento-${h.id}`}
                checked={tipo === "teleatendimento"}
                onChange={() => handleSelect(h.id, "teleatendimento")}
              />
              Teleatendimento
            </label>

            {/* Horário */}
            <span>{h.horario}</span>

            {/* Local */}
            <input
              type="text"
              value={h.local}
              disabled={tipo === "teleatendimento"}
              className={`p-1 rounded-md text-black ${
                tipo === "teleatendimento" ? "bg-gray-300" : "bg-white"
              }`}
              readOnly
            />

            {/* Sala */}
            <input
              type="text"
              value={h.sala}
              disabled={tipo === "teleatendimento"}
              className={`p-1 rounded-md text-black w-16 ${
                tipo === "teleatendimento" ? "bg-gray-300" : "bg-white"
              }`}
              readOnly
            />

            {/* Plataforma */}
            <select
              disabled={tipo === "presencial"}
              className={`p-1 rounded-md text-black ${
                tipo === "presencial" ? "bg-gray-300" : "bg-white"
              }`}
            >
              <option value="">Plataforma</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="teams">Teams</option>
              <option value="zoom">Zoom</option>
            </select>

            {/* Tipo de chamada */}
            <select
              disabled={tipo === "presencial"}
              className={`p-1 rounded-md text-black ${
                tipo === "presencial" ? "bg-gray-300" : "bg-white"
              }`}
            >
              <option value="">Tipo</option>
              <option value="video">Vídeo</option>
              <option value="audio">Áudio</option>
            </select>

            {/* Acompanhante + Botão */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Acompanhante necessário?
                </label>

                <button className="!bg-orange-500 text-white px-3 py-1 rounded-md">
                    Marcar
                </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AgendamentoConsulta