/**
 * Created by hongpao on 2020/02/20.
 * 返回网关请求参数
 */
import GW from './gw-params'

class Gateway {
	params(v) {
		const methods = '?method=';
		const appkey = '&app_key=200800&';

		return methods + v + appkey + GW
	};
	otherEnter(v, key) {
		const methods = '?method=';
		const appkey = '&app_key=' + key + '&';

		return methods + v + appkey + GW
	}
}

const gateway = new Gateway()

export default gateway