<script>
	import '../app.css';
	export let data;
	const { header, subscribe } = data;
	import Header from "$lib/Header.svelte";
import Subscribe from "$lib/Subscribe.svelte";
import Logo from "$lib/Logo.svelte";
</script>

<Header>
{@html header.content.rendered}
</Header>
  <slot></slot>
  <Logo/>
<Subscribe>
  {@html subscribe.content.rendered}
</Subscribe>

