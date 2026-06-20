import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, Search, ArrowRight, Layers, 
  Activity, ArrowUpRight, ArrowDownRight, RefreshCw, Layers2,
  Calendar, DollarSign, Briefcase, Sparkles, Sliders, Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ETF, ETFHolding, FiveDayStockHistory } from './types';
import { POPULAR_ETFS, getETFCoverData } from './etfData';

export default function App() {
  // ETFs Lists state
  const [etfs, setEtfs] = useState<ETF[]>([]);
  const [selectedType, setSelectedType] = useState<'PASSIVE' | 'ACTIVE'>('PASSIVE');
  const [selectedEtf, setSelectedEtf] = useState<ETF | null>(null);
  
  // Date parameter
  const [selectedDate] = useState<string>('2026-06-19');
  
  // Core tables data states
  const [holdings, setHoldings] = useState<ETFHolding[]>([]);
  const [fiveDayHistory, setFiveDayHistory] = useState<FiveDayStockHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 1. Load initial ETFs list directly from local data.
  // This removes the dependency on /api/etfs, so the app can run on Vercel as a static Vite site.
  useEffect(() => {
    setEtfs(POPULAR_ETFS);

    const firstPassive = POPULAR_ETFS.find(e => e.type === 'PASSIVE');
    if (firstPassive) {
      setSelectedEtf(firstPassive);
    } else if (POPULAR_ETFS.length > 0) {
      setSelectedEtf(POPULAR_ETFS[0]);
    }
  }, []);

  // 2. Load ETF data directly from local functions.
  // This removes the dependency on /api/etf/:code/holdings.
  const fetchData = async () => {
    if (!selectedEtf) return;

    setLoading(true);

    try {
      const data = await getETFCoverData(selectedEtf.code, selectedDate);
      setHoldings(data.holdings || []);
      setFiveDayHistory(data.fiveDayHistory || []);
    } catch (err) {
      console.error('Error resolving holdings metrics:', err);
      setHoldings([]);
      setFiveDayHistory([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedEtf, selectedDate]);

  // Handle switching between Passive & Active segments
  const handleTypeChange = (type: 'PASSIVE' | 'ACTIVE') => {
    setSelectedType(type);
    const firstOfSelectedType = etfs.find(e => e.type === type);
    if (firstOfSelectedType) {
      setSelectedEtf(firstOfSelectedType);
    }
  };

  // Filter ETFs displayed in selectors list
  const currentCategoryEtfs = etfs.filter(e => e.type === selectedType);

  // Search filtered holdings
  const filteredHoldings = holdings.filter(h => {
    const q = searchQuery.toLowerCase();
    return h.name.toLowerCase().includes(q) || h.symbol.toLowerCase().includes(q) || h.industry.toLowerCase().includes(q);
  });

  // Today VS Yesterday buy/sell list
  const buySellMovements = filteredHoldings.filter(h => h.action === 'BUY' || h.action === 'SELL' || h.action === 'ADDED' || h.action === 'DELETED');

  // Search filtered 5-day stock history
  const filteredHistory = fiveDayHistory.filter(f => {
    const q = searchQuery.toLowerCase();
    return f.name.toLowerCase().includes(q) || f.symbol.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 font-sans antialiased">
      {/* Background Top Gradient Decorator */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-teal-50/80 to-transparent pointer-events-none -z-10" />

      {/* Main Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-950 rounded-xl text-white shadow-sm">
              <Briefcase className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 font-display flex items-center gap-2">
                ETF 追蹤器
              </h1>
              <p className="text-xs text-slate-500 font-medium">即時比對最新昨日與今日交易，剖析近五日成分股股數與配比金額趨勢表</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input Filter */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="輸入代碼/個股名稱過濾..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-100 placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 border border-transparent focus:bg-white transition-all font-medium"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-[10px] text-slate-400 hover:text-slate-600 font-bold"
                >
                  清除
                </button>
              )}
            </div>

            {/* Manual Reload */}
            <button
              onClick={fetchData}
              disabled={loading}
              className="p-2 border border-slate-200 bg-white rounded-lg text-slate-600 hover:text-slate-900 transition-colors disabled:opacity-50"
              title="重新載入"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

        {/* SECTION A: Segment Switcher (Passive / Active) */}
        <section className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5 justify-center sm:justify-start">
              <Sliders className="w-4 h-4 text-teal-600" />
              篩選 ETF 營運屬性
            </h3>
            <p className="text-xs text-slate-400 font-medium">切換主動式經理基金（Active）與傳統被動複製指數基金（Passive）</p>
          </div>

          <div className="flex items-center bg-slate-100 p-1 rounded-xl w-full sm:w-auto shrink-0 max-w-sm">
            <button
              onClick={() => handleTypeChange('PASSIVE')}
              className={`flex-1 sm:flex-none px-6 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                selectedType === 'PASSIVE'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Layers className="w-4 h-4 text-teal-600" />
              被動式 ETF (Passive)
            </button>
            <button
              onClick={() => handleTypeChange('ACTIVE')}
              className={`flex-1 sm:flex-none px-6 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                selectedType === 'ACTIVE'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Activity className="w-4 h-4 text-amber-500" />
              主動式 ETF (Active)
            </button>
          </div>
        </section>

        {/* SECTION B: Horizontal Selector Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {currentCategoryEtfs.map((etf) => {
            const isSelected = selectedEtf?.code === etf.code;

            return (
              <button
                key={etf.code}
                onClick={() => setSelectedEtf(etf)}
                className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between h-[105px] ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white shadow-md scale-[1.02]'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] font-extrabold px-1.5 py-0.5 rounded leading-none ${
                      isSelected ? 'bg-teal-500 text-slate-950' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {etf.code}
                    </span>
                    <span className={`text-[9px] font-bold ${isSelected ? 'text-teal-300' : 'text-slate-400'}`}>
                      {etf.region === 'TW' ? '台股市場' : '境外市場'}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs mt-2 truncate max-w-full font-display">
                    {etf.name}
                  </h4>
                </div>

                <div className="flex items-center justify-between text-[10px] mt-1 border-t pt-1 border-slate-100/10">
                  <span className={isSelected ? 'text-slate-400' : 'text-slate-500'}>
                    殖利率: <strong className={isSelected ? 'text-white' : 'text-slate-700 font-mono'}>{etf.yield}</strong>
                  </span>
                  <span className={isSelected ? 'text-slate-300' : 'text-slate-400'}>
                    {etf.frequency}
                  </span>
                </div>

                {isSelected && (
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping" />
                )}
              </button>
            );
          })}
        </section>

        {/* Selected target ETF Info Banner */}
        {selectedEtf && (
          <div className="space-y-6">
            
            {/* Target ETF Overview Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-6 shadow-sm border border-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase bg-teal-400 text-slate-900 px-2 py-0.5 rounded">
                    {selectedEtf.type === 'PASSIVE' ? '指指被動追蹤' : '高階主動經理操盤'}
                  </span>
                  <span className="text-xs text-teal-400 font-bold tracking-wider font-mono">
                    {selectedEtf.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight font-display flex items-center gap-2">
                  {selectedEtf.name} <span className="font-mono text-xl text-slate-450">({selectedEtf.code})</span>
                </h2>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  {selectedEtf.description}
                </p>
              </div>

              {/* Minimal metrics stats */}
              <div className="grid grid-cols-2 md:flex md:items-center gap-6 divide-x divide-slate-800 shrink-0">
                <div className="px-3">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">資產規模 (AUM)</span>
                  <span className="text-lg font-mono font-bold text-teal-300">{selectedEtf.aum}</span>
                </div>
                <div className="px-3 pl-6">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">配息頻率</span>
                  <span className="text-sm font-semibold block text-slate-200">{selectedEtf.frequency}</span>
                  <span className="text-xs font-mono text-slate-400 font-bold block">{selectedEtf.yield} 預估殖利率</span>
                </div>
              </div>
            </div>

            {/* Grid display of exactly the 3 metrics components requested */}
            {loading ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-24 text-center flex flex-col items-center justify-center gap-3">
                <RefreshCw className="w-8 h-8 text-teal-500 animate-spin" />
                <p className="text-slate-600 text-xs font-bold">加載全成分股配置及近五日異動指標中...</p>
              </div>
            ) : (
              <div className="space-y-8">
                
                {/* 1. FIRST TABLE - 成分股全列表 (Lists' constituents entirely) */}
                <section className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Layers2 className="w-4 h-4 text-slate-700" />
                      <h3 className="text-sm font-black text-slate-900 font-display">
                        一、{selectedEtf.name} ({selectedEtf.code}) 最新全成分股配置配比表
                      </h3>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase font-mono">
                      更新時間: 2026-06-19 收盤定價
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100/60 text-slate-500 font-bold border-b border-slate-200 select-none">
                          <th className="p-4 pl-6">股票代碼</th>
                          <th className="p-4">發行公司名稱</th>
                          <th className="p-4">產業分類別</th>
                          <th className="p-4 text-right">今日最新權重比 (%)</th>
                          <th className="p-4 text-right">昨日權重比 (%)</th>
                          <th className="p-4 text-right">持有股數</th>
                          <th className="p-4 text-right">今日收盤價</th>
                          <th className="p-4 text-right pr-6">今日漲跌幅 (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono">
                        {filteredHoldings.length === 0 ? (
                          <tr>
                            <td colSpan={8} className="text-center py-12 text-slate-400 font-sans">
                              無匹配的成分股標的项目。
                            </td>
                          </tr>
                        ) : (
                          filteredHoldings.map((h) => {
                            const isPositive = h.priceChange >= 0;

                            return (
                              <tr key={h.symbol} className="hover:bg-slate-50/70 transition-all">
                                <td className="p-4 pl-6 font-bold text-slate-600">
                                  {h.symbol}
                                </td>
                                <td className="p-4 font-extrabold text-slate-900 font-sans">
                                  {h.name}
                                </td>
                                <td className="p-4 font-sans">
                                  <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-semibold">
                                    {h.industry}
                                  </span>
                                </td>
                                <td className="p-4 text-right font-black text-slate-950">
                                  {h.weight}%
                                </td>
                                <td className="p-4 text-right text-slate-400">
                                  {h.prevWeight}%
                                </td>
                                <td className="p-4 text-right text-slate-700 font-medium">
                                  {h.sharesHeld ? `${h.sharesHeld.toLocaleString()} 股` : '--'}
                                </td>
                                <td className="p-4 text-right font-medium text-slate-700">
                                  NT$ {h.price.toLocaleString()}
                                </td>
                                <td className={`p-4 text-right pr-6 font-extrabold ${
                                  isPositive ? 'text-rose-600' : 'text-emerald-600'
                                }`}>
                                  <span className="flex items-center justify-end gap-0.5">
                                    {isPositive ? <ArrowUpRight className="w-3 h-3 text-rose-500" /> : <ArrowDownRight className="w-3 h-3 text-emerald-500" />}
                                    {isPositive ? '+' : ''}{h.priceChange}%
                                  </span>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 2. SECOND TABLE - 今日與昨日的買進賣出異動表 */}
                <section className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-teal-600 animate-pulse" />
                      <h3 className="text-sm font-black text-slate-900 font-display">
                        二、今日與昨日的買進賣出異動明細表 (Daily Trade Balance)
                      </h3>
                    </div>
                    <span className="text-[10px] text-slate-450 bg-slate-150 px-2.5 py-0.5 rounded-full font-bold">
                      今日 vs 昨日更動權重及估計交易流向
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100/60 text-slate-500 font-bold border-b border-slate-200 select-none">
                          <th className="p-4 pl-6">代碼</th>
                          <th className="p-4">股票名稱</th>
                          <th className="p-4 text-right">權重比淨變動 (本日減昨日)</th>
                          <th className="p-4 text-center">估計交易操作方向</th>
                          <th className="p-4 text-right">估計變化張數 / 股數</th>
                          <th className="p-4 text-right pr-6">估計變動金額 (萬元)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono">
                        {buySellMovements.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="text-center py-12 text-slate-400 font-sans">
                              今日未產生顯著雙日重組加減持動作。
                            </td>
                          </tr>
                        ) : (
                          buySellMovements.map((item) => {
                            const isBuy = item.sharesChanged >= 0;

                            return (
                              <tr key={item.symbol} className="hover:bg-slate-50/70 transition-all">
                                <td className="p-4 pl-6 font-bold text-slate-600">
                                  {item.symbol}
                                </td>
                                <td className="p-4 font-bold text-slate-900 font-sans">
                                  {item.name}
                                </td>
                                <td className={`p-4 text-right font-extrabold ${
                                  item.weightChange > 0 ? 'text-rose-600' : item.weightChange < 0 ? 'text-emerald-600' : 'text-slate-500'
                                }`}>
                                  {item.weightChange > 0 ? '+' : ''}{item.weightChange}%
                                </td>
                                <td className="p-4 text-center">
                                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-black tracking-wide leading-none ${
                                    isBuy 
                                      ? 'bg-rose-50 text-rose-700 border border-rose-100' 
                                      : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                  }`}>
                                    {isBuy ? (
                                      <>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-rose-500" />
                                        買進加碼
                                      </>
                                    ) : (
                                      <>
                                        <ArrowDownRight className="w-3.5 h-3.5 text-emerald-500" />
                                        賣出調節
                                      </>
                                    )}
                                  </span>
                                </td>
                                <td className={`p-4 text-right font-black ${isBuy ? 'text-rose-700' : 'text-emerald-700'}`}>
                                  {isBuy ? '+' : ''}{item.sharesChanged.toLocaleString()} 
                                  <span className="text-[10px] font-normal text-slate-400 font-sans ml-1">張</span>
                                </td>
                                <td className="p-4 text-right font-bold text-slate-900 pr-6">
                                  {item.amountChanged.toLocaleString()} 
                                  <span className="text-[10px] font-normal text-slate-450 font-sans ml-1">萬元</span>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 3. THIRD TABLE - 近5日的成分股變化表(股數與金額) [STOCK-CENTRIC MATRIX VIEW] */}
                <section className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-rose-600" />
                      <h3 className="text-sm font-black text-slate-900 font-display">
                        三、近 5 日成分股持股變化趨勢表 (以個股為核心觀測單位)
                      </h3>
                    </div>
                    <span className="text-[10px] text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded font-bold uppercase">
                      紅色：比前一日多 / 綠色：比前一日少
                    </span>
                  </div>

                  <div className="p-4 bg-teal-50/50 border-b border-slate-200 flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">使用提示：</strong>
                      此矩陣以個股為觀測主體，橫向追蹤 5 個交易日的持股張數。每一天的增減對比均與<span className="underline decoration-teal-500 underline-offset-2 decoration-2">前一日</span>數據進行精準比較，高於前一日持股則標註為<span className="text-rose-600 font-bold bg-rose-50 px-1 rounded">紅色加碼</span>，低於前一日則標註為<span className="text-emerald-600 font-bold bg-emerald-50 px-1 rounded">綠色減持</span>。
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-100/60 text-slate-500 font-bold border-b border-slate-200 select-none">
                          <th className="p-4 pl-6 w-36">股票代碼</th>
                          <th className="p-4">股票名稱</th>
                          {/* 5 consecutive days */}
                          <th className="p-4 text-right">6/15 (週一)</th>
                          <th className="p-4 text-right">6/16 (週二)</th>
                          <th className="p-4 text-right">6/17 (週三)</th>
                          <th className="p-4 text-right">6/18 (週四)</th>
                          <th className="p-4 text-right pr-6">6/19 (週五)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono">
                        {filteredHistory.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="text-center py-12 text-slate-400 font-sans">
                              無匹配的 5 日變化觀測標的项目。
                            </td>
                          </tr>
                        ) : (
                          filteredHistory.map((stockHist) => {
                            return (
                              <tr key={stockHist.symbol} className="hover:bg-slate-50/70 transition-all">
                                <td className="p-4 pl-6 font-bold text-slate-600">
                                  {stockHist.symbol}
                                </td>
                                <td className="p-4 font-black text-slate-900 font-sans">
                                  {stockHist.name}
                                </td>

                                {/* Render 5 day cells */}
                                {stockHist.history.map((day, idx) => {
                                  const status = (day as any).compareStatus; // 'UP', 'DOWN', 'EQUAL'
                                  
                                  let bgClass = 'bg-slate-50 text-slate-500';
                                  let textClass = 'text-slate-600';
                                  let icon = null;

                                  if (status === 'UP') {
                                    bgClass = 'bg-rose-50 text-rose-800 border-rose-100';
                                    textClass = 'text-rose-700 font-extrabold';
                                    icon = <ArrowUpRight className="w-2.5 h-2.5 text-rose-500" />;
                                  } else if (status === 'DOWN') {
                                    bgClass = 'bg-emerald-50 text-emerald-800 border-emerald-100';
                                    textClass = 'text-emerald-700 font-extrabold';
                                    icon = <ArrowDownRight className="w-2.5 h-2.5 text-emerald-500" />;
                                  }

                                  return (
                                    <td key={idx} className={`p-4 text-right ${idx === 4 ? 'pr-6' : ''}`}>
                                      <div className={`inline-flex flex-col items-end px-2.5 py-1.5 rounded-lg border border-transparent ${bgClass} transition-colors min-w-[76px]`}>
                                        <span className={`text-[11px] leading-tight flex items-center gap-0.5 ${textClass}`}>
                                          {idx > 0 && icon}
                                          {day.shares.toLocaleString()} 張
                                        </span>
                                        <span className="text-[9px] text-slate-400 mt-0.5 font-normal">
                                          {day.amount.toLocaleString()} 萬
                                        </span>
                                      </div>
                                    </td>
                                  );
                                })}

                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </section>

              </div>
            )}

          </div>
        )}

      </main>

      {/* Footer Disclaimer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="text-xs text-slate-400 font-medium">
            ETF 追蹤器 © 2026. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-450 italic">
            本服務所提供之成分股更動、交易股數、張數以及變動金額，均為模擬及統計數據分析估計值，不構成任何真實交易、融資或投資建議。
          </p>
        </div>
      </footer>
    </div>
  );
}
