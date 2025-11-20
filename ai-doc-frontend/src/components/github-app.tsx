"use client";

import { IconBrandGithub } from "@tabler/icons-react";

export default function InstallButton() {
  const redirectUrl = `https://github.com/apps/${process.env.NEXT_PUBLIC_GITHUB_APP_NAME}/installations/new`;

  return (
            <button
              className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 flex flex-row items-center gap-2 hover:scale-105 transition-transform"
              onClick={() => window.location.assign(redirectUrl)}
            >
              <IconBrandGithub />
              Connect your repositories
            </button>
  );
}
