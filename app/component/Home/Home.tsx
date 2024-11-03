// import { GlobeDemo } from "../Globe/Globe";
// import { CoverDemo } from "../Text/Text";
// const frequentSites = [
//   { name: 'Google', url: 'https://www.google.com', icon: '/placeholder.svg?height=32&width=32' },
//   { name: 'YouTube', url: 'https://www.youtube.com', icon: '/placeholder.svg?height=32&width=32' },
//   { name: 'GitHub', url: 'https://www.github.com/bashartech', icon: '/placeholder.svg?height=32&width=32' },
//   { name: 'Gmail', url: 'https://www.gmail.com', icon: '/placeholder.svg?height=32&width=32' },
//   { name: 'GitHub', url: 'https://www.github.com/bashartech', icon: '/placeholder.svg?height=32&width=32' },
//   { name: 'Gmail', url: 'https://www.gmail.com', icon: '/placeholder.svg?height=32&width=32' },
//   { name: 'Gmail', url: 'https://www.gmail.com', icon: '/placeholder.svg?height=32&width=32' },
//   { name: 'GitHub', url: 'https://www.github.com/bashartech', icon: '/placeholder.svg?height=32&width=32' },
//   { name: 'Gmail', url: 'https://www.gmail.com', icon: '/placeholder.svg?height=32&width=32' },
// ];
// export default function HomePage() {
//   return (
//     <div className="text-white">
// <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 p-8 overflow-hidden">
// <div className="max-w-6xl mx-auto space-y-12 relative">
// <CoverDemo/>
//     <input
//         type="text"
//         placeholder="Search Google or type a URL"
//         className="w-full bg-gray-900 text-gray-100 rounded-full py-4 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-700 shadow-xl"
//     />
//     </div>
//     <div className="w-full mt-10 flex ">
//       <div className="left w-[40%]">
//       <section>
//           <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
//             {frequentSites.map((site) => (
//               <a
//                 key={site.name}
//                 href={site.url}
//                 className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
//               >
//                 <img src={site.icon} alt={site.name} className="w-12 h-12 mb-2" />
//                 <span>{site.name}</span>
//               </a>
//             ))}
//           </div>
//         </section>
//       </div>
//       <div className="mt-[143px] w-[60%]">
//       <GlobeDemo/>
//       </div>
//     </div>
// </div>
//     </div>
//   )
// }
"use client";

import { useState, useEffect } from "react";
import { GlobeDemo } from "../Globe/Globe";
import { CoverDemo } from "../Text/Text";
import { Search, Bookmark } from "lucide-react";

const frequentSites = [
  { name: "Google", url: "https://www.google.com", icon: "bxl-google" },
  { name: "YouTube", url: "https://www.youtube.com", icon: "bxl-youtube" },
  {
    name: "GitHub",
    url: "https://www.github.com/bashartech",
    icon: "bxl-github",
  },
  { name: "Gmail", url: "https://www.gmail.com", icon: "bxl-gmail" },

  {
    name: "Linkdin",
    url: "https://www.linkedin.com/bashartech",
    icon: "bxl-linkedin",
  },
  { name: "facebook", url: "https://www.facebook.com", icon: "bxl-facebook" },
  { name: "ChatGpt", url: "https://www.chatgpt.com", icon: "bxs-chat" },
  {
    name: "Portfolio",
    url: "https://bashar-portfolio-next-loujyu9ey-bashartechs-projects.vercel.app/?vercelToolbarCode=Q8EMBJA0tK_bqTo",
    icon: "bxl-redux",
  },
  { name: "V0", url: "https://v0.dev/chat/70MkChgMM9B", icon: "bxs-devices" },
];

const bookmarks = [
  { name: 'Netflix', url: 'https://www.netflix.com' },
  { name: 'Spotify', url: 'https://www.spotify.com' },
  { name: 'Twitter', url: 'https://www.twitter.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com' },
];

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="text-white min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col h-screen">
          <CoverDemo />
          <div className="relative mt-7 mb-8">
            <input
              type="text"
              placeholder="Search Google or type a URL"
              className="w-full bg-gray-900 text-gray-100 rounded-full py-4 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-700 shadow-xl"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex-grow flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 mb-8 md:mb-0 overflow-y-auto pr-4">
            <div>
              <div className="grid mt-10 grid-cols-3 sm:grid-cols-3 gap-4">
                {frequentSites.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <i
                      className={`bx ${site.icon} w-5 text-2xl h-5 mb-2`}
                      aria-hidden="true"
                    ></i>

                    <span className="text-xs text-center">{site.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <section className="grid  grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Bookmarks</h2>
            <ul className="space-y-2">
              {bookmarks.map((bookmark) => (
                <li key={bookmark.name}>
                  <a
                    href={bookmark.url}
                    className="flex items-center p-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    <Bookmark className="w-5 h-5 mr-3 text-blue-500" />
                    {bookmark.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
            </section>
            </div>
            <div className="w-full md:w-3/5 flex items-center justify-center">
              {!isMobile && (
                <div className="w-full h-full mt-[-50px]  max-w-2xl max-h-2xl">
                  <GlobeDemo />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
