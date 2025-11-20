"use client";
import { signIn } from "next-auth/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
import { IconBrandGithub } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSignIn = async () => {
    const result = await signIn("github", {
      redirect: false,
      callbackUrl: "/generation"
    });
    if (result?.ok) {
      router.push("/generation");
    }
  };

  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <AuroraBackground>
        <main className="flex flex-col items-center justify-center min-h-screen w-full max-w-3xl mx-auto dark:bg-black sm:items-start">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Generate your project documentation with AI.
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Sign in to get started.
            </div>
            <button
              className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 flex flex-row items-center gap-2 hover:scale-105 transition-transform"
              onClick={handleSignIn}
            >
              <IconBrandGithub />
              Sign in with GitHub
            </button>
          </motion.div>
        </main>
      </AuroraBackground>
    </div>
  );
}
