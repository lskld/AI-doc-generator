import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { FileUpload } from "@/components/ui/file-upload";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <p>You need to sign in to view this page.</p>;
  }
  return (
    <main className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Generate your documentation with AI
        </h2>
        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
          <FileUpload />
        </div>
      </div>
    </main>
  );
}
