<script>
	export let randomPost;
	let visible = true;
	function handleToggle() {
		visible = !visible;
	}
</script>

<aside class="pointer" on:click={handleToggle} on:keydown={handleToggle}>
	{#if visible}
		<div class="fixed z100 t0 l0 r0 b0 flex jc-center ai-center">
			{#if randomPost && randomPost.acf.image}
				<img
					src={randomPost.acf.image.sizes.large}
					srcset="{randomPost.acf.image.sizes.thumbnail} 400w, {randomPost.acf.image.sizes
						.medium} 800w, {randomPost.acf.image.sizes.large} 1600w"
					width="800"
					height="600"
					alt="plan libre journal"
				/>
			{/if}
		</div>
	{/if}
</aside>
