import SocialLoginButtons from "@/components/ui/SocialLoginButtons";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="py-36 flex items-center">
      <div className="container px-4 sm:px-0 grid items-center justify-center gap-6 md:gap-10">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl text-center md:text-base  lg:text-3xl font-[900]"
        >
          <span>iLEARNING</span>
          <span className="text-blue-400"> TV</span>
        </Link>
        <div className="max-w-md xl:min-w-md m-[0_auto] w-full bg-white border border-gray-200 md:border-gray-100 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          <h1
            className="mb-6 pb-4 text-xl
sm:text-2xl  font-[900] text-black text-center border-gray-300 border-b"
          >
            Créez votre compte
          </h1>
          {/* Formulaire inscription */}
          <form className="space-y-5">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="fullname"
                required
                className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                required
                className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0a1b3b] text-white font-semibold py-2 rounded-xl hover:bg-blue-900 cursor-pointer"
            >
              Créer un compte
            </button>
          </form>
          <p className="text-center flex gap-1 flex-wrap text-sm text-gray-600">
            <span>Vous avez déjà un compte ?</span>
            <Link href="/login" className="text-blue-500 hover:underline">
              Connectez-vous
            </Link>
          </p>
          {/* OU separateur */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">ou</span>
            </div>
          </div>
          {/* Boutons providers */}
          <SocialLoginButtons />
        </div>
      </div>
    </div>
  );
}
