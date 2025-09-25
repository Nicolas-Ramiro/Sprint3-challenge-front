import ContatoForm from "../components/forms/contatoForm";

export default function Contato() {
  return (
    <main className="min-h-[70vh] min-w-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 pt-32 pb-20 px-6 text-white">
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-16 px-12 mt-40 ">
        {/* Formulário */}
        <div className="flex-1 min-w-[300px]">
          <h1 className="text-orange-600 text-3xl font-bold mb-2">
            Deseja falar conosco?
          </h1>
          <p>Deixe uma mensagem no formulário abaixo!</p>
          <ContatoForm />
        </div>

        {/* Informações */}
        <div className="flex-1 min-w-[300px] md:ml-20">
          <h1 className="text-orange-600 text-3xl font-bold mb-4">
            Entre em contato!
          </h1>
          <p>
            <a href="mailto:Mindev@gmail.com" className="text-white text-2xl hover:underline">
              Mindev@gmail.com
            </a>
          </p>
          <p className="mt-10 text-2xl font-bold leading-relaxed">
            Estamos localizados na <br />
            Av. Lins de Vasconcelos, <br />
            1222
          </p>
        </div>
      </div>
    </main>
  );
}