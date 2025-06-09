import React from "react";

const HomeSkeleton = () => {
  return (
    <main className=" section  ">
      <div className="container px-4 sm:px-0 space-y-10 sm:space-y-12">
        {/* Skeleton pour la bannière */}
        <section className=" animate-pulse">
          <div className="h-[276px] bg-gray-300 rounded-lg"></div>
        </section>

        {/* Skeleton pour les vidéos recommandées */}
        <section className=" space-y-4">
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-40 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skeleton pour les vidéos en direct */}
        <section className=" space-y-4">
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-40 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skeleton pour les vidéos en tendances */}
        <section className=" space-y-4">
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-40 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skeleton pour les derniers posts */}
        <section className=" space-y-4 mb-32">
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-40 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeSkeleton;
