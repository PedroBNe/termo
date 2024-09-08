import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-screen h-screen">
      <h1 className="bg-white font-bold text-black rounded-md p-2 mx-4">Quero desejar uma viagem para você, sei que não é fácil encarar 10 horas de viagem, ripliquei um dos nossos jogos favoritos (Não ganha do conexo) para passar o tempo, saiba que eu te amo muito e irei ficar com muita saudade !!!</h1>
      <Link href="/palavras/primeira" className="bg-purple-500 rounded-md p-2 font-semibold">Comece a hablar!</Link>
    </div>
  );
}
