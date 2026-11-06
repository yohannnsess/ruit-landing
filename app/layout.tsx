import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Lora } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-display' })
const lora = Lora({ subsets: ['latin'], weight: ['400'], variable: '--font-body' })
export const metadata: Metadata = { metadataBase: new URL('https://ruit.et'), title: 'Ruit | Supply chain infrastructure in Ethiopia', description: 'Ruit is supply chain infrastructure, built in Ethiopia, that connects any business to the rest of its supply chain.', generator: 'Ruit', icons: { icon: '/icon.svg' } }
export const viewport: Viewport = { themeColor: '#FAF7F2', colorScheme: 'light dark', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${dmSans.variable} ${lora.variable}`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
