import React from "react";

export default function PlayVideoPageSkeleton() {
  return (
    <div className="min-h-screen text-gray-800">
      <div className="container">
        <main className="mx-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section principale */}
          <div className="lg:col-span-2">
            {/* Player Skeleton */}
            <div className="aspect-video bg-gray-300 lg:rounded-xl overflow-hidden shadow-lg animate-pulse"></div>

            <div className="px-4 sm:px-0 mt-4">
              {/* Titre Skeleton */}
              <div className="h-6 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-1/4 mt-2 animate-pulse"></div>

              {/* Auteur Skeleton */}
              <div className="flex items-center mt-6 space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded-md w-1/2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-md w-1/4 mt-2 animate-pulse"></div>
                </div>
              </div>

              {/* Boutons Skeleton */}
              <div className="flex items-center space-x-6 mt-6">
                <div className="h-8 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="h-8 w-28 bg-gray-300 rounded-md animate-pulse"></div>
              </div>

              {/* Description Skeleton */}
              <div className="mt-6 space-y-2">
                <div className="h-4 bg-gray-300 rounded-md w-full animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded-md w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Suggestions Skeleton */}
          <aside className="space-y-4 px-4 sm:px-0 lg:pl-4 border-gray-200 lg:max-h-[100vh] lg:overflow-y-auto lg:border-l custom-scroll">
            <div className="h-6 bg-gray-300 rounded-md w-1/3 animate-pulse"></div>
            <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-1 space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 animate-pulse"
                >
                  <div className="w-24 h-16 bg-gray-300 rounded-md"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded-md w-1/2 mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
