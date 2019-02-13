import { testPermission } from './helpers';

export default class RBAC {
  constructor() {
    this.roles = {};
  }

  /**
   * Determine if the given role
   * can perform the given action
   *
   * @param {string} role
   * @param {object} action
   */
  can(role, action) {
    const { permissions } = this.roles[role];

    return permissions.some(permission => testPermission(permission, action));
  }

  /**
   * Register a new role
   *
   * @param {string} role
   * @param {array} permissions
   */
  registerRole(role, permissions) {
    const newRole = { permissions };

    this.roles[role] = newRole;
  }

  /**
   * Unregister a role
   *
   * @param {string} role
   */
  unregisterRole(role) {
    delete this.roles[role];
  }
}
