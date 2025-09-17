import '@/src/app/ui/global.css';
import { inter } from '@/src/app/ui/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
