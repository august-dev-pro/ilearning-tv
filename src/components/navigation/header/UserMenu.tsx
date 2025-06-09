import { useState, useRef, useEffect } from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { RiWechatChannelsFill } from "react-icons/ri";

export default function UserDropdown() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) {
    return (
      <Link
        href="/login"
        className="xl:ml-4 w-max bg-white text-[#0a1b3b] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-300 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0a1b3bcc]"
      >
        Se connecter
      </Link>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-green-200 text-[#0a1b3b] font-bold uppercase"
        title="Mon compte"
      >
        {user.nom?.[0] || "U"}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-[#0a1b3b] text-white rounded-lg shadow-xl z-50">
          <div className="p-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-300 text-[#0a1b3b] flex items-center justify-center font-bold uppercase">
                {user.nom?.[0] || "U"}
              </div>
              <div>
                <div className="font-semibold text-sm">{user.nom}</div>
                <div className="text-xs text-white/60 truncate">
                  {user.email}
                </div>
              </div>
            </div>
          </div>

          <ul className="text-sm py-2">
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 transition"
              >
                <RiWechatChannelsFill className="text-white/80" /> Chaines
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 transition"
              >
                <MdFavorite className="text-white/80" /> Videos favories
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 transition"
              >
                <FaCog className="text-white/80" /> Paramètres du compte
              </Link>
            </li>

            <li>
              <button
                className="flex text-red-400 items-center gap-2 w-full px-4 py-2 hover:bg-white/10 transition"
                onClick={() => {
                  setOpen(false);
                  logout();
                }}
              >
                <FaSignOutAlt /> Se déconnecter
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
