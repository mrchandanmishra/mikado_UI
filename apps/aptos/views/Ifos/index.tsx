import { useTranslation } from '@pancakeswap/localization'
import { SubMenuItems } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Hero from './components/Hero'
import IfoProvider from './contexts/IfoContext'

export const IfoPageLayout = ({ children }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const isExact = router.route === '/ifo'

  const subMenuItems = useMemo(
    () => [
      {
        label: t('Latest'),
        href: '/ifo',
      },
      {
        label: t('Finished'),
        href: '/ifo/history',
      },
    ],
    [t],
  )

  return (
    <IfoProvider>
      <PageMeta title={t('Initial Farm Offering')} />
      <SubMenuItems items={subMenuItems} activeItem={isExact ? '/ifo' : '/ifo/history'} />
      <Hero />
      {children}
    </IfoProvider>
  )
}
