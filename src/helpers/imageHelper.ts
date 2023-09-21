// tokens
import ada from 'src/assets/images/tokens/ada.png';
import bnb from 'src/assets/images/tokens/bnb.png';
import btc from 'src/assets/images/tokens/btc.png';
import doge from 'src/assets/images/tokens/doge.png';
import dot from 'src/assets/images/tokens/dot.png';
import eth from 'src/assets/images/tokens/eth.png';
import icp from 'src/assets/images/tokens/icp.png';
import matic from 'src/assets/images/tokens/matic.png';
import sol from 'src/assets/images/tokens/sol.png';
import usdt from 'src/assets/images/tokens/usdt.png';
import xrp from 'src/assets/images/tokens/xrp.png';

export function getTokenImage(token: string) {
	switch (token) {
		case 'ada':
			return ada;
		case 'bnb':
			return bnb;
		case 'btc':
			return btc;
		case 'doge':
			return doge;
		case 'dot':
			return dot;
		case 'eth':
			return eth;
		case 'icp':
			return icp;
		case 'matic':
			return matic;
		case 'sol':
			return sol;
		case 'usdt':
			return usdt;
		case 'xrp':
			return xrp;
		default:
			return null;
	}
}
