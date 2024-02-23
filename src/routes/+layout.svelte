<script>
 import "./styles.css";
 let { data, children } = $props();
 import Header from "$lib/Header.svelte";
 import Subscribe from "$lib/Subscribe.svelte";
 import Logo from "$lib/Logo.svelte";
</script>

<Header>
	{@html data.header[0].content.rendered}
</Header>
{@render children()}
<Logo />
<Subscribe>
	{@html data.subscribe[0].content.rendered}
</Subscribe>
