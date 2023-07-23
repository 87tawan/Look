import Image from "next/image";
import girl from "@/app/assets/girl.jpg";
import { useState } from "react";
import axios from "axios";
import Modal from "./modal";
import camiseta from "@/app/assets/roupas/camiseta.png";
import blusa from "@/app/assets/roupas/blusa.png";
import vestido from "@/app/assets/roupas/vestido.png";
import saia from "@/app/assets/roupas/saia.png";
import blazer from "@/app/assets/roupas/blazer.png";
import bota from "@/app/assets/roupas/botas.png";
import colar from "@/app/assets/roupas/colar.png";
import brinco from "@/app/assets/roupas/brinco.png";
import sapato from "@/app/assets/roupas/sapato.png";
import short from "@/app/assets/roupas/short.png";
import bolsa from "@/app/assets/roupas/bolsa.png";
import rasteirinha from "@/app/assets/roupas/rasteirinha.png";
import calça from "@/app/assets/roupas/calça.png";
import chapeu from "@/app/assets/roupas/chapeu.png";
import acessorio from "@/app/assets/roupas/acessorio.png";
export default function Itens() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [e, setE] = useState<any>([]);
  async function Generate() {
    const response = await axios.get("/api/home");
    console.log(response);
    setE(response.data);
    openModal();
  }

  return (
    <div>
      <button
        className="mt-5 bg-purple-800 text-white w-64 rounded p-1 cursor-pointer opacity "
        onClick={Generate}
      >
        Gerar Look
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <div className="flex flex-col relative gap-1">
          <p className="font-bold text-2xl text-purple-800">Que sorte!</p>
          <p className="mb-5">Olha só o que tem pra hoje</p>
          {e.camisa && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={camiseta} alt="camisa"></Image>
              <p className="font-bold ">{e.camisa}</p>
            </div>
          )}

          {e.camiseta && (
            <div className="flex items-center  gap-2">
              <Image
                className="h-12 w-12"
                src={camiseta}
                alt="camiseta"
              ></Image>
              <p className="font-bold">{e.camiseta}</p>
            </div>
          )}

          {e.vestido && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={vestido} alt="vestido"></Image>
              <p className="font-bold">{e.vestido}</p>
            </div>
          )}

          {e.blusa && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={blusa} alt="blusa"></Image>
              <p className="font-bold">{e.blusa}</p>
            </div>
          )}

          {e.blazer && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={blazer} alt="blazer"></Image>
              <p className="font-bold">{e.blazer}</p>
            </div>
          )}
          {e.bolsa && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={bolsa} alt="bolsa"></Image>
              <p className="font-bold">{e.bolsa}</p>
            </div>
          )}

          {e.calca && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={calça} alt="calca"></Image>
              <p className="font-bold">{e.calca}</p>
            </div>
          )}
          {e.saia && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={saia} alt="saia"></Image>
              <p className="font-bold">{e.saia}</p>
            </div>
          )}
          {e.short && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={short} alt="short"></Image>
              <p className="font-bold">{e.short}</p>
            </div>
          )}
          {e.sandalia && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={rasteirinha} alt="sandalia"></Image>
              <p className="font-bold">{e.sandalia}</p>
            </div>
          )}
          {e.bota && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={bota} alt="bota"></Image>
              <p className="font-bold">{e.bota}</p>
            </div>
          )}
          {e.rasteirinha && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={rasteirinha} alt="rasteirinha"></Image>
              <p className="font-bold">{e.rasteirinha}</p>
            </div>
          )}
          {e.sapato && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={sapato} alt="sapato"></Image>
              <p className="font-bold">{e.sapato}</p>
            </div>
          )}
          {e.brinco && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={brinco} alt="brinco"></Image>
              <p className="font-bold">{e.brinco}</p>
            </div>
          )}
          {e.tenis && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={sapato} alt="tenis"></Image>
              <p className="font-bold">{e.tenis}</p>
            </div>
          )}
          {e.acessorio && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={acessorio} alt="acessorio"></Image>
              <p className="font-bold">{e.acessorio}</p>
            </div>
          )}
          {e.sapatilha && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={sapato} alt="sapatilha"></Image>
              <p className="font-bold">{e.sapatilha}</p>
            </div>
          )}
          {e.chapeu && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={chapeu} alt="chapeu"></Image>
              <p className="font-bold">{e.chapeu}</p>
            </div>
          )}
          {e.colar && (
            <div className="flex items-center  gap-2">
              <Image className="h-12 w-12" src={colar} alt="colar"></Image>
              <p className="font-bold">{e.colar}</p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
