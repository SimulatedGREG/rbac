import {
  hasWildCard,
  isWildCard,
  transformActionToObject,
} from './index';

export const stringTest = (permission, action) => {
  if (permission === action) {
    return true;
  }

  if (hasWildCard(permission)) {
    const permissionObj = transformActionToObject(permission);
    const actionObj = transformActionToObject(action);

    /**
     * If permission & action are the same resource,
     * then grant access when permission method is *.
     */
    if (permissionObj.resource === actionObj.resource) {
      return isWildCard(permissionObj.method);
    }

    /**
     * If permission resource is *,
     * then grant access when permission method
     * & action method are the same.
     */
    if (isWildCard(permissionObj.resource)) {
      return permissionObj.method === actionObj.method;
    }
  }

  return false;
};
