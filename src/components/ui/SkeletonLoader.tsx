import React from "react";

const SkeletonLoader = ({ count = 6 }: { count?: number }) => {
  return (
    <main className="my-14">
      <div className="container px-4 sm:px-0">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              {/* Image Skeleton */}
              <div className="h-40 bg-gray-300"></div>
              {/* Text Skeleton */}
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SkeletonLoader;
