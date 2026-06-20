import { ETF, ETFHolding, FiveDayStockHistory, DailyHolding } from './types';

export const POPULAR_ETFS: ETF[] = [
  // Passive ETFs (被動式 ETF)
  {
    code: '0050',
    name: '元大台灣50',
    type: 'PASSIVE',
    region: 'TW',
    description: '挑選台灣上市股票中市值最大的 50 家公司，代表與台灣大盤高度同步之核心配售被動寬指基金。',
    category: '市值型被動型',
    aum: '3,850 億元',
    yield: '4.2%',
    frequency: '半年配'
  },
  {
    code: '0056',
    name: '元大高股息',
    type: 'PASSIVE',
    region: 'TW',
    description: '篩選預估整體股息殖利率高達前 50 名的優質成分股，老牌國民被動高息標竿。',
    category: '高息被動型',
    aum: '3,210 億元',
    yield: '8.1%',
    frequency: '季配'
  },
  {
    code: '00878',
    name: '國泰永續高股息',
    type: 'PASSIVE',
    region: 'TW',
    description: '追蹤 MSCI 台灣 ESG 永續高股息精選 30 指數，兼顧優良永續評級與高股息優勢。',
    category: 'ESG被動高息',
    aum: '3,450 億元',
    yield: '7.8%',
    frequency: '季配'
  },
  {
    code: '00919',
    name: '群益台灣精選高息',
    type: 'PASSIVE',
    region: 'TW',
    description: '精選台股中具高度現金流、發放宣告高殖利率的 30 大高股息成分配比。',
    category: '高股息被動型',
    aum: '2,100 億元',
    yield: '10.3%',
    frequency: '季配'
  },
  {
    code: '00929',
    name: '復華台灣科技優息',
    type: 'PASSIVE',
    region: 'TW',
    description: '聚焦具備領先優勢、配息政策大方的台灣科技與高端電子產品企業。',
    category: '科技被動型',
    aum: '1,850 億元',
    yield: '9.2%',
    frequency: '月配'
  },
  {
    code: 'TAIEX',
    name: '台灣加權報酬指數',
    type: 'PASSIVE',
    region: 'TW',
    description: '包含台股整體加權上市股票之股息再投資總回報指標 benchmark，作為全市場配比參考。',
    category: '大盤總回報指數',
    aum: '不適用',
    yield: '3.8%',
    frequency: '無配息'
  },

  // Active ETFs (主動式 ETF)
  {
    code: '00991A',
    name: '主動復華未來50',
    type: 'ACTIVE',
    region: 'TW',
    description: '主動式精選未來 50 大具備高成長動能之產業頭部企業，追求長期複合資本利得。',
    category: '主動型成長',
    aum: '150 億元',
    yield: '6.5%',
    frequency: '月配'
  },
  {
    code: '00981A',
    name: '主動統一台股增長',
    type: 'ACTIVE',
    region: 'TW',
    description: '統一投信專業團隊主動操盤，精細擇股择時，追求超越大盤之台股長期資本暴發。',
    category: '主動型增長',
    aum: '185 億元',
    yield: '6.8%',
    frequency: '年配'
  },
  {
    code: '00982A',
    name: '主動群益台灣強棒',
    type: 'ACTIVE',
    region: 'TW',
    description: '經理人靈活多空防禦，高度關注營運拐點、高成長、具爆發潜力的台股中堅強棒星級股。',
    category: '主動型靈活調倉',
    aum: '120 億元',
    yield: '7.2%',
    frequency: '季配'
  },
  {
    code: '00992A',
    name: '主動群益科技創新',
    type: 'ACTIVE',
    region: 'TW',
    description: '聚焦半導體、AI晶片及下世代半導體供應鏈、前沿硬體設計等，精選最富主動彈性創新股。',
    category: '主動型科技',
    aum: '142 億元',
    yield: '5.8%',
    frequency: '不配息'
  },
  {
    code: '00987A',
    name: '主動台新優勢成長',
    type: 'ACTIVE',
    region: 'TW',
    description: '著重被市場低估、長線向上趨勢清晰的成長骨幹，靈活控制高持股配比追求獲利極大化。',
    category: '主動型擇優增長',
    aum: '95 億元',
    yield: '6.0%',
    frequency: '月配'
  },
  {
    code: '00980A',
    name: '主動野村臺灣優選',
    type: 'ACTIVE',
    region: 'TW',
    description: '野村投信代表巨作，不拘泥於特定族群、不被指數局限，由經理人深度篩選營運暴發期黑馬股。',
    category: '主動型跨產業優選',
    aum: '168 億元',
    yield: '7.0%',
    frequency: '季配'
  },
  {
    code: '00985A',
    name: '主動野村台灣50',
    type: 'ACTIVE',
    region: 'TW',
    description: '野村頂尖量化與質化研究團隊結合，主動選出基本面最核心、安全邊際最高的50大個股。',
    category: '主動型旗艦大盤',
    aum: '110 億元',
    yield: '6.2%',
    frequency: '月配'
  },
  {
    code: '00984A',
    name: '主動安聯台灣高息',
    type: 'ACTIVE',
    region: 'TW',
    description: '安聯投信專家團隊發揮卓越選股能力，追求豐沛資本增值與極具競爭力之分紅高配息。',
    category: '主動型高股息',
    aum: '215 億元',
    yield: '8.5%',
    frequency: '月配'
  },
  {
    code: '00400A',
    name: '主動國泰動能高息',
    type: 'ACTIVE',
    region: 'TW',
    description: '國泰投信團隊精細配置高股息因子與價格上攻動能因子，建構主動式優選模合。',
    category: '主動型動能高息',
    aum: '80 億元',
    yield: '7.5%',
    frequency: '月配'
  },
  {
    code: '00401A',
    name: '主動摩根台灣鑫收',
    type: 'ACTIVE',
    region: 'TW',
    description: '結合摩根全球調配視野，追求最大化股息現金流收益，同時規避景氣衰退個股。',
    category: '主動鑫收平衡',
    aum: '95 億元',
    yield: '6.9%',
    frequency: '月配'
  },
  {
    code: '00403A',
    name: '主動統一升級50',
    type: 'ACTIVE',
    region: 'TW',
    description: '統一投信重磅打造，動態鎖定大盤前 50 大核心企業並透過主動經理配比升級持有。',
    category: '主動升級50',
    aum: '130 億元',
    yield: '6.3%',
    frequency: '季配'
  },
  {
    code: '00993A',
    name: '主動安聯台灣',
    type: 'ACTIVE',
    region: 'TW',
    description: '高超的主動分析能力，動態配置台股龍頭、先進半導體、雲端伺服器及內需龍頭企業。',
    category: '主動旗艦龍頭',
    aum: '280 億元',
    yield: '5.5%',
    frequency: '年配'
  },
  {
    code: '00994A',
    name: '主動第一金台股優',
    type: 'ACTIVE',
    region: 'TW',
    description: '第一金團隊精選基本面優、具估值安全邊際與爆發拉升前景之中大型骨幹。',
    category: '主動精選個股',
    aum: '75 億元',
    yield: '6.4%',
    frequency: '季配'
  },
  {
    code: '00995A',
    name: '主動中信台灣卓越',
    type: 'ACTIVE',
    region: 'TW',
    description: '中信投信主動追尋高潛能股票，規避被動持股劣勢，追求領先的跨週期優異超額收益。',
    category: '主動超額利潤',
    aum: '145 億元',
    yield: '7.1%',
    frequency: '月配'
  },
  {
    code: '00996A',
    name: '主動兆豐台灣豐收',
    type: 'ACTIVE',
    region: 'TW',
    description: '兆豐投信專家主動配置，靈活在成長性與高分紅中取得平衡，多重資產保駕護航。',
    category: '主動多重平衡',
    aum: '110 億元',
    yield: '7.6%',
    frequency: '季配'
  },
  {
    code: '00999A',
    name: '主動野村臺灣高息',
    type: 'ACTIVE',
    region: 'TW',
    description: '野村操盤大作，擺脫傳統高息指數股息高成長差的問題，主動挑選未來殖利率、利潤俱全者。',
    category: '主動優選高息',
    aum: '125 億元',
    yield: '8.2%',
    frequency: '月配'
  }
];

export const STOCK_NAMES: Record<string, string> = {
  '2330': '台積電', '2454': '聯發科', '2317': '鴻海', '2382': '廣達', '2308': '台達電',
  '2881': '富邦金', '2882': '國泰金', '2303': '聯電', '2379': '瑞昱', '3034': '聯詠',
  '4938': '和碩', '2377': '微星', '2301': '光寶科', '2912': '統一超', '2345': '智邦',
  '2324': '仁寶', '3231': '緯創', '3711': '日月光投控', '2357': '華碩', '2376': '技嘉',
  '2347': '聯強', '1303': '南亞', '2603': '長榮', '2890': '永豐金', '2891': '中信金',
  '2886': '兆豐金', '5871': '中租-KY', '3008': '大立光', '2201': '裕隆', '2395': '研華',
  '1513': '中興電', '1504': '東元', '1101': '台泥', '2002': '中鋼', '2609': '陽明',
  '2618': '長榮航', '5274': '信驊', '3661': '世芯-KY', '2353': '宏碁',
  // Expanded 50 stocks from MoneyDJ holding
  '2327': '國巨', '2383': '台光電', '6223': '旺矽', '6669': '緯穎', '3017': '奇鋐',
  '3037': '欣興', '2368': '金像電', '3665': '貿聯-KY', '8046': '南電', '6274': '台燿',
  '3653': '健策', '6515': '穎崴', '6510': '精測', '6805': '富世達', '8210': '勤誠',
  '2449': '京元電子', '3533': '嘉澤', '8996': '高力', '6187': '萬潤', '6147': '頎邦',
  '3443': '創意', '8150': '南茂', '5439': '高技', '4966': '譜瑞-KY', '4958': '臻鼎-KY',
  '6278': '台表科', '1590': '亞德客-KY', '8358': '金居', '6271': '同欣電', '6191': '精成科',
  '6488': '環球晶', '3264': '欣銓', '3376': '新日興', '2313': '華通', '1815': '富喬',
  '2481': '強茂', '2439': '美律', '5347': '世界'
};

const INDUSTRY_MAP: Record<string, string> = {
  '2330': '半導體', '2454': '半導體', '2317': '電腦周邊/EMS', '2382': '電腦周邊/伺服器',
  '2308': '電子零組件', '2881': '金融控股', '2882': '金融控股', '2303': '半導體',
  '2379': 'IC設計', '3034': 'IC設計', '4938': '電腦周邊', '2377': '主機板',
  '2301': '光電/電源', '2912': '百貨通路', '2345': '網通設備', '2324': '電腦周邊',
  '3231': 'AI伺服器', '3711': '半導體封測', '2357': '品牌電腦', '2376': '顯示卡',
  '2347': '電子通路', '1303': '塑膠工業', '2603': '航運貨櫃', '2890': '金融控股',
  '2891': '金融控股', '2886': '金融控股', '5871': '海外融資租賃', '3008': '精密光學',
  '2201': '汽車工業', '2395': '工業電腦', '1513': '重電綠能', '1504': '電機機械',
  '1101': '水泥工業', '2002': '鋼鐵工業', '2609': '航運貨櫃', '2618': '航空運輸',
  '5274': 'IC設計/伺服器', '3661': 'IC設計/矽智財', '2353': '品牌電腦',
  // Expanded 50 stocks
  '2327': '被動元件', '2383': '銅箔基板(CCL)', '6223': '探針卡/測試', '6669': '高階伺服器', '3017': '散熱模組',
  '3037': 'IC載板', '2368': '印刷電路板(PCB)', '3665': '連接線組', '8046': 'IC載板', '6274': '銅箔基板(CCL)',
  '3653': '散熱均熱片', '6515': '半導體自具', '6510': '晶圓測試板', '6805': '精密軸承', '8210': '伺服器機殼',
  '2449': '半導體封測', '3533': '精密連接器', '8996': '綠能熱傳導', '6187': '半導體設備', '6147': '驅動IC封測',
  '3443': '晶片設計/ASIC', '8150': '記憶體封測', '5439': '多層電路板', '4966': '高速傳輸IC', '4958': '軟性電路板',
  '6278': 'SMT打件導裝', '1590': '自動化氣動', '8358': '電解銅箔', '6271': '陶瓷基板封裝', '6191': '記憶體零組件',
  '6488': '矽晶圓製造', '3264': '積體電路測試', '3376': '摺疊機軸承', '2313': '高階電路板', '1815': '電子級玻纖布',
  '2481': '二極體/晶圓', '2439': '電聲/藍牙耳機', '5347': '特殊晶圓代工'
};

const BASE_PRICES: Record<string, number> = {
  '2330': 950.0, '2454': 1380.0, '2317': 202.0, '2382': 310.0,
  '2308': 380.0, '2881': 82.5, '2882': 64.0, '2303': 52.0,
  '2379': 540.0, '3034': 590.0, '4938': 105.0, '2377': 185.0,
  '2301': 118.0, '2912': 282.0, '2345': 560.0, '2324': 35.8,
  '3231': 112.0, '3711': 162.0, '2357': 490.0, '2376': 295.0,
  '2347': 80.5, '1303': 53.0, '2603': 195.0, '2890': 23.5,
  '2891': 35.5, '2886': 41.2, '5871': 240.2, '3008': 2450.0,
  '2201': 65.5, '2395': 385.0, '1513': 195.0, '1504': 48.2,
  '1101': 32.5, '2002': 23.8, '2609': 72.4, '2618': 36.5,
  '5274': 3150.0, '3661': 2680.0, '2353': 46.5,
  // Expanded 50 stocks prices
  '2327': 680.0, '2383': 420.0, '6223': 610.0, '6669': 1950.0, '3017': 620.0,
  '3037': 152.0, '2368': 205.0, '3665': 380.0, '8046': 168.0, '6274': 162.0,
  '3653': 1210.0, '6515': 1020.0, '6510': 520.0, '6805': 780.0, '8210': 285.0,
  '2449': 115.0, '3533': 1410.0, '8996': 342.0, '6187': 320.0, '6147': 68.0,
  '3443': 1180.0, '8150': 41.5, '5439': 102.0, '4966': 720.0, '4958': 122.0,
  '6278': 115.0, '1590': 860.0, '8358': 62.0, '6271': 138.0, '6191': 64.0,
  '6488': 465.0, '3264': 68.0, '3376': 210.0, '2313': 74.0, '1815': 22.5,
  '2481': 61.2, '2439': 112.0, '5347': 92.5
};

// Hand-tuned base constituents to provide exceptional realism for a few key ETFs
const ETF_CONSTITUENTS_MAP: Record<string, string[]> = {
  '0050': ['2330', '2317', '2454', '2308', '2382', '2881', '2882', '2303', '3711', '2891'],
  '0056': ['2454', '3034', '2379', '4938', '2301', '2317', '2912', '2345', '2324', '3231'],
  '00878': ['2357', '2324', '3231', '2347', '2382', '2454', '1303', '2882', '2301', '2890'],
  '00919': ['2603', '2454', '2303', '3034', '3711', '2382', '2301', '3231', '4938', '2609'],
  '00929': ['2454', '2379', '3034', '2382', '2301', '2303', '3711', '3231', '2357', '2377'],
  '00991A': ['2330', '2317', '2454', '2382', '2308', '3711', '3231', '2379', '3008', '5274', '3661'],
  '00981A': ['2330', '2317', '2881', '2454', '2382', '2301', '2345', '2603', '1513', '3711', '2891'],
  '00982A': ['2330', '2317', '3231', '2382', '2376', '2379', '1513', '2603', '3008', '5274', '3533']
};

export function getSeededRandom(strKey: string) {
  let hash = 0;
  for (let i = 0; i < strKey.length; i++) {
    hash = strKey.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (Math.abs(hash % 1000) / 1000);
}

// Ensure every single ETF has a valid, full selection of stocks
export function getETFConstituents(code: string): string[] {
  const allSymbols = Object.keys(STOCK_NAMES);
  const selected: string[] = [];

  // Decide target constituent count (e.g. 30 to 35) based on ETF code
  let targetCount = 30;
  if (code.includes('50') || code.includes('0050') || code.includes('TAIEX')) {
    targetCount = 35;
  } else if (code.includes('高息') || code.includes('豐收') || code.includes('鑫收')) {
    targetCount = 28;
  } else {
    const numSeed = getSeededRandom(code + 'target_count');
    targetCount = Math.floor(numSeed * 6) + 28; // 28 to 33
  }

  // 1. Add any predefined constituents first
  const predefined = ETF_CONSTITUENTS_MAP[code] || [];
  predefined.forEach(sym => {
    if (allSymbols.includes(sym) && !selected.includes(sym)) {
      selected.push(sym);
    }
  });

  // 2. Deterministically backfill the rest to reach the targetCount
  for (let i = 0; i < 110; i++) {
    if (selected.length >= targetCount) break;
    const seed = getSeededRandom(code + 'constituents_backfill_v2_' + i.toString());
    const targetIdx = Math.floor(seed * allSymbols.length);
    const sym = allSymbols[targetIdx];
    if (sym && !selected.includes(sym)) {
      selected.push(sym);
    }
  }

  // 3. Fallback to just returning everything if targetCount not met
  if (selected.length < 15) {
    allSymbols.forEach(sym => {
      if (!selected.includes(sym)) {
        selected.push(sym);
      }
    });
  }

  return selected.slice(0, Math.min(targetCount, allSymbols.length));
}

// Generates 5-day history grouped by Stock (e.g. 台積電, with daily holdings changes + indicators)
export function generateFiveDayChangesByStock(code: string, constituents: string[]): FiveDayStockHistory[] {
  // Consecutives 5 days: June 15 to June 19
  const dates = ['6/14', '6/15', '6/16', '6/17', '6/18', '6/19'];

  return constituents.map((symbol) => {
    // Generate simulated holding quantities for 6 days so we can compare 6/15 to 6/14, 6/16 to 6/15, etc.
    const baseMul = getSeededRandom(code + symbol + 'holding_base') * 13000 + 1500; // e.g. base shares 1,500 to 14,500張/股
    
    // Determine the historical daily holding counts
    const dailyHoldings: DailyHolding[] = [];

    // Let's compute holdings for all 6 days
    const tempSharesList: number[] = [];
    const tempAmountsList: number[] = [];

    dates.forEach((dateStr, idx) => {
      const daySeed = getSeededRandom(code + symbol + dateStr + 'daily_move');
      // Daily swing -5% to +5%
      const swing = (daySeed - 0.49) * 0.08; 
      const shares = Math.floor(baseMul * (1 + swing));
      
      const price = BASE_PRICES[symbol] || 100;
      // Taiwan units: clicks are counted as "張數" (thousands of shares).
      // Amount = (Price * shares * 1000) / 10000 = (Price * shares) / 10 (萬元)
      const amountOnDay = Number((price * shares / 10).toFixed(1));

      tempSharesList.push(shares);
      tempAmountsList.push(amountOnDay);
    });

    // Save index 1 to 5 as the 5 target days (6/15, 6/16, 6/17, 6/18, 6/19)
    for (let j = 1; j <= 5; j++) {
      const currentDateString = dates[j]; // '6/15', '6/16', etc.
      const currentShares = tempSharesList[j];
      const prevShares = tempSharesList[j - 1];
      
      let compareStatus: 'UP' | 'DOWN' | 'EQUAL' = 'EQUAL';
      if (currentShares > prevShares) {
        compareStatus = 'UP';
      } else if (currentShares < prevShares) {
        compareStatus = 'DOWN';
      }

      dailyHoldings.push({
        date: currentDateString,
        shares: currentShares,
        amount: tempAmountsList[j],
        compareStatus
      } as any); // cast safely to include compareStatus
    }

    return {
      symbol,
      name: STOCK_NAMES[symbol] || symbol,
      history: dailyHoldings
    };
  });
}

export const REAL_EXCEL_00981A_HOLDINGS_SOURCE = [
  { symbol: '2330', weight: 9.68, sharesHeld: 11960000 },
  { symbol: '2327', weight: 8.67, sharesHeld: 23892000 },
  { symbol: '2383', weight: 8.44, sharesHeld: 4486000 },
  { symbol: '2454', weight: 7.17, sharesHeld: 4861000 },
  { symbol: '2345', weight: 5.18, sharesHeld: 6334000 },
  { symbol: '6223', weight: 4.91, sharesHeld: 2279000 },
  { symbol: '2308', weight: 4.75, sharesHeld: 6572000 },
  { symbol: '6669', weight: 4.29, sharesHeld: 2492000 },
  { symbol: '3017', weight: 4.18, sharesHeld: 5191000 },
  { symbol: '3037', weight: 4.05, sharesHeld: 12466000 },
  { symbol: '2303', weight: 3.78, sharesHeld: 77390000 },
  { symbol: '2368', weight: 3.78, sharesHeld: 8315000 },
  { symbol: '3711', weight: 3.70, sharesHeld: 17948000 },
  { symbol: '3665', weight: 3.41, sharesHeld: 4833848 },
  { symbol: '8046', weight: 3.18, sharesHeld: 10828000 },
  { symbol: '6274', weight: 3.12, sharesHeld: 5058000 },
  { symbol: '3653', weight: 3.02, sharesHeld: 2267000 },
  { symbol: '5274', weight: 2.69, sharesHeld: 422000 },
  { symbol: '6515', weight: 1.38, sharesHeld: 436000 },
  { symbol: '6510', weight: 1.13, sharesHeld: 930000 },
  { symbol: '6805', weight: 1.07, sharesHeld: 1811000 },
  { symbol: '8210', weight: 1.04, sharesHeld: 2267000 },
  { symbol: '2449', weight: 0.67, sharesHeld: 6484000 },
  { symbol: '3533', weight: 0.66, sharesHeld: 852000 },
  { symbol: '2317', weight: 0.66, sharesHeld: 7307000 },
  { symbol: '8996', weight: 0.55, sharesHeld: 1034000 },
  { symbol: '6187', weight: 0.55, sharesHeld: 1334000 },
  { symbol: '6147', weight: 0.53, sharesHeld: 6275000 },
  { symbol: '3443', weight: 0.42, sharesHeld: 258000 },
  { symbol: '8150', weight: 0.41, sharesHeld: 11635000 },
  { symbol: '5439', weight: 0.39, sharesHeld: 3528000 },
  { symbol: '4966', weight: 0.38, sharesHeld: 1642000 },
  { symbol: '4958', weight: 0.31, sharesHeld: 1428000 },
  { symbol: '6278', weight: 0.30, sharesHeld: 4334000 },
  { symbol: '1590', weight: 0.25, sharesHeld: 530000 },
  { symbol: '8358', weight: 0.23, sharesHeld: 980000 },
  { symbol: '6271', weight: 0.16, sharesHeld: 1966000 },
  { symbol: '6191', weight: 0.13, sharesHeld: 3988000 },
  { symbol: '6488', weight: 0.13, sharesHeld: 350000 },
  { symbol: '3264', weight: 0.12, sharesHeld: 1508000 },
  { symbol: '3376', weight: 0.12, sharesHeld: 1741000 },
  { symbol: '2002', weight: 0.03, sharesHeld: 5163000 },
  { symbol: '2313', weight: 0.03, sharesHeld: 329000 },
  { symbol: '1815', weight: 0.00, sharesHeld: 107000 },
  { symbol: '2382', weight: 0.00, sharesHeld: 1000 },
  { symbol: '2481', weight: 0.00, sharesHeld: 5000 },
  { symbol: '3008', weight: 0.00, sharesHeld: 1000 },
  { symbol: '2439', weight: 0.00, sharesHeld: 18000 },
  { symbol: '3661', weight: 0.00, sharesHeld: 1000 },
  { symbol: '5347', weight: 0.00, sharesHeld: 1000 }
];

export async function fetchLiveMoneyDJHoldings(code: string): Promise<{ symbol: string; name: string; weight: number; sharesHeld: number }[]> {
  // Disabled for Vercel deployment: keep data identical to the AI Studio simulated/fallback view.
  // MoneyDJ live scraping may return different live holdings or be blocked by CORS/hosting,
  // so we intentionally use the deterministic built-in ETF data below.
  return [];

  const cleanCode = code.replace(/\.TW$/i, '').toUpperCase();
  const etfid = `${cleanCode}.TW`;
  
  // Try both Basic0007B.xdjhtm (listed in excel) or Basic0007.xdjhtm if needed
  const url = `https://www.moneydj.com/ETF/X/Basic/Basic0007B.xdjhtm?etfid=${etfid}`;
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 seconds limit

    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`MoneyDJ responded with status ${res.status}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    // MoneyDJ encodes as Big5/CP950
    let html = '';
    try {
      const decoder = new TextDecoder('big5');
      html = decoder.decode(arrayBuffer);
    } catch {
      const decoder = new TextDecoder('utf-8');
      html = decoder.decode(arrayBuffer);
    }

    // Parse the HTML similar to the PowerQuery (M) language logic from the user
    const rows = html.split(/<tr/i);
    const dataRows = rows.filter(r => r.toUpperCase().includes('.TW'));

    const items: { symbol: string; name: string; weight: number; sharesHeld: number }[] = [];

    const cleanText = (str: string): string => {
      let val = str.replace(/<[^>]*>/g, ''); // strip HTML tags
      val = val.replace(/&nbsp;/gi, '');
      val = val.replace(/&amp;/gi, '&');
      val = val.replace(/[\r\n]/g, '');
      return val.trim();
    };

    const codeRegex = /\(([^.()]+)\.TW\)/i;

    for (const r of dataRows) {
      const parts = r.split(/<td/i).slice(1);
      const cells = parts.map(p => {
        const end = p.toLowerCase().indexOf('</td>');
        const raw = end !== -1 ? p.substring(0, end) : p;
        return cleanText(raw);
      }).filter(c => c !== '');

      if (cells.length >= 3) {
        const companyField = cells[0]; // e.g. "台積電(2330.TW)"
        const weightField = cells[1];  // e.g. "9.68"
        const sharesField = cells[2];  // e.g. "11,960,000"

        if (companyField.toUpperCase().includes('.TW')) {
          const match = companyField.match(codeRegex);
          const symbolCode = match ? match[1].trim() : '';
          const nameOnly = companyField.split('(')[0].trim().replace(/\*$/, '');

          const weightVal = parseFloat(weightField.replace(/%/g, ''));
          const sharesVal = parseInt(sharesField.replace(/,/g, ''), 10) || 0;

          if (symbolCode && !isNaN(weightVal)) {
            items.push({
              symbol: symbolCode,
              name: nameOnly || STOCK_NAMES[symbolCode] || symbolCode,
              weight: weightVal,
              sharesHeld: sharesVal
            });
          }
        }
      }
    }

    if (items.length > 0) {
      console.log(`Successfully scraped ${items.length} items from MoneyDJ for ${code}`);
      return items;
    }
  } catch (error: any) {
    console.warn(`Scraping MoneyDJ failed or timed out: ${error?.message || error}. Falling back to default data.`);
  }

  return [];
}

export async function getETFCoverData(code: string, date: string): Promise<{ holdings: ETFHolding[]; fiveDayHistory: FiveDayStockHistory[] }> {
  const isTaiwan = true;
  const isMainlyActive = POPULAR_ETFS.find(e => e.code.toUpperCase() === code.toUpperCase())?.type === 'ACTIVE';

  let resolvedHoldingsSource: { symbol: string; weight: number; name?: string; sharesHeld?: number }[] = [];

  // Try live scrape first!
  const scraped = await fetchLiveMoneyDJHoldings(code);
  if (scraped && scraped.length > 0) {
    resolvedHoldingsSource = scraped;
  } else {
    // Robust fallbacks based on ETF code
    if (code === '00981A' || code === '00403A') {
      resolvedHoldingsSource = REAL_EXCEL_00981A_HOLDINGS_SOURCE;
    } else {
      // Simulate/Generate high quality holdings for other codes (e.g. 0050, 0056) dynamically
      const constituents = getETFConstituents(code);
      const rawWeights = constituents.map((sym, idx) => {
        const seed = getSeededRandom(code + sym);
        const decayFactor = Math.pow(0.85, idx);
        return 15 * decayFactor * (0.5 + seed * 1.0);
      });

      const sumRaw = rawWeights.reduce((a, b) => a + b, 0);
      const initialNormalizedList = constituents.map((sym, idx) => {
        const normWeight = (rawWeights[idx] / sumRaw) * 100;
        return {
          symbol: sym,
          weight: Number(Math.max(normWeight, 0.15).toFixed(2))
        };
      });

      const sumAfterMax = initialNormalizedList.reduce((a, item) => a + item.weight, 0);
      const normalizedList = initialNormalizedList.map(item => ({
        symbol: item.symbol,
        weight: Number(((item.weight / sumAfterMax) * 100).toFixed(2))
      })).sort((a, b) => b.weight - a.weight);

      const finalSum = normalizedList.reduce((a, item) => a + item.weight, 0);
      const diff = Number((100 - finalSum).toFixed(2));
      if (diff !== 0 && normalizedList.length > 0) {
        normalizedList[0].weight = Number((normalizedList[0].weight + diff).toFixed(2));
      }

      // Populate resolved source
      resolvedHoldingsSource = normalizedList.map(item => {
        const isSelectedActive = code.startsWith('009') || code.endsWith('A');
        const multiplier = isSelectedActive ? 15000 : 35000;
        const randSeed = getSeededRandom(item.symbol + 'shares_held');
        const estShares = Math.floor(item.weight * (0.8 + randSeed * 0.4) * multiplier);

        return {
          symbol: item.symbol,
          weight: item.weight,
          sharesHeld: estShares
        };
      });
    }
  }

  const holdings: ETFHolding[] = [];

  resolvedHoldingsSource.forEach((item, idx) => {
    const sym = item.symbol;
    const rSeed = getSeededRandom(sym + 'today');
    const rPrevSeed = getSeededRandom(sym + 'yesterday');

    const currentWeight = item.weight;
    // Back-estimate a realistic yesterday's weight
    const prevWeight = Number((item.weight * (1 + (rPrevSeed - 0.5) * 0.05)).toFixed(2));
    const weightDiff = Number((currentWeight - prevWeight).toFixed(2));

    // Prices
    const basePrice = BASE_PRICES[sym] || 120;
    const priceChangeToday = Number(((getSeededRandom(sym + 'price_change') - 0.48) * 4).toFixed(2));
    const priceToday = Number((basePrice * (1 + (priceChangeToday / 100))).toFixed(2));
    const prevPrice = Number((priceToday / (1 + (priceChangeToday / 100))).toFixed(2));

    // Shares changes (in units of 張)
    const volumeMultiplier = isMainlyActive ? 3.5 : 1.1;
    let shares = 0;
    let actionState: ETFHolding['action'] = 'HOLD';

    if (Math.abs(weightDiff) > 0.12) {
      actionState = weightDiff > 0 ? 'BUY' : 'SELL';
      shares = Math.floor(180 * Math.abs(weightDiff) * volumeMultiplier);
    } else if (Math.abs(weightDiff) > 0.03) {
      actionState = weightDiff > 0 ? 'BUY' : 'SELL';
      shares = Math.floor(80 * Math.abs(weightDiff) * volumeMultiplier);
    } else {
      actionState = 'HOLD';
      shares = Math.floor(12 * rSeed * volumeMultiplier);
    }

    if (shares === 0) {
      shares = Math.floor(5 + rSeed * 8);
      actionState = rSeed > 0.5 ? 'BUY' : 'SELL';
    }

    const amount = Number((priceToday * shares / 10).toFixed(1));

    holdings.push({
      symbol: sym,
      name: item.name || STOCK_NAMES[sym] || sym,
      weight: currentWeight,
      prevWeight: prevWeight,
      weightChange: weightDiff,
      price: priceToday,
      prevPrice: prevPrice,
      priceChange: priceChangeToday,
      sharesChanged: actionState === 'SELL' ? -shares : shares,
      amountChanged: amount,
      action: actionState,
      industry: INDUSTRY_MAP[sym] || '電子其他',
      sharesHeld: item.sharesHeld
    });
  });

  // Calculate 5-Day history using resolved constituents
  const finalConstituents = resolvedHoldingsSource.map(h => h.symbol);
  const fiveDayHistory = generateFiveDayChangesByStock(code, finalConstituents);

  return {
    holdings,
    fiveDayHistory
  };
}
