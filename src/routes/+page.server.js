export const prerender = true;

export const load = async () => {
  const posts = await fetch(`https://pl.maop.fr/wp-json/wp/v2/posts`).then(
    (r) => r.json(),
  );

  return {
    posts,
  };
};
