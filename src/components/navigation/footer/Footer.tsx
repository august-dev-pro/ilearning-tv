import Link from "next/link";
import { FaYoutube, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const navigationLinks = [
  { name: "Accueil", href: "/" },
  { name: "Catégories", href: "/categories" },
  { name: "En direct", href: "/live" },
  { name: "Toutes les vidéos", href: "/videos" },
];

const legalLinks = [
  { name: "Politique de confidentialité", href: "/confidentialite" },
  { name: "Conditions d’utilisation", href: "/conditions" },
  { name: "Mentions légales", href: "/mentions-legales" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebook,
    color: "#3b5998",
  },
  {
    name: "Twitter",
    href: "#",
    icon: FaTwitter,
    color: "#1da1f2",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
    color: "#0077b5",
  },
  {
    name: "YouTube",
    href: "#",
    icon: FaYoutube,
    color: "#ff0000",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1b3b] text-white px-6 py-10 grid justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Logo et description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-3">iLEARNING TV</h2>
          <p className="text-sm text-gray-300 max-w-xs">
            Apprenez les technologies modernes avec des vidéos pédagogiques, où
            que vous soyez.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Légal */}
        <div>
          <h3 className="font-semibold mb-3">Informations légales</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Nous contacter</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              Email :{" "}
              <Link
                href="mailto:support@ilearning.tv"
                className="hover:underline"
              >
                support@ilearning.tv
              </Link>
            </li>
            <li>Téléphone : +33 1 23 45 67 89</li>
            <li>
              <div className="flex justify-center md:justify-start space-x-3 mt-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-[35px] h-[35px] rounded-md flex items-center justify-center hover:scale-110 transition-transform"
                    style={{ backgroundColor: social.color }}
                  >
                    <social.icon color="#fff" size={20} />
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Trait fin */}
      <div className="border-t border-gray-700 w-full my-8"></div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm">
        &copy; 2025 iLEARNING TV. Tous droits réservés.
      </div>
    </footer>
  );
}
