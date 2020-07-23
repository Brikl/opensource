// Transform next route to netlify redirect syntax
export const transformRoute = (route: string, baseUrl = ''): string => {
  const transformed = route
    .replace(/\/\[\.{3}(.*)](.json)?$/, '/:$1/*')
    .replace(/\/\[{2}\.{3}(.*)]{2}(.json)?$/, '*')
    .replace(/\/\[(.*?)]/g, '/:$1')

  return `${baseUrl}${transformed}`
}
