export const imageUrl = (url: string) => {
  return process.env.NEXT_PUBLIC_APP_ASSET_ENDPOINT + '/' + url;
}