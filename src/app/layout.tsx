import { inter } from '@/app/ui/fonts';

import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Navigate to your browser, open dev tools and select the body element.
       You should see Inter and Inter_Fallback are now applied under styles. */}

      {/* Tailwind antialiased class which smooths out the font. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
