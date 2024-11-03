import React from "react";
import { Cover } from "@/app/component/ui/cover";
 
export function CoverDemo() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-slate-500 dark:to-slate-600">
        Search In Chrome Of  <Cover>Bashar Tech</Cover>
      </h1>
    </div>
  );
}