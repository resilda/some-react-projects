import { useState, useEffect } from 'react';
import { CryptoCoin } from '../components/crypto-component-interfaces';
import { useCryptoListQuery } from '../state/services/api';

export default function useFetchBitcoinCrypto() {
  const [bitcoinCrypto, setBitcoinCrypto] = useState<CryptoCoin>();
  const { data: cryptoCoinResult, isLoading, isFetching } = useCryptoListQuery({});

  useEffect(() => {
    if (cryptoCoinResult && !isLoading && !isFetching) {
      setBitcoinCrypto(cryptoCoinResult);
    }
  }, [cryptoCoinResult, isLoading, isFetching]);

  return {
    bitcoinCrypto,
    isBitcoinCryptoLoading: isLoading,
    isBitcoinCryptoFetching: isFetching,
  };
}
