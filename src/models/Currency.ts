export interface CurrencyDTO {
  [key: string]: {
    code: string;
    codein: string;
    name: string;
    high: number;
    low: number;
    varBid: number;
    pctChange: number;
    bid: number;
    ask: number;
    timestamp: string;
    create_date: Date;
  };
}

export interface Currency {
  code: string;
  name: string;
  valueInBRL: number;
  variationPercentage: number;
  lastUpdate: number;
}
