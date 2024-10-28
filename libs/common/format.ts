import dayjs from 'dayjs'

import { IAddress } from '@/types/IAddress'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)
/**
 * eg. 0x00A34dA88DDCd6b18094259CDc91c0730c955A8b -> 0x00A34...5A8b
 * @param address IAddress
 * @returns string
 */
export const formatAddress = (address: IAddress): string => {
  if (!address) return '0x'
  if (address === '0x') return '0x'
  const start = address.slice(0, 7)
  const end = address.slice(-4)
  return `${start}...${end}`
}

/**
 * eg. 0x53aE934bB7Da...250dB79993530
 * @param address IAddress
 * @returns string
 */
export const formatHash = (address: IAddress): string => {
  if (!address) return ''
  const start = address.slice(0, 14)
  const end = address.slice(-13)
  return `${start}...${end}`
}

/**
 * eg. 578...9979
 * @param tokenId string
 * @returns string
 */
export const formatTokenId = (tokenId: string) => {
  if (!tokenId) return ''
  const start = tokenId?.toString().slice(0, 3)
  const end = tokenId?.toString().slice(-4)
  return `${start}...${end}`
}

/**
 * eg. 0.05889->0.0588 ALG
 * @param price number | string
 * @param chainId IChain
 * @param isWrapper boolean
 * @param decimal number
 * @returns string
 */
export const formatToSymbol = (price: number | string, symbol: string, decimal = 4) => {
  const numericPrice = typeof price === 'string' ? parseFloat(price || '0') : price
  let truncatedNum = Math.floor(numericPrice * 10000) / 10000
  truncatedNum = parseFloat(truncatedNum.toFixed(decimal))
  return `${truncatedNum} ${symbol}`
}

/**
 * eg. 0.1111111->0.1111
 * @param price number | string
 * @param decimal number
 * @returns number
 */
export const formatToDecimal = (price: number | string, decimal = 4) => {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price
  let truncatedNum = Math.floor(numericPrice * 10000) / 10000
  truncatedNum = parseFloat(truncatedNum.toFixed(decimal))
  return truncatedNum
}

/**
 * 1720169041 -> '3d 4h 16m 11s'
 * @param time number | string
 * @returns string
 */
export const formatTimeToCountdown = (timestamp: number | string) => {
  const now = dayjs()
  const targetTime = dayjs(typeof timestamp === 'number' ? timestamp * 1000 : timestamp)
  const diff = targetTime.diff(now)
  const isExpired = diff < 0

  const duration = dayjs.duration(diff)
  const days = isExpired ? 0 : Math.floor(duration.asDays())
  const hours = isExpired ? 0 : duration.hours()
  const minutes = isExpired ? 0 : duration.minutes()
  const seconds = isExpired ? 0 : duration.seconds()

  return {
    days,
    hours,
    minutes,
    seconds,
    format: `${days}d ${hours}h ${minutes}m ${seconds}s`,
  }
}

/**
 * 2024-01-01 -> 1640995200
 * @param timestamp number| string
 * @returns number
 */
export const formatTimeStamp = (time?: number | string | Date) => {
  const timeTemp = time || Date.now()
  return dayjs(timeTemp).unix()
}
/**
 *
 * @param count
 * @returns
 */
export function formatCount(count: number, space?: boolean) {
  if (count >= 1000) {
    const formattedCount = (count / 1000).toFixed(1)
    return formattedCount.endsWith('.0')
      ? formattedCount.slice(0, -2) + `${space ? ' K' : 'K'}`
      : formattedCount + `${space ? ' K' : 'K'}`
  }
  return count.toString()
}

export const getChangeChainId = (chainId: number) => {
  switch (chainId) {
    case 1:
      return 'ethereum'
    case 137:
      return 'matic'
    default:
      return 'ethereum'
  }
}
export function formatNumber(num: number) {
  const numStr = num.toString()
  if (numStr.includes('.')) {
    const [integerPart, decimalPart] = numStr.split('.')
    if (decimalPart.length > 5) {
      return `${integerPart}.${decimalPart.slice(0, 5)}`
    }
    return numStr
  }
  return numStr
}
/**
 * format date seconds to date string
 * @param seconds number
 * @returns
 */
export function formatTimestampForSeconds(seconds: number) {
  return dayjs.unix(seconds).format('M/D/YYYY, h:mm A')
}

export const formatDate = (date: string | number | Date) => {
  return dayjs(date).format('YYYY/MM/DD')
}
