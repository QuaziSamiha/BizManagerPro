"use client";

import type React from "react";

import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-silver">
      {/* Top decorative bar */}
      <div className="h-2 bg-redActual"></div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          {/* 404 Text and Visual Elements */}
          <div className="relative mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Large 404 */}
              <div className="relative">
                <div className="text-[120px] md:text-[180px] font-black leading-none text-blueActual">
                  404
                </div>

                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg opacity-20 -z-10 bg-redActual"></div>

                <div className="absolute -top-4 -left-4 w-full h-full rounded-lg opacity-10 -z-10 bg-blueActual"></div>
              </div>

              {/* Vertical line separator (visible on md screens) */}
              <div className="hidden lg:block h-40 w-1 rounded-full bg-redActual"></div>

              {/* Text content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blueActual">
                  Page Not Found
                </h2>
                <p className="text-lg mb-6 max-w-md">
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>

                {/* Broken link illustration */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <div className="w-12 h-3 rounded-l-full bg-blueActual"></div>
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full animate-ping absolute bg-redActual"></div>
                    <div className="w-3 h-3 rounded-full bg-redActual"></div>
                  </div>
                  <div className="w-12 h-3 rounded-r-full bg-blueActual"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-lg p-6 transition-transform hover:scale-105 bg-blueActual">
              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <Home size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    Return Home
                  </h3>
                  <p className="text-white opacity-80">
                    Go back to the main page
                  </p>
                </div>
              </div>
              <Link href={"/"}>
                <Button className="w-full mt-4 transition-colors bg-white hover:bg-white text-blueActual">
                  Go to Homepage
                </Button>
              </Link>
            </div>

            <div className="rounded-lg p-6 transition-transform hover:scale-105 bg-redActual">
              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <ArrowLeft size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Go Back</h3>
                  <p className="text-white opacity-80">
                    Return to the previous page
                  </p>
                </div>
              </div>
              <Button
                className="w-full mt-4 transition-colors bg-white hover:bg-white text-redActual"
                onClick={() => router.back()}
              >
                Previous Page
              </Button>
            </div>
          </div>

          {/* Error code explanation */}
          <div className="p-4 rounded-lg text-center text-white bg-blueHover">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-1 w-8 rounded-full bg-white opacity-50"></div>
              <span className="font-medium">ERROR CODE</span>
              <div className="h-1 w-8 rounded-full bg-white opacity-50"></div>
            </div>
            <p>
              The 404 error occurs when the requested page doesn&apos;t exist on
              the server.
              <br />
              Please check the URL or navigate using the options above.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="flex">
        <div className="h-4 flex-1 bg-blueActual"></div>
        <div className="h-4 w-24 bg-redActual"></div>
        <div className="h-4 flex-1 bg-blueHover"></div>
      </div>
    </div>
  );
}

// "use client"

// import Lottie from 'lottie-react';
// import Link from 'next/link';
// import error from "../../../public/ho3f6kQUQZ.json";

// const NotFound = () => {
//     return (
//         <div className="w-full h-screen flex flex-col items-center justify-center">
//       <Lottie className="h-80 w-auto" animationData={error} loop={true} />
//       <div className="flex flex-col items-center justify-center">
//         <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800">
//           Page Not Found
//         </p>
//         <p className="md:text-lg lg:text-xl text-gray-600 mt-8 items-center">
//           Sorry, the page you are looking for could not be found.
//         </p>
//         <Link
//           className="flex items-center space-x-2 bg-green-700 hover:bg-primaryShade text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
//           title="Return Home"
//           href={`/`}
//         >
//           <svg
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//           <span>Return Home</span>
//         </Link>
//       </div>
//     </div>
//     );
// };

// export default NotFound;
