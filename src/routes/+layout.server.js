export const prerender = true

export const load = async () => {
  const fetchPost = async () => {
      const res = await fetch(`https://pl.maop.fr/wp-json/wp/v2/pages?slug=header`)
      const data = await res.json()
      return data[0]
  }
  const fetchPost2 = async () => {
    const res = await fetch(`https://pl.maop.fr/wp-json/wp/v2/pages?slug=subscribe`)
    const data = await res.json()
    return data[0]
}

  return {
      header: fetchPost(),
      subscribe: fetchPost2(),
  }
}
