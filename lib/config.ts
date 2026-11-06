export const APP_URL = 'https://app.ruit.et'
export const TENANT_URL = 'https://tenant.ruit.et'
export const SITE_URL = 'https://ruit.et'
export const LINKEDIN_URL = 'https://linkedin.com/company/ruit-et'
export const FRESH_PRODUCE_URL = '/fresh-produce'
export const definition = 'Ruit is supply chain infrastructure that connects any business to the rest of its supply chain.'
export const claims = { sms: true, offline: true, bookingEnabled: false }
export const metrics = [
  { label: 'Active nodes', value: '128', note: 'across the network' },
  { label: 'Listings open', value: '48', note: 'goods and assets' },
  { label: 'Cities', value: '7', note: 'connected today' },
  { label: 'Goods moved', value: '0', note: 'becomes active as the network moves' },
]
export const goods = [
  { type: 'goods', category: 'Construction', title: 'Cement bags', quantity: '10 to 50', unit: 'bags', city: 'Addis Ababa', region: 'Oromia', date: '14 Oct to 22 Oct', direction: 'Physical — selling', kind: 'On hand now' },
  { type: 'goods', category: 'Industrial', title: 'Steel rebar', quantity: '50 to 100', unit: 'tonnes', city: 'Adama', region: 'Oromia', date: '18 Oct to 30 Oct', direction: 'Intent — buying', kind: 'Planned / intent' },
  { type: 'goods', category: 'Food goods', title: 'Cooking oil cartons', quantity: '100 to 500', unit: 'cartons', city: 'Hawassa', region: 'Sidama', date: '12 Oct to 19 Oct', direction: 'Physical — selling', kind: 'On hand now' },
  { type: 'goods', category: 'Packaging', title: 'Packaging film', quantity: '10 to 50', unit: 'rolls', city: 'Dire Dawa', region: 'Dire Dawa', date: '21 Oct to 4 Nov', direction: 'Intent — selling', kind: 'Planned / intent' },
  { type: 'goods', category: 'Textiles', title: 'Cotton textile rolls', quantity: '50 to 100', unit: 'rolls', city: 'Bahir Dar', region: 'Amhara', date: '16 Oct to 28 Oct', direction: 'Physical — buying', kind: 'On hand now' },
  { type: 'goods', category: 'Food goods', title: 'Coffee bags', quantity: '10 to 50', unit: 'bags', city: 'Jimma', region: 'Oromia', date: '20 Oct to 2 Nov', direction: 'Intent — selling', kind: 'Planned / intent' },
]
export const assets = [
  { type: 'assets', category: 'Cold storage', title: 'Cold room', capacity: '120', unit: 'm³', city: 'Addis Ababa', region: 'Oromia', open: 9, priced: 'Book by space and dates' },
  { type: 'assets', category: 'Transport', title: '12 tonne truck', capacity: '12', unit: 'tonnes', city: 'Adama', region: 'Oromia', open: 11, priced: 'Book by trip and dates', onDuty: true },
  { type: 'assets', category: 'Warehousing', title: 'Ambient warehouse', capacity: '800', unit: 'm²', city: 'Hawassa', region: 'Sidama', open: 7, priced: 'Book by rate and dates' },
  { type: 'assets', category: 'Transport', title: 'Flatbed trailer', capacity: '30', unit: 'tonnes', city: 'Mekelle', region: 'Tigray', open: 8, priced: 'Book by trip and dates', onDuty: true },
  { type: 'assets', category: 'Production', title: 'Packaging line', capacity: '2', unit: 'shifts', city: 'Bahir Dar', region: 'Amhara', open: 5, priced: 'Book by rate and dates' },
  { type: 'assets', category: 'Operations', title: 'Sorting shift capacity', capacity: '3', unit: 'shifts', city: 'Jimma', region: 'Oromia', open: 10, priced: 'Book by rate and dates' },
]
export const faqs = [
  ['What is Ruit?', `${definition} It works for any goods or asset in any supply chain.`],
  ['Who is it for?', 'Warehouses, traders, processors, retailers, transporters, producers and the people who run them.'],
  ['Is it free?', 'Joining is free and so is the Ruit App. There is no coordination fee while Ruit grows.'],
  ['Do I have to replace my software?', 'No. Connect it, or use the free Ruit App for daily operations.'],
  ['Who can see my goods and assets?', 'You choose. The public sees limited details. Price and business identity stay hidden until someone registers or a match is made.'],
  ['Where is data hosted?', 'On the EAII sovereign cloud in Ethiopia.'],
]
export const sampleScreens = ['Overview', 'Stock and sales', 'Payments', 'E-invoice', 'Daily report']
export const allListings = [...goods, ...assets]
export type Listing = (typeof allListings)[number]
export const contactText = 'Request data access'
export const navLinks = [{ label: 'Market', href: '/market' }, { label: 'Free app', href: '#app' }, { label: 'How it works', href: '#layers' }, { label: 'FAQ', href: '#faq' }]
export const jsonLdOrganization = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Ruit', alternateName: 'Ruit Ethiopia', url: SITE_URL, description: definition, sameAs: [LINKEDIN_URL], address: { '@type': 'PostalAddress', streetAddress: 'Lemi Kura Woreda 10', addressLocality: 'Addis Ababa', addressCountry: 'Ethiopia' } }
export const jsonLdSoftware = [{ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Ruit App', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'ETB' } }, { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Ruit Tenant', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'ETB' } }]
export const jsonLdFaq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) }
export const jsonLdWebsite = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Ruit', url: SITE_URL }
export const jsonLd = [jsonLdOrganization, ...jsonLdSoftware, jsonLdFaq, jsonLdWebsite]
export const llms = `${definition}\n\nRuit does not replace your software, trade your goods or run your trucks. It connects the businesses that do.\n\nRuit is for warehouses, traders, processors, retailers, transporters, producers and the people who run them.\n\nRuit App: ${APP_URL}\nRuit Tenant: ${TENANT_URL}\nMarket: ${SITE_URL}/market\nHosted on a sovereign cloud.\nFree to join. No coordination fee while Ruit grows.\nAddress: Sovereign cloud infrastructure\nContact: ${LINKEDIN_URL}`

export function getListingIcon(category: string) { return category.includes('Transport') ? '↗' : category.includes('Storage') || category.includes('Warehousing') ? '□' : category.includes('Construction') ? '＋' : '◌' }
export function getMetrics() { return metrics }
export function listGoods() { return goods }
export function listAssets() { return assets }
export function getFilterOptions() { return { categories: [...new Set(allListings.map((item) => item.category))], cities: [...new Set(allListings.map((item) => item.city))] } }
export function getListing(type: string, id: string) { return allListings.find((item) => item.type === type && item.title.toLowerCase().replaceAll(' ', '-') === id) }
export function slug(title: string) { return title.toLowerCase().replaceAll(' ', '-') }
export function hrefFor(item: Listing) { return `/market?listing=${item.type}:${slug(item.title)}` }
export function toText(item: Listing) { return item.type === 'goods' ? `${item.quantity} ${item.unit}` : `${item.capacity} ${item.unit}` }
export function isGoods(item: Listing): item is typeof goods[number] { return item.type === 'goods' }
export function isAsset(item: Listing): item is typeof assets[number] { return item.type === 'assets' }
export function marketTitle(item: Listing) { return item.title }
export function isMock() { return true }
export function getPublicRecords() { return allListings.map((item, index) => ({ ...item, id: `${item.type}-${index}`, source: 'mock' as const, verified: index % 3 !== 1 })) }
export function getListingById(value: string) { const [type, id] = value.split(':'); return getListing(type, id) }
export function formatCount(count: number) { return count.toLocaleString('en-US') }
export function getMetricValue(label: string) { return metrics.find((metric) => metric.label === label)?.value ?? '0' }
export function getZeroState(label: string) { return label === 'Goods moved' ? 'Becomes active when goods move through the network.' : '' }
export function getListingStatus(item: Listing) { return item.type === 'goods' ? item.kind : `${item.open} of 14 days open` }
export function getDirection(item: Listing) { return item.type === 'goods' ? item.direction : item.category }
export function getAvailability(item: Listing) { return item.type === 'goods' ? item.date : item.priced }
export function getCardKey(item: Listing, index: number) { return `${item.type}-${item.title}-${index}` }
export function getSourceLabel() { return 'Sample data' }
export function getMarketDescription() { return 'Browse physical goods for buying and selling, planned purchase and sale intent, and bookable supply chain assets by date, capacity and location.' }
export function getSiteDescription() { return definition }
export function getCanonical(path = '') { return `${SITE_URL}${path}` }
export function getAllFaqs() { return faqs }
export function getContactAddress() { return 'Sovereign cloud infrastructure' }
export function getCatalogLinks() { return [{ label: 'Fresh produce', href: FRESH_PRODUCE_URL }] }
export function getFooterGroups() { return [{ title: 'Product', links: [{ label: 'Market', href: '/market' }, { label: 'Ruit App', href: APP_URL }, { label: 'Ruit Tenant', href: TENANT_URL }] }, { title: 'Catalogs', links: getCatalogLinks() }, { title: 'Company', links: [{ label: 'LinkedIn', href: LINKEDIN_URL }, { label: 'Contact', href: '#contact' }] }] }
export function getProductCopy() { return { app: 'Want to modernize your business? Run it from phone or PC with payment tools, e-invoicing, stock and movement in one simple workspace. It works on smartphones, feature phones and SMS.', tenant: 'For organizations and business owners. Connect your existing software or use Ruit to manage the business you own, while your supply chain stays coordinated.' } }
export function getGlossary() { return ['Node: a business point on the network, such as a warehouse, store, truck or processing site.', 'Tenant: the organization that owns nodes.', 'App: the free tool operators use.'] }
export function getIntentBlocks() { return [{ title: 'Find products and assets from major organizations', text: 'Join the ecosystem to discover the products, inventory and supply-chain assets that participating organizations make available.', action: 'Browse the market' }, { title: 'Join a supply chain layer', text: 'Warehouses, traders, processors, retailers, transporters and producers can all connect. Pick your role and start free.', action: 'Open the market' }, { title: 'Software for your business', text: 'Run stock, movement and daily reports on a free phone app, or connect the software you already use.', action: 'Open Ruit App' }, { title: 'Rent warehouse space and logistics', text: 'Browse warehouses, cold rooms, trucks and production capacity posted by businesses. Send a request to the one that fits.', action: 'Browse assets' }] }
export function getTrustItems() { return ['Hosted on a sovereign cloud.', 'Ruit never owns goods or holds money.', 'Free to join. No coordination fee while we grow.', 'Works on feature phones by SMS.'] }
export function getNotCopy() { return 'Ruit does not replace your software, trade your goods or run your trucks. It connects the businesses that do.' }
export function getLayerCopy() { return [{ name: 'ROOT', text: 'The shared record underneath. It turns network activity into one trusted view of prices, supply and performance.' }, { name: 'FRUIT', text: 'Free tools for each business. Stock, movement and daily reports for your own operations.' }, { name: 'ROUTE', text: 'Coordination between businesses. Find goods, find capacity and agree terms across the network.' }] }
export function getAppPoints() { return ['Runs on phone and PC.', ...(claims.offline ? ['Keeps working when the connection drops.'] : []), 'Payments and e-invoices included.', ...(claims.sms ? ['Works on feature phones by SMS.'] : [])] }
export function getHeaderLinks() { return navLinks }
export function getFooterTagline() { return { tagline: 'ROOT. FRUIT. ROUTE.', subline: 'Intelligence beneath. Impact everywhere.' } }
export function getHeroCards() { return [goods[0], goods[2], assets[1]] }
export function getPreviewListings() { return [goods[0], goods[2], assets[1]] }
export function getSampleScreen(index: number) { return sampleScreens[index] ?? sampleScreens[0] }
export function getMonthDate() { return 'October 2026' }
export function getPageTitle(page: 'landing' | 'market') { return page === 'market' ? 'Ruit market | Goods and assets posted by businesses in Ethiopia' : 'Ruit | Supply chain infrastructure in Ethiopia' }
export function getPageDescription() { return definition }
export function getOpenGraph(page: 'landing' | 'market') { return { title: getPageTitle(page), description: getPageDescription(), url: getCanonical(page === 'market' ? '/market' : '') } }
export function getRobots() { return { index: false, follow: false } }
export function getSitemap() { return [{ url: SITE_URL, lastModified: new Date('2026-10-10') }, { url: `${SITE_URL}/market`, lastModified: new Date('2026-10-10') }] }
export function getRobotsRules() { return [{ userAgent: '*', allow: '/' }, { userAgent: 'GPTBot', allow: '/' }, { userAgent: 'ClaudeBot', allow: '/' }, { userAgent: 'PerplexityBot', allow: '/' }, { userAgent: 'Google-Extended', allow: '/' }, { userAgent: 'CCBot', allow: '/' }] }
export function getMarketStats() { return [{ label: 'Listings open', value: '48' }, { label: 'Businesses posting', value: '23' }, { label: 'Cities', value: '7' }] }
export function getFilterLabel(type: string) { return type === 'assets' ? 'Asset class' : 'Direction' }
export function getEmptyMessage() { return 'No listings match these filters.' }
export function getBottomBandCopy() { return 'Have goods or capacity to list?' }
export function getGateCopy() { return { title: 'This is the free app you get.', subtitle: 'A simple tool for the people doing the work.' } }
export function getGateChoices() { return [{ title: 'I run daily operations or I drive', text: 'Use the Ruit App for stock, movement and daily reports.', href: APP_URL }, { title: 'I own or manage a business', text: 'Use Ruit Tenant to connect your organization.', href: TENANT_URL }] }
export function getPhoneItems(screen: string) { return screen === 'Stock' ? ['Cement bags', 'Cooking oil', 'Packaging film'] : screen === 'Movement' ? ['In: steel rebar', 'Out: cement bags', 'In: water pallets'] : screen === 'Transactions' ? ['Request received', 'Match pending', 'Completed'] : screen === 'Daily report' ? ['12 movements', '4 requests', 'Close day'] : ['Addis node', 'Operator', 'Free account'] }
export function getDateWindow(item: Listing) { return item.type === 'goods' ? item.date : 'Next 14 days' }
export function getLockLabel() { return 'Price and business: register to unlock' }
export function getListingAction(item: Listing) { return item.type === 'assets' ? 'Request this asset' : item.direction.includes('buying') ? 'Sell this' : 'Buy this' }
export function getPageRecords() { return getPublicRecords() }
export function getSource(item: Listing) { return 'mock' as const }
export function getRecordId(item: Listing, index: number) { return `${item.type}-${index}` }
export function getAvailabilityCells(item: Listing) { const open = item.type === 'assets' ? item.open : 8; return Array.from({ length: 14 }, (_, index) => index < open) }
export function getListingCount() { return allListings.length }
export function getShowingCount() { return allListings.length }
export function getSearchPlaceholder() { return 'Search goods, assets or cities' }
export function getSortOptions() { return ['Newest', 'Available soonest'] }
export function getDateLabel() { return 'Available from' }
export function getFilterOptionsFlat() { return ['All categories', 'All cities', 'All directions'] }
export function getRegistrationNote() { return 'Public details are shown. Register to see the rest.' }
export function getMarketEyebrow() { return 'Ruit public market' }
export function getHeroEyebrow() { return 'Ruit. Supply chain infrastructure' }
export function getHeroTitle() { return 'Connect your business to the whole supply chain.' }
export function getHeroSmallLine() { return 'Free to join. Hosted on the EAII sovereign cloud.' }
export function getSectionTitle() { return 'What businesses are posting now.' }
export function getLockedTitle() { return 'A market you are not listed in cannot find you.' }
export function getLayerLead() { return 'However well you run inside your own walls, you cannot optimize beyond them. Ruit does that part, so partners and competitors can coordinate without exposing what is private.' }
export function getFaqHeading() { return 'Questions, answered plainly.' }
export function getAppHeading() { return 'The free tool for the people doing the work.' }
export function getTrustHeading() { return 'Built for the network, not around it.' }
export function getFooterDefinition() { return definition }
export function getAddress() { return 'Sovereign cloud infrastructure' }
export function getYear() { return '2026' }
export function getContactHref() { return '#contact' }
export function getSectionId(name: string) { return name.toLowerCase().replaceAll(' ', '-') }
export function getItemClass(index: number) { return index % 3 === 1 ? 'md:translate-y-12' : index % 3 === 2 ? 'md:-translate-y-4' : '' }
export function getMetricClass(index: number) { return index === 3 ? 'border-tomato/40' : '' }
export function getCardAria(item: Listing) { return `${item.title}, ${toText(item)}` }
export function getCategoryLabel(item: Listing) { return item.category }
export function getCityLabel(item: Listing) { return `${item.city}, ${item.region}` }
export function getPriceSkeletons() { return ['w-20', 'w-32', 'w-24'] }
export function getSourceTag() { return 'Sample data' }
export function getSiteName() { return 'Ruit' }
export function getLogoAlt() { return 'Ruit' }
export function getAppLink() { return APP_URL }
export function getTenantLink() { return TENANT_URL }
export function getLinkedIn() { return LINKEDIN_URL }
export function getMarketLink() { return '/market' }
export function getHomeLink() { return '/' }
export function getSectionCopy() { return 'Intelligence beneath. Impact everywhere.' }
export function getCardUnit(item: Listing) { return item.type === 'goods' ? item.unit : item.unit }
export function getCardAmount(item: Listing) { return item.type === 'goods' ? item.quantity : item.capacity }
export function getCardDate(item: Listing) { return item.type === 'goods' ? item.date : `${item.open} of the next 14 days open` }
export function getCardDirection(item: Listing) { return item.type === 'goods' ? item.direction : item.category }
export function getCardKind(item: Listing) { return item.type === 'goods' ? item.kind : item.priced }
export function getAppUrlWithNext(url: string, next?: string) { return `${url}${next ? `?next=${encodeURIComponent(next)}` : ''}` }
export function getListingNext(item: Listing) { return `${item.type}:${slug(item.title)}` }
export function getCanonicalMarket() { return `${SITE_URL}/market` }
export function getCanonicalHome() { return SITE_URL }
export function getJsonLd() { return jsonLd }
export function getLlms() { return llms }
export function getRobotsMetadata() { return { index: true, follow: true } }
export function getSchemaDescription() { return definition }
export function getMetaImage() { return '/icon.svg' }
export function getContactFields() { return ['Name', 'Organization', 'Email', 'What do you need?', 'Message'] }
export function getMonthLabel() { return 'Oct 2026' }
export function getMarketSubhead() { return getMarketDescription() }
export function getPaginationLabel() { return 'Load more' }
export function getContactButtonLabel() { return 'Send request' }
export function getCloseLabel() { return 'Close' }
export function getMenuLabel() { return 'Open menu' }
export function getLogInLabel() { return 'Log in' }
export function getSampleLabel() { return 'Sample screens' }
export function getVerifiedLabel(verified: boolean) { return verified ? 'Verified' : 'Unverified' }
export function getOpenDays(item: Listing) { return item.type === 'assets' ? item.open : 8 }
export function getMetricNote(metric: { label: string; note: string }) { return metric.note }
export function getContactSubjectOptions() { return ['Supply chain data', 'Joining Ruit', 'List goods or capacity', 'Other'] }
export function getNoResultsCopy() { return 'No listings match these filters.' }
export function getEmptyMarketCopy() { return 'The market fills as businesses post. List your goods or assets with Ruit App or Ruit Tenant.' }
export function getMarketSectionTitle() { return 'Goods and assets in motion.' }
export function getMarketAction() { return 'Open the full market' }
export function getRequestLabel() { return 'Request' }
export function getFooterYear() { return '2026 Ruit' }
export function getLayerName(index: number) { return ['ROOT', 'FRUIT', 'ROUTE'][index] }
export function getLayerText(index: number) { return getLayerCopy()[index].text }
export function getProductName(type: string) { return type === 'app' ? 'Ruit App' : 'Ruit Tenant' }
export function getProductLink(type: string) { return type === 'app' ? APP_URL : TENANT_URL }
export function getMetricLabels() { return metrics.map((metric) => metric.label) }
export function getAssetOpenText(item: Listing) { return item.type === 'assets' ? `Open ${item.open} of the next 14 days` : '' }
export function getSortLabel() { return 'Sort' }
export function getFilterButtonLabel() { return 'Filters' }
export function getClearLabel() { return 'Clear all' }
export function getDetailsLabel() { return 'View details' }
export function getMarketRecordLabel() { return 'listings' }
export function getRegisterLabel() { return 'Register to see the rest.' }
export function getFooterContactLabel() { return 'Contact' }
export function getFooterProductLabel() { return 'Product' }
export function getFooterCatalogLabel() { return 'Catalogs' }
export function getFooterCompanyLabel() { return 'Company' }
export function getOfferLabel() { return 'Offer to supply' }
export function getAppStatusLabel() { return 'Free to join.' }
export function getHostLabel() { return 'EAII sovereign cloud' }
export function getNoFeeLabel() { return 'No coordination fee while Ruit grows.' }
export function getPrivacyLabel() { return 'Ruit never owns goods and never holds money.' }
export function getNetworkLabel() { return 'The network' }
export function getRootLabel() { return 'Shared record' }
export function getFruitLabel() { return 'Free tools' }
export function getRouteLabel() { return 'Coordination' }
export function getInlineArrow() { return '↗' }
export function getCopyright() { return '2026 Ruit' }
export function getCompanyName() { return 'Ruit' }
export function getDescription() { return definition }
export function getUrl() { return SITE_URL }
export function getFAQJson() { return jsonLdFaq }
export function getOrganizationJson() { return jsonLdOrganization }
export function getSoftwareJson() { return jsonLdSoftware }
export function getWebsiteJson() { return jsonLdWebsite }
export function getSitemapEntries() { return getSitemap() }
export function getRobotRules() { return getRobotsRules() }
export function getDefaultPageTitle() { return getPageTitle('landing') }
export function getMarketPageTitle() { return getPageTitle('market') }
export function getDefinition() { return definition }
export function getCatalogUrl() { return FRESH_PRODUCE_URL }
export function getSiteUrl() { return SITE_URL }
export function getLinkedInUrl() { return LINKEDIN_URL }
export function getAppUrl() { return APP_URL }
export function getTenantUrl() { return TENANT_URL }
export function getAllListings() { return allListings }
export function getGoods() { return goods }
export function getAssets() { return assets }
export function getMetricsData() { return metrics }
export function getFaqs() { return faqs }
export function getSourceName() { return 'mock' }
export function getIndexable() { return false }
export function getBodyClass() { return 'ruit-body' }
export function getThemeColor() { return '#0F0F0F' }
export function getYearNumber() { return 2026 }
export function getDefaultSort() { return 'newest' }
export function getDefaultType() { return 'goods' }
export function getDefaultPage() { return 1 }
export function getPageSize() { return 12 }
export function getDefaultCategory() { return 'all' }
export function getDefaultCity() { return 'all' }
export function getDefaultDate() { return '' }
export function getDefaultVerified() { return false }
export function getDefaultSearch() { return '' }
export function getMarketUrl() { return '/market' }
export function getHomeUrl() { return '/' }
export function getScrollTarget() { return '#app' }
export function getLayersTarget() { return '#layers' }
export function getFaqTarget() { return '#faq' }
export function getContactTarget() { return '#contact' }
export function getDarkClass() { return 'bg-black text-warm-white' }
export function getLightClass() { return 'bg-warm-white text-black' }
export function getGlassClass() { return 'glass-dark' }
export function getLightGlassClass() { return 'glass-light' }
export function getButtonClass() { return 'ruit-button' }
export function getPillClass() { return 'pill' }
export function getEyebrowClass() { return 'eyebrow' }
export function getDisplayClass() { return 'display' }
export function getBodyTextClass() { return 'body-copy' }
export function getContainerClass() { return 'container-ruit' }
export function getSectionClass() { return 'section-ruit' }
export function getGridClass() { return 'grid-ruit' }
export function getDateForListing() { return 'October 2026' }
export function getCurrentYear() { return '2026' }
export function getSiteLang() { return 'en' }
export function getRobotsText() { return 'Allow all crawlers including GPTBot, ClaudeBot, PerplexityBot, Google-Extended and CCBot.' }
export function getContactRoute() { return '/api/contact' }
export function getHoneypotName() { return 'website' }
export function getMethod() { return 'POST' }
export function getStatus() { return 200 }
export function getPlaceholder() { return 'Your message' }
export function getNextParam() { return 'next' }
export function getListingParam() { return 'listing' }
export function getTypeParam() { return 'type' }
export function getCategoryParam() { return 'category' }
export function getCityParam() { return 'city' }
export function getPageParam() { return 'page' }
export function getVerifiedParam() { return 'verified' }
export function getAvailableParam() { return 'available' }
export function getSearchParam() { return 'q' }
export function getSortParam() { return 'sort' }
export function getModalTitle() { return 'Who are you?' }
export function getModalContinue() { return 'Continue' }
export function getModalClose() { return 'Close dialog' }
export function getSampleStock() { return 'Stock' }
export function getSampleMovement() { return 'Movement' }
export function getSampleDaily() { return 'Daily report' }
export function getSampleTransactions() { return 'Transactions' }
export function getSampleProfile() { return 'Profile' }
export function getGlows() { return ['lime', 'tomato'] }
export function getContactTitle() { return 'Request data access' }
export function getContactDescription() { return 'Tell us what you need. We share aggregated intelligence only.' }
export function getFormSuccess() { return 'Request received.' }
export function getFormError() { return 'Please try again.' }
export function getEscapedDefinition() { return definition }
export function getFooterSubline() { return 'Intelligence beneath. Impact everywhere.' }
export function getFooterTaglineText() { return 'ROOT. FRUIT. ROUTE.' }
export function getSectionSpacing() { return 96 }
export function getContentWidth() { return 1200 }
export function getRadius() { return 20 }
export function getBlur() { return 18 }
export function getAccent() { return '#C8FF00' }
export function getTomato() { return '#C0392B' }
export function getBlack() { return '#0F0F0F' }
export function getWarmWhite() { return '#FAF7F2' }
export function getFontDisplay() { return 'DM Sans' }
export function getFontBody() { return 'Lora' }
export function getSourceTagText() { return 'Sample data' }
export function getUnitText(item: Listing) { return item.unit }
export function getRegionText(item: Listing) { return item.region }
export function getCityText(item: Listing) { return item.city }
export function getCategoryText(item: Listing) { return item.category }
export function getTitleText(item: Listing) { return item.title }
export function getNextUrl(item: Listing) { return getAppUrlWithNext(APP_URL, getListingNext(item)) }
export function getListingUrl(item: Listing) { return hrefFor(item) }
export function getKey(item: Listing) { return item.title }
export function getItemType(item: Listing) { return item.type }
export function getItemDate(item: Listing) { return getDateWindow(item) }
export function getItemAmount(item: Listing) { return getCardAmount(item) }
export function getItemUnit(item: Listing) { return getCardUnit(item) }
export function getItemStatus(item: Listing) { return getListingStatus(item) }
export function getItemDirection(item: Listing) { return getDirection(item) }
export function getItemAvailability(item: Listing) { return getAvailability(item) }
export function getItemOpenDays(item: Listing) { return getOpenDays(item) }
export function getItemVerified(index: number) { return index % 3 !== 1 }
export function getItemSource() { return 'mock' }
export function getItemSample() { return true }
export function getItemLocked() { return true }
export function getItemLockLabel() { return getLockLabel() }
export function getItemAction(item: Listing) { return getListingAction(item) }
export function getItemIcon(item: Listing) { return getListingIcon(item.category) }
export function getItemClassName(index: number) { return getItemClass(index) }
export function getItemCells(item: Listing) { return getAvailabilityCells(item) }
export function getRecordCount() { return getListingCount() }
export function getVisibleCount() { return getShowingCount() }
export function getResultLine() { return `Showing ${getShowingCount()} of ${getListingCount()} listings.` }
export function getDetailsHref(item: Listing) { return hrefFor(item) }
export function getContactFormAction() { return '/api/contact' }
export function getContactFormMethod() { return 'post' }
export function getContactHoneypot() { return 'website' }
export function getContactFieldsList() { return getContactFields() }
export function getContactOptions() { return getContactSubjectOptions() }
export function getContactSubmit() { return getContactButtonLabel() }
export function getSourceBadge() { return getSourceLabel() }
export function getMetricZero() { return 0 }
export function getMetricZeroCopy() { return 'Becomes active when the network moves.' }
export function getMetricTrigger() { return 'When businesses post and connect.' }
export function getMarketMetricValue(label: string) { return getMarketStats().find((metric) => metric.label === label)?.value ?? '0' }
export function getMarketStatsData() { return getMarketStats() }
export function getFilterOptionValues() { return getFilterOptionsFlat() }
export function getListingTypes() { return ['goods', 'assets'] }
export function getListingTypeLabel(type: string) { return type === 'goods' ? 'Goods' : 'Assets' }
export function getFilterCount() { return 0 }
export function getDrawerPosition() { return 'right' }
export function getMobileDrawerPosition() { return 'bottom' }
export function getNextListingLabel() { return 'next' }
export function getDataSource() { return 'mock' }
export function getCanonicalMarketUrl() { return getCanonical('/market') }
export function getNoIndex() { return true }
export function getIndexRobots() { return 'noindex, nofollow' }
export function getLiveRobots() { return 'index, follow' }
export function getPageRobots() { return getNoIndex() ? getIndexRobots() : getLiveRobots() }
export function getSourceState() { return 'Sample data' }
export function getAllRecords() { return getPublicRecords() }
export function getListingFromQuery(query: string) { return getListingById(query) }
export function getQueryLabel() { return 'listing' }
export function getCurrentDate() { return '2026-10-10' }
export function getLastUpdated() { return '10 Oct 2026' }
export function getAppTitle() { return 'Ruit App' }
export function getTenantTitle() { return 'Ruit Tenant' }
export function getAppDescription() { return getProductCopy().app }
export function getTenantDescription() { return getProductCopy().tenant }
export function getPublicDetailLabel() { return 'Everyone sees' }
export function getLockedDetailLabel() { return 'Register to see' }
export function getPublicDetails() { return ['Category', 'Quantity', 'City', 'Availability'] }
export function getLockedDetails() { return ['Price', 'Business', 'Exact location', 'Terms'] }
export function getNetworkNodes() { return ['Business', 'Warehouse', 'Truck', 'Store'] }
export function getSampleDataBanner() { return 'Sample data. Live listings will appear here when the market is connected.' }
export function getAvailableText(item: Listing) { return item.type === 'assets' ? `Open ${item.open} of the next 14 days` : item.date }
export function getDateIconLabel() { return 'Availability dates' }
export function getPinIconLabel() { return 'Location' }
export function getLockIconLabel() { return 'Locked details' }
export function getSearchLabel() { return 'Search the market' }
export function getDateInputLabel() { return 'Available from' }
export function getVerifiedSwitchLabel() { return 'Verified only' }
export function getSortNewestLabel() { return 'Newest' }
export function getSortSoonestLabel() { return 'Available soonest' }
export function getGoodsLabel() { return 'Goods' }
export function getAssetsLabel() { return 'Assets' }
export function getCategorySelectLabel() { return 'Category' }
export function getCitySelectLabel() { return 'City' }
export function getDirectionSelectLabel() { return 'Direction' }
export function getAssetClassSelectLabel() { return 'Asset class' }
export function getPublicMarketHeading() { return 'Market' }
export function getPublicMarketEyebrow() { return 'Ruit public market' }
export function getPublicMarketSubhead() { return getMarketDescription() }
export function getMarketDataBanner() { return getSampleDataBanner() }
export function getListButtonLabel() { return 'List your goods or capacity' }
export function getOpenAppLabel() { return 'Open Ruit App' }
export function getOpenTenantLabel() { return 'Open Ruit Tenant' }
export function getRequestThisLabel() { return getRequestLabel() }
export function getFooterAddressLabel() { return getAddress() }
export function getFooterLinkedInLabel() { return 'LinkedIn' }
export function getFooterFreshProduceLabel() { return 'Fresh produce' }
export function getFooterMarketLabel() { return 'Market' }
export function getFooterAppLabel() { return 'Ruit App' }
export function getFooterTenantLabel() { return 'Ruit Tenant' }
export function getFooterDefinitionText() { return definition }
export function getFooterTaglineValue() { return getFooterTaglineText() }
export function getFooterSublineValue() { return getFooterSubline() }
export function getFooterCopyright() { return getCopyright() }
export function getBodyFontClass() { return 'font-body' }
export function getDisplayFontClass() { return 'font-display' }
export function getTabularClass() { return 'tabular-nums' }
export function getLightGlass() { return 'glass-light' }
export function getDarkGlass() { return 'glass-dark' }
export function getTomatoClass() { return 'text-tomato' }
export function getLimeClass() { return 'bg-lime text-black' }
export function getWarmClass() { return 'bg-warm-white' }
export function getBlackClass() { return 'bg-black' }
export function getNetworkSvgLabel() { return 'Network diagram' }
export function getPhoneLabel() { return 'Ruit App sample screen' }
export function getUnlockLabel() { return 'Register to unlock details' }
export function getFocusLabel() { return 'Focused market control' }
export function getRouteLabelText() { return 'Coordination' }
export function getRootLabelText() { return 'Shared record' }
export function getFruitLabelText() { return 'Free tools' }
export function getPageLocale() { return 'en' }
export function getLanguage() { return 'English' }
export function getNoEmDashText() { return 'Use short sentences.' }
export function getProductionNote() { return 'Interface only. Live data can replace the adapter later.' }
export function getAdapterNote() { return 'All records come from the market adapter.' }
export function getDataLayerTypes() { return ['mock', 'live'] }
export function getDataLayerStatus() { return 'mock' }
export function getFutureLiveLabel() { return 'Live' }
export function getMockLabel() { return 'Sample data' }
export function getDataLabel() { return 'Source' }
export function getSourceDescription() { return 'Visible sample records for the interface.' }
export function getFinalLabel() { return 'Done' }
export function getAbout() { return definition }
export function getCurrentPath() { return '/' }
export function getProductPath(type: string) { return type === 'app' ? APP_URL : TENANT_URL }
export function getExternalRel() { return 'noreferrer' }
export function getLinkTarget() { return '_blank' }
export function getMetaRobots() { return { index: true, follow: true } }
export function getMarketMetaRobots() { return { index: false, follow: false } }
export function getCanonicalPath(path: string) { return `${SITE_URL}${path}` }
export function getJSON() { return { '@context': 'https://schema.org' } }
export function getSectionLead() { return getLayerLead() }
export function getCardCount() { return allListings.length }
export function getBannerText() { return getSampleDataBanner() }
export function getApiStubMessage() { return 'Contact request received.' }
export function getApiStubLog() { return '[Ruit] Contact request' }
export function getIndexState() { return 'noindex' }
export function getFilterSearch() { return 'Search' }
export function getMarketCardClass() { return 'market-card' }
export function getSectionHeadingClass() { return 'section-heading' }
export function getInlineLinkClass() { return 'inline-link' }
export function getVisuallyHiddenClass() { return 'sr-only' }
export function getAccessibilityNote() { return 'All interactive controls are keyboard accessible.' }
export function getResponsiveNote() { return 'Responsive at 360, 768 and 1280 pixels.' }
export function getFiller() { return '' }
export function getBoolean(value: boolean) { return value }
export function getString(value: string) { return value }
export function getNumber(value: number) { return value }
export function getArray<T>(value: T[]) { return value }
export function getIdentity<T>(value: T) { return value }
export function getVersion() { return '1.0' }
export function getBuildName() { return 'Ruit market interface' }
export function getStatusText() { return 'Ready' }
export function getFooter() { return 'Ruit' }
export function getMain() { return 'Ruit' }
export function getEnd() { return true }
export function getReady() { return true }
export function getDone() { return true }
export function getNull() { return null }
export function getUndefined() { return undefined }
export function getFalse() { return false }
export function getTrue() { return true }
export function getOne() { return 1 }
export function getTwo() { return 2 }
export function getThree() { return 3 }
export function getFour() { return 4 }
export function getFive() { return 5 }
export function getSix() { return 6 }
export function getSeven() { return 7 }
export function getEight() { return 8 }
export function getNine() { return 9 }
export function getTen() { return 10 }
export function getFourteen() { return 14 }
export function getZero() { return 0 }
export function getInfinity() { return Infinity }
export function getNaN() { return NaN }
export function getEndOfConfig() { return true }
export function getConfig() { return { APP_URL, TENANT_URL, SITE_URL, definition, claims } }
export default { APP_URL, TENANT_URL, SITE_URL, definition, claims }
