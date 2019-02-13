import { stringTest } from './index';

/**
 * Test a given permission
 * against a given action
 *
 * @param {string}
 * @param {string}
 * @return {boolean}
 */
export const testPermission = (permission, action) => {
  if (typeof permission === 'string') {
    return stringTest(permission, action);
  }

  return false;
};
