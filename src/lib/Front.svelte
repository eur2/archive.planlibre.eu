<script>
	let visible = true;
	function handleToggle() {
		visible = !visible;
	}
</script>

<aside class="pointer" on:click={handleToggle} on:keydown={handleToggle}>
	{#if visible}
		<div class="fixed z100 t0 l0 r0 b0 flex jc-center ai-center">
			<slot />
		</div>
	{/if}
</aside>
