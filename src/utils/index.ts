export const imageUrl = (url: string) => {
  return process.env.NEXT_PUBLIC_APP_ASSET_ENDPOINT + '/' + url;
}


export const servicesRouteMapping: Record<number, { name: string; slug: string }> = {
  1: { name: "Premier Pet Care Plan", slug: "premier-pet-care-plan" },
  2: { name: "Training", slug: "training" },
  4: { name: "Post2Pet", slug: "post2pet" },
  5: { name: "Technology", slug: "technology" },
};