"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiList,
  FiVideo,
  FiTrendingUp,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { CgSearch } from "react-icons/cg";
import { Input } from "@/components/ui/input";
import { HiOutlineChevronDown, HiOutlineChevronRight } from "react-icons/hi";
import { GoTriangleUp } from "react-icons/go";
import { usePathname } from "next/navigation";
import SearchModal from "@/components/ui/SearchModal";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const path = usePathname();

  const navLinks = [
    { label: "Accueil", href: "/", icon: <FiHome /> },
    {
      label: "Catégories",
      href: "/categories",
      icon: <FiList />,
      isSubMenu: true,
      isBold: true,
      subLinks: [
        {
          label: "Mathematiques",
          href: "/categories/mathématiques",
          videos: 127,
        },
        { label: "Science", href: "/categories/science", videos: 3412 },
        { label: "Temps anciens", href: "/categories/histoire", videos: 1204 },
        { label: "Histoire", href: "/categories/histoire", videos: 132 },
      ],
    },
    { label: "En direct", href: "/live", icon: <FiVideo />, badge: false },
    {
      label: "Tendances",
      href: "/videos/tendances",
      icon: <FiTrendingUp />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (path.includes("videos/")) {
        setIsScroll(window.scrollY > 0);
      } else {
        setIsScroll(window.scrollY > 200);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [path]);

  return (
    <>
      {/* Spacer pour compenser la hauteur du header */}
      <div className={isScroll ? "" : " h-[18px] sm:h-[30px]"}></div>

      <header
        className={` transition-all duration-200 ${
          isScroll
            ? " fixed top-0 left-0 w-full z-50 bg-[#0a1b3bcc] backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-0">
          <div
            className={`flex lg:gap-4 xl:gap-0 lg:flex-col xl:flex-row xl:items-center items-center lg:items-start justify-between py-4  rounded-xl ${
              isScroll ? "bg-inherit" : "bg-[#0a1b3b] px-6"
            } transition-all duration-300`}
          >
            {/* Logo */}
            <Link
              href={"/"}
              className="text-xl md:text-base  lg:text-[20px] font-bold text-white"
            >
              <span>iLEARNING</span>
              <span className="text-blue-400"> TV</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <nav className="flex items-center space-x-6 text-sm">
                {navLinks.slice(0, 3).map((link, index) => (
                  <div key={index} className="relative group">
                    <Link
                      href={link.href}
                      className={`cursor-pointer group flex items-center gap-1 text-white ${
                        link.isBold ? "font-semibold" : ""
                      }`}
                    >
                      {link.icon}
                      <span className=" w-max group-hover:underline ">
                        {link.label}
                      </span>{" "}
                      {/*  {link.badge && (
                        <span className="md:hidden lg:flex">:</span>
                      )} */}
                      {/*  {link.badge && (
                        <span
                          className={`md:hidden lg:flex ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5`}
                        >
                          {link.badge}
                        </span>
                      )} */}
                    </Link>

                    {/* Sous-menu */}
                    {link.isSubMenu && (
                      <div className="absolute hidden left-0 top-full mt-2 z-[100] group-hover:block bg-white text-black rounded shadow-lg">
                        <div className="text-white absolute ml-4 -mt-5 transition-colors w-full">
                          <GoTriangleUp size={30} className="" />
                        </div>

                        {link.subLinks?.map((sub, index) => {
                          if (link.label == "Catégories") {
                            return (
                              <div
                                key={index}
                                className="flex cursor-pointer rounded justify-between px-4 py-2 items-center w-[350px] overflow-hidden hover:bg-slate-200 transition-all duration-200"
                              >
                                <Link
                                  href={sub.href}
                                  className="block cursor-pointer whitespace-nowrap"
                                >
                                  {sub.label}
                                </Link>

                                <span className="w-max text-[11px]">
                                  {sub.videos} videos
                                </span>
                              </div>
                            );
                          } else {
                            return (
                              <Link
                                key={index}
                                href={sub.href}
                                className="block cursor-pointer px-4 py-2 hover:underline whitespace-nowrap"
                              >
                                {sub.label}
                              </Link>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                ))}

                <Input
                  key={"headerLgInput"}
                  onClick={() => setIsSearchModalOpen(true)}
                />
              </nav>
              <Link
                href="/login"
                className="xl:ml-4 w-max bg-white text-[#0a1b3b] font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-300 hover:shadow-md hover:scale-105
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-[#0a1b3bcc]"
              >
                Se connecter
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex gap-5 items-center">
              <div className="hidden sm:flex">
                <Input
                  key={"headerSmInput"}
                  onClick={() => setIsSearchModalOpen(true)}
                />
              </div>
              <div className="flex gap-5 sm:hidden ">
                <Link href={"/live"} className="relative">
                  <span className="absolute top-0 -left-1 block h-3 w-3 rounded-full bg-red-500 sm:hidden"></span>
                  <FiVideo size={25} color="#fff" />
                </Link>
                <CgSearch
                  onClick={() => setIsSearchModalOpen(true)}
                  cursor={"pointer"}
                  size={25}
                  color="#fff"
                />
              </div>
              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Toggle Menu"
                className="text-white text-2xl focus:outline-none cursor-pointer"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
        {isSearchModalOpen && (
          <SearchModal
            key={"headSearchModal"}
            isSearchModalOpen={isSearchModalOpen}
            setIsSearchModalOpen={setIsSearchModalOpen}
          />
        )}
      </header>

      <span className="lg:hidden">
        {/* Mobile Drawer + Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSubMenuOpen(false);
                }}
              />

              {/* Drawer */}
              <motion.div
                className="fixed right-0 top-0 h-full w-72 bg-[#0a1b3b] text-white shadow-lg z-[100] p-6 flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold">Menu</span>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsSubMenuOpen(false);
                    }}
                    className="text-2xl cursor-pointer focus:outline-none"
                    aria-label="Close Menu"
                  >
                    <FiX />
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      <button
                        className="flex items-center gap-2 text-left w-full group"
                        onClick={() => {
                          if (link.isSubMenu) {
                            setIsSubMenuOpen(!isSubMenuOpen);
                          } else {
                            setIsMenuOpen(false);
                          }
                        }}
                      >
                        {link.icon}

                        {link.subLinks ? (
                          <span className="flex items-center gap-1 cursor-pointer">
                            {link.label}{" "}
                            {link.isSubMenu && isSubMenuOpen ? (
                              <HiOutlineChevronDown />
                            ) : (
                              <HiOutlineChevronRight />
                            )}
                          </span>
                        ) : (
                          <Link
                            key={index}
                            className="group-hover:underline"
                            href={link.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsSubMenuOpen(false);
                            }}
                          >
                            {link.label}
                          </Link>
                        )}

                        {link.badge && (
                          <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
                            {link.badge}
                          </span>
                        )}
                      </button>
                      {/* Sous-menu pour mobile */}
                      {link.isSubMenu && isSubMenuOpen && (
                        <motion.div
                          className="pl-6 mt-2 flex flex-col space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {link.subLinks?.map((sub, index) => (
                            <Link
                              key={index}
                              href={sub.href}
                              className="text-sm hover:underline"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/login"
                    className="mt-4 bg-white text-[#0a1b3b] font-semibold px-4 py-2 rounded-full text-center hover:bg-gray-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Se connecter
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </span>
    </>
  );
}
