export const prerender = true

export const load = async () => {
  const fetchPosts = async () => {
      const res = await fetch(`https://pl.maop.fr/wp-json/wp/v2/posts`)
      const data = await res.json()
      return data
  }

  return {
      posts: fetchPosts(),
  }
}


