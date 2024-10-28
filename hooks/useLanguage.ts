//useLanguage
import { useParams, usePathname, useRouter } from 'next/navigation'

import { ILanguages } from '@/i18n/config'
import { getPath } from '@/libs/common/getPath'

const useLanguage = () => {
  const params = useParams()
  const path = usePathname()
  const router = useRouter()
  const changeLanguage = (lng: ILanguages) => {
    const newPath = getPath(path)
    console.log('newPath', newPath)

    router.push(`/${lng}${newPath}`)
  }
  return {
    lng: params.lng as ILanguages,
    changeLanguage,
  }
}

export default useLanguage
