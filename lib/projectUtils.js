export const parseCategories = (categoryString) => {
  if (!categoryString) return [];
  return categoryString.split(',').map(cat => cat.trim());
};