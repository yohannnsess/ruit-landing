import type { Metadata } from 'next'
import { CompanyProfile } from '@/components/market/company-profile'

export const metadata: Metadata = { title: 'Company profile | Ruit market', description: 'Explore a supply chain company and everything it provides through Ruit market.' }

export default async function CompanyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <CompanyProfile id={id} />
}
