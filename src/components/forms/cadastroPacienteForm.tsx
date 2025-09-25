import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Tipagem dos dados do formulário
interface FormData {
  nome: string;
  cpf: string;
  idade: number;
  telefone: string;
  email: string;
  acompanhante?: string;
  parentesco?: string;
  pacienteRef?: string;
  cep?: string;
  rua?: string;
  numero?: string;
  bairro?: string;
  estado?: string;
}

// Schema de validação com Yup
const schema = Yup.object({
  nome: Yup.string().required("Nome é obrigatório"),
  cpf: Yup.string().required("CPF é obrigatório"),
  idade: Yup.number().typeError("Idade deve ser um número").required("Idade é obrigatória"),
  telefone: Yup.string().required("Telefone é obrigatório"),
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
});

const CadastroPacienteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl grid grid-cols-2 gap-6 text-black"
    >
      {/* Cadastro de paciente */}
      <div className="col-span-2">
        <h2 className="text-orange-500 font-bold mb-3">Cadastro de paciente</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              {...register("nome")}
              placeholder="Nome*"
              className="w-full p-3 rounded-2xl bg-gray-200"
            />
            {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
          </div>
          <div>
            <input
              {...register("cpf")}
              placeholder="CPF*"
              className="w-full p-3 rounded-2xl bg-gray-200"
            />
            {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}
          </div>
          <div>
            <input
              {...register("idade")}
              placeholder="Idade*"
              className="w-full p-3 rounded-2xl bg-gray-200"
            />
            {errors.idade && <p className="text-red-500 text-sm">{errors.idade.message}</p>}
          </div>
          <div>
            <input
              {...register("telefone")}
              placeholder="Telefone*"
              className="w-full p-3 rounded-2xl bg-gray-200"
            />
            {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone.message}</p>}
          </div>
          <div className="col-span-2">
            <input
              {...register("email")}
              placeholder="Email*"
              className="w-full p-3 rounded-2xl bg-gray-200"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
        </div>
      </div>

      {/* Cadastro de acompanhante */}
      <div className="col-span-2">
        <h2 className="text-orange-500 font-bold mb-3">Cadastro de acompanhante</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            {...register("acompanhante")}
            placeholder="Nome"
            className="w-full p-3 rounded-2xl bg-gray-200"
          />
          <input
            {...register("pacienteRef")}
            placeholder="Nome do paciente"
            className="w-full p-3 rounded-2xl bg-gray-200"
          />
          <input
            {...register("parentesco")}
            placeholder="Parentesco"
            className="w-full p-3 rounded-2xl bg-gray-200"
          />
        </div>
      </div>

      {/* Endereço */}
      <div className="col-span-2">
        <h2 className="text-orange-500 font-bold mb-3">Endereço</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            {...register("cep")}
            placeholder="CEP"
            className="w-full p-3 rounded-2xl bg-gray-200"
          />
          <input
            {...register("rua")}
            placeholder="Rua"
            className="w-full p-3 rounded-2xl bg-gray-200"
          />
          <input
            {...register("numero")}
            placeholder="Número"
            className="w-full p-3 rounded-2xl bg-gray-200"
          />
          <input
            {...register("bairro")}
            placeholder="Bairro"
            className="w-full p-3 rounded-2xl bg-gray-200"
          />
          <input
            {...register("estado")}
            placeholder="Estado"
            className="w-full p-3 rounded-2xl bg-gray-200"
          />
        </div>
      </div>

      {/* Botão de envio */}
      <div className="col-span-2 flex justify-end mt-4">
        <button
          type="submit"
          className="!bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default CadastroPacienteForm;