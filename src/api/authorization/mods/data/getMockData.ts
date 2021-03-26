/**
 * @description 获取mock数据
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '../../../../common';

const backEndUrl = serverConfig()['authorization'];

export const init = [];

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/data/mock', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}