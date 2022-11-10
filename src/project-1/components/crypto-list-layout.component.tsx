import React from 'react';
import { useCryptoListQuery } from '../state/services/api';

export default function CryptoListLayout() {
  const { data } = useCryptoListQuery({});
  console.log(data);

  return <h1>CryptoList</h1>;
}
