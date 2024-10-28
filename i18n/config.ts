export const fallbackLng = 'en' //设置默认的语言，如果用户url不带语言，默认会使用这个语言
export const languages = [fallbackLng, 'zh-CN', 'zh-TW'] //设置支持的语言列表
export const defaultNS = 'translation'
export const cookieName = 'i18next'
export type ILanguages = 'en' | 'zh-CN' | 'zh-TW' //typescript可以导出这个类型，以便后续使用

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
