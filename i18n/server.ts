import { initReactI18next } from 'react-i18next/initReactI18next'

import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'

import { getOptions, ILanguages } from './config'

const initI18next = async (lng: ILanguages, ns: string | string[]) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function useTranslation(lng: ILanguages, ns: string, options: any = {}) {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance,
  }
}
