import type { Metadata } from 'next'
import { LandingPage } from '@/components/ruit-site'
import { definition, jsonLd } from '@/lib/config'

export const metadata: Metadata = { title: 'Ruit | Supply chain infrastructure in Ethiopia', description: definition, alternates: { canonical: 'https://ruit.et' }, openGraph: { title: 'Ruit | Supply chain infrastructure in Ethiopia', description: definition, url: 'https://ruit.et', siteName: 'Ruit', type: 'website' }, twitter: { card: 'summary_large_image', title: 'Ruit | Supply chain infrastructure in Ethiopia', description: definition } }

export default function Page() { return <><LandingPage /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></> }
