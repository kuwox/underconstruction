"use client";
import { Link } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";

export const Wsp = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=+12143840158&text=Hola!%20quiero%20de%20hacer%20un%20pedido."
      className="bg-green-600 hover:bg-green-700 transition-colors duration-300 ease-in-out text-white rounded-full shadow-lg flex items-center justify-center z-50 px-10 py-4 font-bold text-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      PEDIDOS CLIC AQUI
      <FaWhatsapp className="text-5xl ps-2" />
    </Link>
  );
};
