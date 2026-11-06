import type { Metadata } from 'next'
import { MarketPage } from '@/components/ruit-site'
import { getMarketDescription } from '@/lib/config'

export const metadata: Metadata = { title: 'Ruit market | Goods and assets posted by businesses', description: getMarketDescription(), robots: { index: true, follow: true }, alternates: { canonical: 'https://ruit.et/market' }, openGraph: { title: 'Ruit market | Goods and assets posted by businesses', description: getMarketDescription(), url: 'https://ruit.et/market', siteName: 'Ruit', type: 'website' } }
export default function Page() { return <MarketPage /> }
