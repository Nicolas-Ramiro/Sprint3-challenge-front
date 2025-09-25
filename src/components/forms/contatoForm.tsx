import { useForm, Controller, type FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo, useRef, useState } from "react";
import * as yup from "yup";

type ContatoFormData = {
  nome: string;
  email: string;
  mensagem: string;
};

const schema = yup
  .object({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("O e-mail é obrigatório"),
    mensagem: yup.string().required("A mensagem é obrigatória"),
  })
  .required();

export default function ContatoForm() {
  const formRef = useRef<HTMLFormElement>(null!);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState,
  } = useForm<ContatoFormData>({
    defaultValues: {
      nome: "",
      email: "",
      mensagem: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { errors, isValid } = useMemo(() => formState, [formState]);

  async function submitErrorCallback(e?: FieldErrors<ContatoFormData>) {
    console.log("Erros:", e);
  }

  async function submitCallback(values: ContatoFormData) {
    setLoading(true);

    if (!isValid) {
      await submitErrorCallback();
      setLoading(false);
      return;
    }

    console.log("Formulário enviado:", values);

    // simula requisição
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
  }

  return (
    <form
      className="flex flex-col gap-6 mt-10"
      onSubmit={handleSubmit(submitCallback, submitErrorCallback)}
      ref={formRef}
      noValidate
    >
      {/* Nome */}
      <Controller
        name="nome"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Nome"
              className="p-3 rounded-xl text-black bg-gray-200"
              {...field}
            />
            {errors.nome && (
              <span className="text-red-500 text-sm">
                {errors.nome.message}
              </span>
            )}
          </div>
        )}
      />

      {/* Email */}
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-xl text-black bg-gray-200"
              {...field}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        )}
      />

      {/* Mensagem */}
      <Controller
        name="mensagem"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col gap-2">
            <textarea
              placeholder="Como podemos te ajudar?"
              rows={5}
              className="p-3 rounded-xl text-black bg-gray-200 resize-none"
              {...field}
            />
            {errors.mensagem && (
              <span className="text-red-500 text-sm">
                {errors.mensagem.message}
              </span>
            )}
          </div>
        )}
      />

      {/* Botão */}
      <button
        type="submit"
        disabled={loading || !isValid}
        className="bg-orange-600 text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 w-32 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
