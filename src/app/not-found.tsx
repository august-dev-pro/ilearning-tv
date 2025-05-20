"use client";
import Link from "next/link";
import { FiAlertTriangle, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] px-4">
      <div className="flex flex-col items-center bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100">
        <FiAlertTriangle className="text-[#0a1b3b] mb-4" size={48} />
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a1b3b] mb-2 text-center">
          Oups, page introuvable !
        </h1>
        <p className="text-gray-600 text-center mb-6 max-w-md">
          La page que vous cherchez n’existe pas ou a été déplacée.
          <br />
          <span className="text-[#0a1b3b] font-semibold">
            iLearning TV
          </span>{" "}
          vous invite à explorer nos vidéos éducatives ou à revenir à l’accueil.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#0a1b3b] text-white font-semibold shadow hover:bg-blue-900 transition"
        >
          <FiArrowLeft className="text-lg" />
          Retour à l’accueil
        </Link>
      </div>
      <div className="mt-10 text-gray-400 text-xs text-center">
        Besoin d’aide ? Contactez-nous à{" "}
        <a href="mailto:augustdev.01@gmail.com" className="underline">
          augustdev.01@gmail.com
        </a>
      </div>
    </div>
  );
}
