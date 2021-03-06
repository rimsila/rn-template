/**
 * @description 获取用户所有的数据角色Id
 */

import { initRequest } from '../../../../common';
import Config from 'react-native-config';

const backEndUrl = Config['authorization'];

// 初始值
export const init = [];
// 接口地址
export const url = '/deployment/authz/getUserRoleIdList';

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/deployment/authz/getUserRoleIdList', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
