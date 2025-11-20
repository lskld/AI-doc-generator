import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { FileUpload } from "@/components/ui/file-upload";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { IconBrandGithub } from "@tabler/icons-react";
import InstallButton from "@/components/github-app";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <p>You need to sign in to view this page.</p>;
  }
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <BackgroundRippleEffect rows={20} cols={40} />
      <div className="relative z-10 w-full">
        <ThemeToggle />
      </div>
      <div className="flex flex-col justify-center items-center p-10 relative w-3xl h-72 z-10 mt-60 border dark:bg-black dark:border-neutral-800 rounded-lg">
        <InstallButton />
      </div>
    </main>
  );
}
