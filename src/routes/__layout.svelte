<script context="module">
	export const prerender = true;
	export const router = false;


	export async function load({ fetch }) {
		const res = await fetch('https://pl.maop.fr/wp-json/wp/v2/pages');
		return {
			props: {
				posts: await res.json()
			}
		};
	}
</script>

<script>
	  import Header from "$lib/Header.svelte";
  import Subscribe from "$lib/Subscribe.svelte";
  import Logo from "$lib/Logo.svelte";
  export let posts;
	import '../app.css';
</script>

<Header>
	{#each posts as post} {#if post.slug === 'header'} {@html
	post.content.rendered} {/if} {/each}
  </Header>
	<slot></slot>
	<Logo/>
  <Subscribe>
	{#each posts as post} {#if post.slug === 'subscribe'}
	{@html post.content.rendered}
	{/if} {/each}
  </Subscribe>
