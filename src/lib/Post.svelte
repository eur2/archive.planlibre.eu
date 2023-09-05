<script>
	export let post;
	let visible, hovering;
	function handleToggle() {
		visible = !visible;
	}
	function enter() {
		hovering = true;
	}
	function leave() {
		hovering = false;
	}
</script>

<article>
	<header
		on:click={handleToggle}
		on:keydown={handleToggle}
		on:mouseenter={enter}
		on:mouseleave={leave}
		role="button"
		tabindex="0"
	>
		<h2 class="flex1">PL {post.acf.num}</h2>
		<h2 class="flex2">
			{#if post.acf.title === ''}*****{:else}{post.acf.title}{/if}
		</h2>
		<h2 class="flex2">{post.acf.date}</h2>
		<h2 class="flex0">
			<a rel="noreferrer" target="_blank" href={post.acf.pdf}>PDF</a>
		</h2>
	</header>
	{#if hovering}
		{#if post.acf.cover}
			<div class="w50 absolute z10 flex jc-center ai-center">
				<img src={post.acf.cover.sizes.thumbnail} width="300" alt="PL{post.acf.num}" />
			</div>
		{/if}
	{/if}
	{#if visible}
		<div>
			<slot />
		</div>
	{/if}
</article>
