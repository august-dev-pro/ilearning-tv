import Image from "next/image";
import facebookLogo from "../../../public/images/logos/facebook-logo.png";
import googleLogo from "../../../public/images/logos/google-logo.png";
import appleLogo from "../../../public/images/logos/apple-logo.png";

export default function SocialLoginButtons() {
  return (
    <div className="space-y-3">
      <button className="w-full cursor-pointer  flex items-center justify-center border border-gray-300 rounded-xl py-2 hover:scale-[1.025] transition-all duration-200 hover:bg-gray-100">
        <Image
          src={googleLogo.src}
          alt="Google"
          width={20}
          height={20}
          className="mr-2"
        />
        <span className="text-sm font-medium">Continuer avec Google</span>
      </button>

      <button className="w-full cursor-pointer  flex items-center justify-center bg-blue-600 rounded-xl py-2 hover:scale-[1.025] transition-all duration-200 hover:bg-blue-700">
        <span className="bg-white mr-2 rounded-full border border-white">
          <Image
            src={facebookLogo.src}
            alt="Facebook"
            width={20}
            height={20}
            className=""
          />
        </span>
        <span className="text-sm font-medium text-white">
          Continuer avec Facebook
        </span>
      </button>

      <button className="w-full cursor-pointer  flex items-center justify-center bg-black rounded-xl py-2 hover:scale-[1.025] transition-all duration-200 hover:bg-gray-900">
        <Image
          src={appleLogo.src}
          alt="Apple"
          width={20}
          height={20}
          className="mr-2"
        />
        <span className="text-sm font-medium text-white">
          Continuer avec Apple
        </span>
      </button>
    </div>
  );
}
