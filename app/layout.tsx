import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Abrusci Derma | Dermatologia, Chirurgia e Laser", description: "Chirurgia dermatologica, oncologia cutanea, laser ed estetica cutanea. Dr. Vito Abrusci." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="it"><body>{children}</body></html>; }
