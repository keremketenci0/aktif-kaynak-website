import type { Metadata } from "next";

// styles
import "../globals.css";

// theme provider
import { ThemeProvider } from "@/components/shadcn/theme-provider"

// translation
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// components
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Aktif Kaynak",
  description: "Aktif Kaynak",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="sticky top-0 inset-x-0 z-10 shadow-md">
              <Navbar />
            </header>
            <main>
              {children}
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
