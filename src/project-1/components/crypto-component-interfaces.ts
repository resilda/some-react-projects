export interface CryptoCoinDataResult {
  data: Record<string, any>;
  status?: CrypoCoinStatus;
}

export interface CrypoCoinStatus {
  elapsed?: number;
  timestamp?: string;
}

export interface CryptoCoin {
  serialId: number;
  name: string;
  symbol?: string;
  slug: string;
  priceUsd: number;
  percantageChange: number;
}
