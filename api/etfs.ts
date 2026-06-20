import { POPULAR_ETFS } from '../src/etfData';

export default function handler(req: any, res: any) {
  return res.status(200).json(POPULAR_ETFS);
}
