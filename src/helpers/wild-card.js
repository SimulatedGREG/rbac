/**
 * Determine if given permission
 * contains a wildcard
 *
 * @param {string} permission
 * @return {boolean}
 */
export const hasWildCard = permission => permission.includes('*');

/**
 * Determine if given string
 * is a wildcard
 *
 * @param {string} string
 * @return {boolean}
 */
export const isWildCard = string => string === '*';
