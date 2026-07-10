import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Drones',
  description: 'Landing page para Drones',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  );
}
