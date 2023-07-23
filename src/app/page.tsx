"use client";
import Itens from "./components/itens";
import Hmmm from "./components/hmm";
import girl from "@/app/assets/girl.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="justify-center flex flex-col items-center text-center p-2">
      <Image className="h-96 w-96" src={girl} alt="girl"></Image>
      <Hmmm
        msgOne="Hmmm, parece que alguém vai sair hoje!"
        msgTwo="Vamos escolher uma combinação de roupas pra você"
      ></Hmmm>

      
      <Itens></Itens>
    </main>
  );
}
