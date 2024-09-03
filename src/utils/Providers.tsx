"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

const Providers = ({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element => {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" enableSystem={true}>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

export { Providers };
