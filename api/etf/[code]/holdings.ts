import { POPULAR_ETFS, getETFCoverData } from '../../../src/etfData';

export const config = {
  maxDuration: 10,
};

export default async function handler(req: any, res: any) {
  try {
    const codeParam = req.query?.code;
    const code = Array.isArray(codeParam) ? codeParam[0] : codeParam;
    const dateParam = req.query?.date;
    const date = Array.isArray(dateParam) ? dateParam[0] : (dateParam || '2026-06-19');

    if (!code) {
      return res.status(400).json({ error: 'Missing ETF code' });
    }

    const etf = POPULAR_ETFS.find(e => e.code.toUpperCase() === String(code).toUpperCase());
    if (!etf) {
      return res.status(404).json({ error: `ETF ${code} not found` });
    }

    const { holdings, fiveDayHistory } = await getETFCoverData(etf.code, String(date));

    return res.status(200).json({
      etf,
      date,
      holdings,
      fiveDayHistory,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: error?.message || 'Failed to resolve ETF metrics data',
    });
  }
}
