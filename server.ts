import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { POPULAR_ETFS, getETFCoverData } from './src/etfData';

const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Get List of ETFs divided into ACTIVE and PASSIVE
app.get('/api/etfs', (req, res) => {
  res.json(POPULAR_ETFS);
});

// 2. Get ETF Holdings, Buy/Sell Difference (Today vs Yesterday) and 5-Day Change log
app.get('/api/etf/:code/holdings', async (req, res) => {
  try {
    const { code } = req.params;
    const date = (req.query.date as string) || '2026-06-19';

    const etf = POPULAR_ETFS.find(e => e.code.toUpperCase() === code.toUpperCase());
    if (!etf) {
      return res.status(404).json({ error: `ETF ${code} not found` });
    }

    const { holdings, fiveDayHistory } = await getETFCoverData(etf.code, date);

    res.json({
      etf,
      date,
      holdings,
      fiveDayHistory
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to resolve ETF metrics data' });
  }
});

// ---------------------------------------------------------
// Support Static files and dev servers
// ---------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ETF Tracker server running on port ${PORT}`);
  });
}

startServer();
