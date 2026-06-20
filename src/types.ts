export interface ETF {
  code: string;
  name: string;
  type: 'ACTIVE' | 'PASSIVE'; // 主動式 or 被動式
  region: 'TW' | 'US';
  description: string;
  category: string;
  aum: string;
  yield: string;
  frequency: string;
}

export interface ETFHolding {
  symbol: string;
  name: string;
  weight: number;          // 今日權重 (%)
  prevWeight: number;      // 昨日權重 (%)
  weightChange: number;    // 權重增減 (%)
  price: number;           // 今日股價
  prevPrice: number;       // 昨日股價
  priceChange: number;     // 股價漲跌幅 (%)
  sharesChanged: number;   // 今日估計買賣股數/張數
  amountChanged: number;   // 今日估計變動金額 (萬元 or 千美金)
  action: 'BUY' | 'SELL' | 'HOLD' | 'ADDED' | 'DELETED';
  industry: string;
  sharesHeld?: number;     // 絕對持有股數 (e.g. 11,960,000)
}

export interface DailyHolding {
  date: string;            // 日期 (例如 "6/15")
  shares: number;          // 持股張數/股數
  amount: number;          // 金額 (萬元/千美金)
}

export interface FiveDayStockHistory {
  symbol: string;
  name: string;
  history: DailyHolding[]; // 5天的資料 (由舊到新：D1, D2, D3, D4, D5)
}
