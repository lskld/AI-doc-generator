import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Image from "next/image";

export default function Page() {
  return (
        <main className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
          <BackgroundRippleEffect />
          <div className="mt-60 w-full">
            <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
              Generate your documentation with AI
            </h2>
          </div>
        </main>
  );
}
