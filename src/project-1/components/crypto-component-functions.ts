import { CryptoCoin, CryptoCoinDataResult } from './crypto-component-interfaces';

/**
 * Crypto data fetched from `/assets/btc/metrics` API
 * @param cryptoCoinResult as CryptoCoinDataResult
 * @returns Bitcoin crypto result transformed into a simpler JSON
 */
export function createCryptoElement(cryptoCoinResult: CryptoCoinDataResult) {
  const cryptoCoinData = cryptoCoinResult.data;
  const cryptoCoinStatus = cryptoCoinResult.status;

  return {
    serialId: cryptoCoinData.serial_id,
    name: cryptoCoinData.name,
    slug: cryptoCoinData.symbol,
    priceUsd: cryptoCoinData.market_data.price_usd,
    percantageChange: cryptoCoinData.market_data.percent_change_usd_last_24_hours,
    timestamp: cryptoCoinStatus?.timestamp,
  };
}

/**
 * Create a crypto coins list with the ones fetched from API and crypto coins added by user
 * @param bitcoinCrypto bitcoin crypto result fetched from API
 * @param crypto new crypto coin created by user
 * @returns total crypto coins list
 */
export function createCryptoCoinsList(bitcoinCrypto?: CryptoCoin, crypto?: CryptoCoin) {
  let cryptoCoinsList: CryptoCoin[] = [];
  if (bitcoinCrypto) {
    cryptoCoinsList.push(bitcoinCrypto);
  }

  if (crypto) {
    cryptoCoinsList.push(crypto);
  }

  return cryptoCoinsList;
}
