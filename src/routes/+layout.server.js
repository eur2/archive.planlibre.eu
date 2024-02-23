export const prerender = true;

export const load = async () => {
  const header = await fetch(
    `https://pl.maop.fr/wp-json/wp/v2/pages?slug=header`,
  ).then((r) => r.json());
  const subscribe = await fetch(
    `https://pl.maop.fr/wp-json/wp/v2/pages?slug=subscribe`,
  ).then((r) => r.json());

  return {
    header,
    subscribe,
  };
};
