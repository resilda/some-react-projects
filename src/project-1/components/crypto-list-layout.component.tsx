import React, { useMemo, useState } from 'react';
import useFetchBitcoinCrypto from '../hooks/useFetchBitcoinCrypto';
import { createCryptoCoinsList } from './crypto-component-functions';
import { CryptoCoin } from './crypto-component-interfaces';

export default function CryptoListLayout() {
  const [cryptoCoinsList, setCryptoCoinsList] = useState<CryptoCoin[]>();
  const [newCryptoCoin, setNewCryptoCoin] = useState<CryptoCoin>();
  const { bitcoinCrypto, isBitcoinCryptoLoading, isBitcoinCryptoFetching } = useFetchBitcoinCrypto();

  useMemo(() => {
    if (!isBitcoinCryptoLoading && !isBitcoinCryptoFetching)
      setCryptoCoinsList(createCryptoCoinsList(bitcoinCrypto, newCryptoCoin));
  }, [bitcoinCrypto, newCryptoCoin, isBitcoinCryptoLoading, isBitcoinCryptoFetching]);

  const layoutWrapper = 'flex flex-col justify-center items-center gap-5';
  const title = 'text-primary-1 font-bold self-center mt-6 text-2xl';
  const cryptoCoinTemplate =
    'flex flex-col items-center box-content p-4 ring-2 border-primary-2 ring-primary-3 hover:bg-primary-3 cursor-pointer';

  return (
    <div className={layoutWrapper}>
      <h1 className={title}>Crypto List</h1>
      {isBitcoinCryptoLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex flex-wrap gap-x-4">
            {cryptoCoinsList?.map((cryptoCoin) => {
              return (
                <div key={cryptoCoin.serialId} className={cryptoCoinTemplate}>
                  <h3>{cryptoCoin?.name}</h3>
                  <p>{cryptoCoin.percantageChange} %</p>
                  <p>{cryptoCoin.priceUsd} USD</p>
                </div>
              );
            })}
          </div>
          <p className="hover:text-primary-1 cursor-pointer">+ Add new crypto coin</p>
        </>
      )}
    </div>
  );
}
