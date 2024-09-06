import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-screen h-screen">
      <h1 className="bg-white font-bold text-black rounded-md p-2">Texto fofo de inicio</h1>
      <Link href="/palavras/primeira" className="bg-purple-500 rounded-md p-2 font-semibold">Comece a hablar!</Link>
    </div>
  );
}
