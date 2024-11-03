"use client";

import { useState, useEffect } from "react";
import { GlobeDemo } from "../Globe/Globe";
import { CoverDemo } from "../Text/Text";
import { Search, Bookmark } from "lucide-react";

const frequentSites = [
  { name: "Google", url: "https://www.google.com", icon: "bxl-google" },
  { name: "YouTube", url: "https://www.youtube.com", icon: "bxl-youtube" },
  { name: "GitHub", url: "https://www.github.com/bashartech", icon: "bxl-github" },
  { name: "Gmail", url: "https://www.gmail.com", icon: "bxl-gmail" },
  { name: "Linkdin", url: "https://www.linkedin.com/bashartech", icon: "bxl-linkedin" },
  { name: "facebook", url: "https://www.facebook.com", icon: "bxl-facebook" },
  { name: "ChatGpt", url: "https://www.chatgpt.com", icon: "bxs-chat" },
  { name: "Portfolio", url: "https://bashar-portfolio-next-loujyu9ey-bashartechs-projects.vercel.app/?vercelToolbarCode=Q8EMBJA0tK_bqTo", icon: "bxl-redux" },
  { name: "V0", url: "https://v0.dev/chat/70MkChgMM9B", icon: "bxs-devices" },
];

const bookmarks = [
  { name: 'Netflix', url: 'https://www.netflix.com' },
  { name: 'ChatGpt', url: 'https://www.chatgpt.com' },
  { name: 'Twitter', url: 'https://www.twitter.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/bashartech' },
];

const HomePage: React.FC =  () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < 768;

    const [query, setQuery] = useState<string>("")

    const performSearch = () => {
      window.location.href = `https://www.google.com/search?q=${query}`
    }

    const handleKeyPress = ( event: React.KeyboardEvent<HTMLInputElement>)=>{
      if(event.key === "Enter"){
        event.preventDefault();
        performSearch()
      }
    }
  

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="text-white min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col h-screen">
          <CoverDemo />
          <div className="search relative mt-7 mb-8">
            <input id="input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Search Google or type a URL
             "
              className="w-full bg-gray-900 text-gray-100 rounded-full py-4 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-700 shadow-xl"
            />
            <Search id="search" onClick={performSearch} className="cursor-pointer absolute right-4 top-1/2  transform -translate-y-1/2 text-gray-400" />
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
              <div className="mt-7">
                <h2 className="text-xl font-semibold mb-4">Bookmarks</h2>
                <ul className={` ${isMobile ? 'flex flex-wrap justify-between' : 'grid grid-cols-4 gap-4'}`}>
                  {bookmarks.map((bookmark) => (
                    <li key={bookmark.name} className={isMobile ? 'w-[48%] mb-2' : ''}>
                      <a
                        href={bookmark.url}
                        className="flex items-center p-2 rounded-md hover:bg-gray-800 transition-colors"
                      >
                        <Bookmark className="w-5 h-5 mr-3 text-blue-500" />
                        <span className="truncate">{bookmark.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-3/5 flex items-center justify-center">
              {!isMobile && (
                <div className="w-full h-full mt-[-50px] max-w-2xl max-h-2xl">
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
export default  HomePage
