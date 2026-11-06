import { getLlms } from '@/lib/config'
export function GET() { return new Response(getLlms(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }) }
