import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | MIKADO',
  defaultTitle: 'MIKADO',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@MikadoFinance',
    site: '@MikadoFinance',
  },
  openGraph: {
    title: 'Mikado Finance Leading native DEX on QUAI',
    description: 'Decentralize The Future Of Trade With Mikado Finance',
    images: [{ url: '' }],
  },
}
