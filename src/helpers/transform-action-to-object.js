/**
 * Transform the given action
 * into a method/resource string
 *
 * @param {string} action
 * @return {object}
 */
export const transformActionToObject = action => {
  const [resource, method] = action.split(':');

  return {
    method,
    resource,
  };
};
