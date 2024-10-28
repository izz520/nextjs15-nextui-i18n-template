// useClientTranslation
import { useMemo } from 'react'

import { useTranslation } from '@/i18n/client'

import useLanguage from './useLanguage'

const useClientTranslation = (translationKey: string | string[] = 'common') => {
  const { lng } = useLanguage()
  const { t, i18n } = useTranslation(lng, translationKey)
  return useMemo(() => {
    return {
      t,
      i18n,
    }
  }, [lng, translationKey])
}

export default useClientTranslation
