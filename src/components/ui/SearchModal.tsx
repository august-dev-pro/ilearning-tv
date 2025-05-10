import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { videos } from "@/lib/api/videosData";
import Link from "next/link";
import { Input } from "./input";

export default function SearchModal({
  isSearchModalOpen,
  setIsSearchModalOpen,
}: {
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: Function;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isSearchModalOpen && (
        <div className="">
          {/* Overlay */}
          <motion.div
            key="overlay"
            className=" fixed z-[100] h-screen top-0 left-0 right-0 bottom-0 inset-0 bg-white/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchModalOpen(false)}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed left-1/2 top-14 z-[100] w-full bg-white  shadow-lg p-4 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Recherche</h2>
              <button
                onClick={() => setIsSearchModalOpen(false)}
                aria-label="Fermer la recherche"
                className="text-gray-500 hover:text-gray-700 text-2xl focus:outline-none"
              >
                <FiX cursor={"pointer"} />
              </button>
            </div>
            <Input
              key={"searchModalInput"}
              placeholder="Rechercher..."
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          {/* Suggestions */}

          <div className="fixed shadow-2xl sm:left-5 shadow-slate-950 top-[100px] w-full max-w-[428px] max-h-[calc(100vh-200px)] no-scrollbar overflow-y-auto z-[100] bg-white rounded-md sm:rounded-xl">
            <AnimatePresence>
              {searchQuery &&
                (filteredVideos.length > 0 ? (
                  filteredVideos.map((video, index) => (
                    <motion.div
                      key={index}
                      className="py-2 sm:py-3 border-b border-gray-100 hover:bg-gray-100 cursor-pointer flex items-center space-x-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Link
                        href={`/videos/${video.id}`}
                        className="flex items-center w-full"
                        onClick={() => setIsSearchModalOpen(false)}
                      >
                        {/* <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-16 h-10 object-cover rounded"
                        /> */}
                        <span className="ml-3 text-sm text-gray-700">
                          {video.title}
                        </span>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    className="p-2 text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Aucun résultat trouvé.
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
