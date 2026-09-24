import type { Metadata, Viewport } from 'next';
import { Archivo, Inter } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { UIProvider } from '@/components/layout/UI';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Dock } from '@/components/layout/Dock';
import { Effects } from '@/components/layout/Effects';
import { company } from '@/data/site';

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', axes: ['wdth'], display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const description =
  'ADK Engineering PVT LTD, Ahmedabad — fiber laser cutting, CNC plasma cutting, CNC press brake, fiber laser welding, PEB machinery, shearing machines and spares with PAN India service support.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adkeng.com'),
  title: {
    default: 'ADK Engineering PVT LTD | Fiber Laser Cutting, Plasma Cutting & Press Brake Machines, Ahmedabad',
    template: '%s | ADK Engineering PVT LTD',
  },
  description,
  openGraph: { type: 'website', siteName: company.name, description, images: ['/home/banners/adk-b1.webp'] },
  icons: {
    icon: [
      { url: '/brand/adk-logo.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/icon.png',
  },
};

export const viewport: Viewport = { themeColor: '#ffffff' };

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <UIProvider>
          <SmoothScroll />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Dock />
          <Effects />
        </UIProvider>
      </body>
    </html>
  );
}
