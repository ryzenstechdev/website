export const getAssetPath = (path: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/website' : '';
  return `${basePath}${path}`;
}; 