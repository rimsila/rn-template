/**
 * @description 获取ResourceRole列表（含分页）
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.PagingEntity();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.post(
    backEndUrl + '/role/resource/listByBusinessValues',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params,
    },
  );
  return result;
}